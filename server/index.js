var express = require('express');
var bodyParser = require('bodyParser');
var dbUtilities = require('./utilities/dbUtils.js');

//INSTANTIATE APP
var app = express();

//Middleware for parse application/json
app.use(bodyParser.json());

//load static files
// app.use(express.static(__dirname + '../react-client/dist'));

//SETTING UP ALL THE ROUTES FOR THE CLIENT REQUEST
//GET request for top wines
app.get('/wine', function(req, res) {
  console.log('GET request to /wine received');
  res.send('response from app.get /wine');
});

//POST request for search
app.post('/search', function(req, res) {
  console.log('POST request to /search received');
  res.send('response from app.post /search');
});

//POST request for signup
app.post('/signup', function(req, res) {
  console.log('POST request to /signup received');
  res.send('response from app.post /signup');
});

//POST request for login
app.post('/login', function(req, res) {
  console.log('POST request to /login received');
  res.send('response from app.post /login');
});

//POST request for review
app.post('/review', function(req, res) {
  console.log('POST request to /review received');
  res.send('reponse from app.post /review');
});


app.listen(3000, function() {
  console.log('listening to port 3000');
});