var express = require('express');
var bodyParser = require('body-parser');
var db = require(./utilities/dbUtils.js);

//INSTANTIATE APP
var app = express();

//MIDDLEWARE
app.use(bodyParser.json());

//load static files
// app.use(express.static(__dirname + '../react-client/dist'));

//SET UP ROUTE HANDLING
//Get request for top wines
app.get('/wine', function(req, res) {
  console.log('Hello from: inside app.get /wine');
  res.send('response from app.get /wine');
});

//Search Requests
app.post('/search', function(req, res) {
  console.log('hello from inside app.post /search');
  res.send('response from app.post /search');
});

//Login Requests
app.post('/login', function(req, res) {
  console.log('hello from inside app.post /search');
  res.send('response from app.post /login');
});

//Signup Requests
app.post('/signup', function(req, res) {
  console.log('hello from inside app.post /signup')
  res.send('response from app.post /signup');
});