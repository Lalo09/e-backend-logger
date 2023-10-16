'use strict';

const router = require('express').Router();
const prefix = '/logs';
const verifyToken = require('../middlewares/auth')

const LogController = require('../controllers/log.controller');

router.get(`${prefix}`,verifyToken, LogController.getAllLogs);
router.post(`${prefix}/`,verifyToken, LogController.createLog);
router.get(`${prefix}/:id`,verifyToken, LogController.getLogInfo);
router.put(`${prefix}/:id`,verifyToken, LogController.updateLog);
router.delete(`${prefix}/:id`,verifyToken, LogController.deleteLog);

module.exports = router;