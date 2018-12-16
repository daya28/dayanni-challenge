'user strict'

var http = require('http').createServer(webServer);
    form = require('fs').readFileSync('/form.ejs');
    querystring = require('querystring');
    util = require('util');
    estosSonLosDatos = '';

function webServer(req,res){
    if(req.method == "GET"){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(form);
    }
    if(req.method == "POST"){
        req
            .on('data', function(data){
                estosSonLosDatos += data
            });
            .on('end', function(){
                var templateString = `estos son los datos que enviaste por POST como string: ${estosSonLosDatos}`
                console.log(templateString);
                res.end(templateString)
            });

    }
}