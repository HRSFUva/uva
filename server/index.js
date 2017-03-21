var express = require('express');
var bodyParser = require('body-parser');
var dbUtilities = require('./utilities/dbUtils.js');
var wineApiUtils = require('./utilities/wineApiUtils.js');
var db = require('../database-mongo/index.js') //export instance of mongoose connection to server index.js

//INSTANTIATE APP
var app = express();

//Middleware for parse application/json
app.use(bodyParser.json());

//load static files
app.use(express.static(__dirname + '../react-client/dist'));

//SETTING UP ALL THE ROUTES FOR THE CLIENT REQUEST
//GET request for top wines

app.get('/', function(req, res) {
  res.send('hello world');
});

app.get('/wine', function(req, res) {
  console.log('db', db);
  res.statusCode = 200;
  res.send('response from app.get /wine');
});


//This route invoke function that requests wine.com api.
// app.get('/catalog', wineApiUtils.apiRequest);

//POST request for search
app.post('/search', function(req, res) {
  var query = req.body.search;
  console.log('search:', query);

  wineApiUtils.apiRequest(query, function(error, success, results) {
    if(error){
      console.log('Error from server API request', error);
      res.sendStatus(404).send('not found')
    } else if (success) {
      // console.log('results from search post API', results);
      res.send(results);
    }
  });
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
  // db.checkUsername(req, res, function(err, item){
  //   console.log('error', err);
  //   console.log('item', item);
  // });
  res.send('response from app.post /login');
});

//POST request for review
app.post('/review', function(req, res) {
  console.log('POST request to /review received');
  res.send('reponse from app.post /review');
});

var port = process.env.PORT;

app.listen(process.env.PORT, function() {
  console.log('listening to port ' + port);
});

//In terminal
//export PORT=3000
//nodemon index.js or npm server-dev







