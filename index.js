'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port =  process.env.PORT || 3999;

mongoose.Promise = global.Promise;

//Conexion a base de datos
mongoose.connect('mongodb://127.0.0.1:27017/MongoDB',{useNewUrlParser: true})
    .then(()=>{
        console.log('Succesful conection');

        //servidor
        app.listen(port,()=>{
            console.log('Server running http://localhost:3999/')
        });
    })
    .catch(error => console.log(error));