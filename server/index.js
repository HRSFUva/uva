var express = require('express');
var bodyParser = require('body-parser');
var dbUtilities = require('./utilities/dbUtils.js');
var wineApiUtils = require('./utilities/wineApiUtils.js');

//INSTANTIATE APP
var app = express();

//Middleware for parse application/json
app.use(bodyParser.json());

//load static files
app.use(express.static(__dirname + '/../react-client/dist'));

//SETTING UP ALL THE ROUTES FOR THE CLIENT REQUEST

app.get('/wine', function(req, res) {
  console.log('GET request to /wine received');
  res.statusCode = 200;
  res.send('response from app.get /wine');
});

//This route invoke function that requests wine.com api.
// app.get('/catalog', wineApiUtils.apiRequest);

//POST request for search
app.post('/search', function(req, res) {
  var query = req.body.search;
  var price = req.body.price || 10;

  console.log('search:', query);

  wineApiUtils.apiRequest(query, price, function(error, success, results) {
    if(error){
      console.log('Error from server API request', error);
      res.sendStatus(404).send('not found')
    } else if (success) {
      // console.log('results from search post API', results);
      res.send(results);
    }
  })

});

//POST request for signup
app.post('/signup', function(req, res) {
  var user = req.body.username;
  var pass = req.body.password;

  //check for valid username, i.e. currently not in use
  dbUtilities.checkuserName(user, function(error, valid, results){
    if(error){
      res.send('error inside checkuserName index');
    } else if (!valid) {
      res.send('duplicate username')
    } else if (valid) {
      dbUtilities.addUser(user, pass, function(error, success, results){
        if(error) {
          res.send('error inside addUser index.js');
        } else if (success) {
          res.send('response from app.post /signup');
        }
      })
    }
  })
});

app.post('/users/username/', function(req, res) {
  var username = req.body.username;

  dbUtilities.checkuserName(username, function(error, valid, results){
    if(error){
      console.error(error)
      res.send(error);
    } else {
      console.log('results from checkuserName', results);
      res.send(results);
    }
  })
})

//POST request for login
app.post('/login', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  dbUtilities.validateUser(username, password, function(error, results) {
    if(error){
      console.log(error)
    } else {
      res.send(results);
    }
  })
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


wineApiUtils.forcedRequest(function(error, results) {
  if(error){
    console.log('error inside forcedRequest', error);
  } else {
    console.log('super giant huge massive results', Object.keys(results));

    resBody = JSON.parse(results.body);
    console.log('super giant huge massive resultsDOUBLE TROUBLE', Object.keys(resBody.Products));
    var wines = resBody.Products.List;
    console.log('winesLength', wines.length)
    wines.forEach(function(wine){
      dbUtilities.addWine(wine, function(error, results){
        if(error){
          console.error(error)
        } else {
          console.log('results from addwine dbUtilities', results)
        }
      })
    })

  }
})





