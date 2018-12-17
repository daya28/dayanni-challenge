# dayanni-challenge

Construir una app cliente/servidor con Express.js

Se instalaron las siguientes dependencias en el package.json:
    "body": "^5.1.0",
    "ejs": "^2.6.1",
    "express": "^4.16.4",
    "generator": "^1.0.1",
    "morgan": "^1.9.1",
    "static": "^2.0.0"
    
Se instancian en el index.js las siguientes variables:
    var express = require('express'); //instanciamos express
    var app = express(); //iniciamos express
    const morgan = require('morgan'); //instanciamos morgan
    const routes = require('./routes'); // requiero mis rutas
    const static = require('static'); 
    
Se instancian los middlewares:
    app.use(morgan('dev'));

    app.use(routes); // enlazo routes.js

    app.use(express.static('public'));
    
Se configuran las vistas:
    app.set('views', __dirname + '/views'); //donde estan mis vistas

    app.set('view engine', 'ejs'); //configuramos el template engine
    
Luego se crean las vistas:
    index.ejs //es el "/" (home), se hace el llamado a "/ping"
    ping.ejs //response la ruta "/ping" la cual muestra la palabra PONG
    form.ejs //se renderiza la ruta "/user/form" la cual muestra el formulario
    user.ejs //para mostrar el listado de usuarios registrados

public/javascripts/validate.js 
    se crea la funcion 
        function validateForm() //usando expresiones regulare para validar el form, y luego mediante POST almacenar los datos en un local storage.


