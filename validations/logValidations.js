const Joi = require('joi');

const createLogSchema = Joi.object({
  application_id: Joi.string().required(),
  type: Joi.string().valid('error', 'info', 'warning').required(),
  priority: Joi.string().valid('lowest', 'low', 'medium', 'high', 'highest').required(),
  path: Joi.string().required(),
  message: Joi.string().required(),
  request: Joi.object({
    data: Joi.object({
      user: Joi.string().required(),
    }).required(),
  }).required(),
  response: Joi.object({
    data: Joi.object({
      error_code: Joi.number().required(),
    }).required(),
  }).required(),
});

module.exports = {
  createLogSchema,
};