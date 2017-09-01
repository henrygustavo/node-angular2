var express = require('express');
var app = express();
var path = require('path');

//------Register our ROUTERS

var apiRoutes = require('./app/routes/api')(app, express);
app.use('/api', apiRoutes);

//----------------

//CORS

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-Width, content-type,Authorization');
  next();
});

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname)+ '/index.html');
});

app.listen('9000');

console.log("here we go");