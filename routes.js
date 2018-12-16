var express = require('express'); //requerir express
const router = express.Router(); //usar este modulo de express
// var bodyParser = require('body-parser'); //requerir el middleware bodyParser

// router.use(bodyParser); //middleware

/**
 * Escribo las rutas
 */

router.get('/', function(req,res){
    res.render('index.ejs'); //renderizamos views 
});

router.get('/ping', function(req,res){
    res.render('ping.ejs'); //renderizo la vista de PONG, para luego pedir llenar el form
});

router.get('/user/form', function (req,res){
    res.render('form.ejs');
});

router.post('/user', function(req,res){ //ruta para el post del form
    resp.end(JSON.stringify(req.body)) ; 
});

module.exports = router;
