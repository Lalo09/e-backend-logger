'use strict'

//Requires
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

//Ejecutar servidor
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Routing
const logs_routes = require('./routes/logs.routes');

app.use('/api',logs_routes);
app.use('/api', require('./routes/main.routes'));


app.get('/test',(req,res)=>{
    return res.status(200).send({
        nombre:'Jose Eduardo',
        message:'Testing routes...'
    })
})


module.exports = app;