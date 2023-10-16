'use strict'

const mongoose = require('mongoose');
const {Schema} = mongoose;

//Modelo Applicacion
const applicationSchema = new Schema({
  name: String,
}, {
  timestamps: true,
});

//Modelo Autorizacion
const authorizationSchema = new Schema({
    application_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Application',
      },
      token: String,
},{timestamps: true});

//Modelo Logs
const logSchema = new Schema({
    application_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Application',
    },
    type: {
      type: String,
      enum: ['error', 'info', 'warning'],
    },
    priority: {
      type: String,
      enum: ['lowest', 'low', 'medium', 'high', 'highest'],
    },
    path: String,
    message: String,
    request: {
      data: mongoose.Schema.Types.Mixed,
    },
    response: {
      data: mongoose.Schema.Types.Mixed,
    },
},{timestamps: true});

const Application = mongoose.model('Application', applicationSchema);
const Authorization = mongoose.model('Authorization', authorizationSchema);
const Log = mongoose.model('Log', logSchema);

module.exports = { Application, Authorization, Log };