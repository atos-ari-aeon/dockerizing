
/**
 * Module dependencies.
 */

var express = require('express');

var app = express(),
    http = require('http'),
    server = http.createServer(app),
    router = express.Router();


var APP_PORT = 2000;

app.set('port', APP_PORT || 3000);

//Set the routes
require('./routes/routes').route(app);

server.listen(app.get('port'), function(){
  console.log("Listening on port "+app.get('port'));
});
