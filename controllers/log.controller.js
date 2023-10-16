'use strict'

//Modelos
const Log = require('../models/models').Log;

//Validadores
const { createLogSchema } = require('../validations/logValidations');

class LogController {

    async getAllLogs(req, res, next) {
      try {
        const logs = await Log.find(); 
        return res.status(200).json(logs);
      } catch (error) {
        return res.status(500).json({ message: 'Error en servidor', error: error });
      }
    }
  
    async createLog(req, res, next) {      

      const params = req.body;
        
        const { error, value } = createLogSchema.validate(params);
    
        if (error) {
          return res.status(400).json({ message: 'Datos inválidos', details: error.details });
        }
    
      try {
        
        const newLog = new Log(value);
    
        await newLog.save();
    
        return res.status(201).json({ message: 'Log creado exitosamente' });
      } catch (error) {
        return res.status(500).json({ message: 'Error en el servidor', error: error });
      }
    }

    async getLogInfo(req, res, next) {
      
      const logId = req.params.id;

      try {
        const log = await Log.findById(logId);

        if (!log) {
          return res.status(404).json({ message: 'Log no encontrado' });
        }

        return res.status(200).json(log);
      } catch (error) {
        return res.status(500).json({ message: 'Error en servidor', error: error });
      }
    }

    async updateLog(req, res, next) {
      try {
        const params = req.body;
        const { error, value } = createLogSchema.validate(params);
  
        if (error) {
          return res.status(400).json({ message: 'Datos inválidos', details: error.details });
        }
  
        const logId = req.params.id;

        const updatedLog = await Log.findOneAndUpdate({ _id: logId }, value, { new: true });
  
        if (!updatedLog) {
          return res.status(404).json({ message: 'Log no encontrado' });
        }
  
        return res.status(200).json({ message: 'Log actualizado exitosamente', log: updatedLog });
      } catch (error) {
        return res.status(500).json({ message: 'Error en el servidor', error: error });
      }
    }
  
    async deleteLog(req, res, next) {
      try {

        const logId = req.params.id;

        const deletedLog = await Log.findOneAndRemove({ _id: logId });
  
        if (!deletedLog) {
          return res.status(404).json({ message: 'Log no encontrado' });
        }
  
        return res.status(200).json({ message: 'Log eliminado exitosamente' });
      } catch (error) {
        return res.status(500).json({ message: 'Error en el servidor', error: error });
      }
    }
    
  }
  
  module.exports = new LogController();