
var express = require('express'); //instanciamos express
var app = express(); //iniciamos express
const morgan = require('morgan'); //instanciamos morgan
const routes = require('./routes'); // requiero mis rutas
// const static = require('static'); 


/**
 * Escribo mis settings
 */

app.set('nombreApp', 'Mi challenge personal'); //este es el nombre que le coloco a mi app

app.set('views', __dirname + '/views'); //donde estan mis vistas

app.set('view engine', 'ejs'); //configuramos el template engine

/**
 * Escribo middlewares
 */

app.use(morgan('dev'));

app.use(routes); // enlazo routes.js

// app.use(express.static('public'));

/**
 * Escuchando el puerto
 */

app.listen(3000, function(){
    console.log('this server is working');
    console.log('Nombre de la app', app.get('nombreApp'));
});

