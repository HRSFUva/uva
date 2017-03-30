var express = require('express');
var bodyParser = require('body-parser');
var db = require('./utilities/dbUtils.js');
var wineApiUtils = require('./utilities/wineApiUtils.js');
var cors = require('cors');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var fb = require('./utilities/config.js');
var ppUtils = require('./utilities/passportUtils.js');
var User = require('../database-mongo/models/User.js');
var path = require('path');

//initializing Passport with FB OAuth
passport.use(new FacebookStrategy({
    clientID: fb.fbAppId,
    clientSecret: fb.secret,
    callbackURL: 'http://localhost:3000/login/facebook/callback',
  },
  function(accessToken, refreshToken, profile, done) {
    
    User.find({name: profile.displayName}, function(err, user) {
      if (err) {
        console.error(err);
        return done(err);
      } 
      if (user.length < 1) {
        User.create({
          name: profile.displayName,
          joined: new Date(),
          accessToken: accessToken,
          meta: {
            reviews: 0,
            friends: 0,
          }, 
        }, function(err, user) {
          if (err) {
            return done(err);
          } else {
            return done(null, user);
          }
        });
      } else {
        done(null, user);
      }
    });
  }
));



//INSTANTIATE APP
var app = express();


//MIDDLEWARE
app.use(bodyParser.json());
app.use(cors());
app.use(require('cookie-parser')());
app.use(require('express-session')({secret: 'keyboard cat', resave: true, saveUninitialized: true}));

app.use(passport.initialize());
app.use(passport.session());


// AUTHENTICATION
app.get('/', ppUtils.isLoggedIn, (req, res) => {
  res.sendFile(path.join(__dirname, '/../react-client/dist'));
});

app.use(express.static(__dirname + '/../react-client/dist'));

passport.serializeUser((user, done) => {
  // user is returned as an object within an array
  done(null, user[0].accessToken);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});


app.get('/login/facebook',
  passport.authenticate('facebook'));

app.get('/login/facebook/callback', 
  passport.authenticate('facebook', { failureRedirect: '/login',
                                      // session: false,
                                      successRedirect: '/'
                                    })
);


//SETTING UP ALL THE ROUTES FOR THE CLIENT REQUEST

// initializes the red and white wines on the client
app.get('/init', function(req, res) {
  var wines = {
    top10Reds: [],
    top10Wines: [],
    topRated: [],
  };

  db.top10Reds(function(error, topReds) {
    if (error) {
      res.send(error);
    } else {
      wines.top10Reds = topReds;
      db.top10Whites(function(error, topWhites) {
        if(error){
          res.send(error)
        } else {
          wines.top10Whites = topWhites;
          res.send(wines);
         //GET TOP 10 RATED
         // var topRated = db.top10Rated(function(error, topRated){
         //  if(error){
         //    res.send(error)
         //  } else {
         //    wines.topRated = topRated;
         //    res.send(wines);
         //    console.log('WIIINES())()()()', wines);
         //  }
         // });
        }
      });
    }
  });
});


app.options('*', cors());

app.get('/getWines', function(req, res) {
  // can be modified to take in a price from req/res later
  var price = 10;

  wineApiUtils.topRed(price, function(error, results) {
    db.storeWines(results.Products.List, function() {
      wineApiUtils.topWhite(price, function(error, results) {
        db.storeWines(results.Products.List, function() {
          res.send('storage of red and white wines complete!');
        });
      });
    });
  });
});

//This route invokes wine.com api.
// app.get('/catalog', wineApiUtils.apiRequest);

//POST request for search
app.post('/search', function(req, res) {
  var query = req.body.search;
  var price = req.body.price || 10;

  console.log('search!!!!!!!!!!!!!!!:', query, price);

  db.searchWines(query, price, function(error, results) {
    if(error){
      console.log('Error from server API request', error);
      res.sendStatus(404).send('not found')
    } else {
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
  db.checkuserName(user, function(error, valid, results){
    if(error){
      res.send('error inside checkuserName index');
    } else if (!valid) {
      res.send('duplicate username')
    } else if (valid) {
      db.addUser(user, pass, function(error, success, results){
        if(error) {
          res.send('error inside addUser index.js');
        } else if (success) {
          res.send(results);
        }
      })
    }
  })
});

app.post('/users/username/', function(req, res) {
  var username = req.body.username;

  db.checkuserName(username, function(error, valid, results){
    if(error){
      console.error(error)
      res.send(error);
    } else {
      console.log('results from checkuserName', results);
      res.send(results);
    }
  });
});

app.options('/users/username/');

//POST request for login
app.post('/login', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  db.validateUser(username, password, function(error, results) {
    if(error){
      console.log(error)
    } else {
      res.send(results);
    }
  })
});

//POST request for review
app.post('/review', function(req, res) {
  var content = req.body.review;
  var rating = req.body.rating;
  var product = req.body.product;
  var username = req.body.username;
  var product_id = req.body.product_id;
  var review = {
    content: content,
    rating: rating,
    product: product,
    username: username,
    product_id: product_id
  }
  db.addReview(review, function(error, results){
    if(error){
      console.log('error inside dbUtils addReview', error);
    } else {
      console.log('success after add wine review', results);
      res.send(results)
    }
  })
});

//GET ALL REVIEWS FOR RESPECTIVE PRODUCT
app.post('/reviews', function(req, res) {
  var product_id = req.body.product_id;
  console.log('product inside reviews GET all', product_id);

  db.getReviews(product_id, function(error, reviews){
    if(error){
      console.log('error!!!!!!!!!!!!')
      res.send(error)
    } else {
      console.log('success!!!!!!!!!!');
      console.log('reviews', reviews)
      res.send(reviews)
    }
  })
});

// var pricesArray = [0, 10, 20, 30, 40, 50];
// var winesArray = ['red', 'white', 'rose', 'Cabernet Franc', 'cabernet', 'fran', 'cabernet sauvignon', 'gamay', 'grenache', 'garnacha', 'malbec', 'merlot', 'mourvedre', 'mataro', 'nebbiolo', 'pinot', 'pinot noir', 'sango', 'sangiovese', 'shiraz', 'syrah', 'zin', 'zinfandel', 'chenin', 'chenin blanc', 'blanc', 'Gewurztraminer', 'marsanne', 'muscat', 'pinot blanc', 'blanc', 'pinot gris', 'pinot grigio', 'riesling', 'roussanne', 'sauvignon blanc', 'fume blanc', 'semillon', 'viognier', 'gruner veltliner', 'brut']

// winesArray.forEach(function(wine){

//   pricesArray.forEach(function(price){

//     wineApiUtils.forcedRequest(price, wine, function(error, results) {
//       if(error){
//         console.log('error inside forcedRequest', error);
//       } else {

//         resBody = JSON.parse(results.body);
//         var wines = resBody.Products.List;
//         wines.forEach(function(wine){

//           var query = {
//             name: wine.Name,
//             year: wine.Vintage + '',
//             type: wine.Varietal.Name,
//             redORwhite: wine.Varietal.WineType.Name,
//             origin: wine.Appellation.Name,
//             region: wine.Appellation.Region.Name,
//             priceMin: wine.PriceMin,
//             priceMax: wine.PriceMax,
//             apiRating: wine.Ratings.HighestScore
//           }

//           db.addWine(query, function(error, results){
//             if(error){
//               console.error(error)
//             } else {
//               console.log('results from addwine db', results)
//             }
//           })
//         })
//       }
//     })
//   })
// })

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('listening to port ' + port);
});





      // var query = {
      //   name: wine.Name,
      //   year: wine.Vintage + '',
      //   type: wine.Varietal.Name,
      //   redORwhite: wine.Varietal.WineType.Name,
      //   origin: wine.Appellation.Name,
      //   region: wine.Appellation.Region.Name,
      //   priceMin: wine.PriceMin,
      //   priceMax: wine.PriceMax,
      //   apiRating: wine.Ratings.HighestScore
      // }


      // db.addWine(query, function(error, results){
      //   if(error){
      //     console.error(error)
      //   } else {
      //     console.log('results from addwine db', results)
      //   }
      // })
// app.listen(3000);
// httpsServer.listen(3000)



      // //to see how the object is structured


//     })

//   }
// })
      // console.log('VARIETAL', wine.Varietal)
      // console.log('VINEYARD', wine.Vineyard)
      // console.log('VINTAGES', wine.Vintages)
      // console.log('GEOLOCATION',wine.GeoLocation)
      // console.log('APPELLATION', wine.Appellation)

      // //where the information we want is located
      // console.log('NAME', wine.Name) //possibly change
      // console.log('YEAR', wine.Vintage)
      // console.log('TYPE', wine.Varietal.Name)
      // console.log('REDORWHITE', wine.Varietal.WineType.Name)
      // console.log('ORIGIN', wine.Appellation.Name)
      // console.log('REGION', wine.Appellation.Region.Name)
      // console.log('PRICE(MIN-MAX)', wine.PriceMin + '-' + wine.PriceMax)
      // console.log('APIRATING', wine.Ratings.HighestScore)
// []

//In terminal
//export PORT=3000
//nodemon index.js or npm server-dev


// example data format for wine product from API request
// { Id: 167706,
// Name: 'CVNE Crianza 2013',
// Url: 'http://www.wine.com/v6/CVNE-Crianza-2013/wine/167706/Detail.aspx',
// Appellation: [Object],
// Labels: [Object],
// Type: 'Wine',
// Varietal: [Object],
// Vineyard: [Object],
// Vintage: '2013',
// Community: [Object],
// Description: '',
// GeoLocation: [Object],
// PriceMax: 15.99,
// PriceMin: 12.99,
// PriceRetail: 15,
// ProductAttributes: [Object],
// Ratings: [Object],
// Retail: null,
// Vintages: [Object] }
// app.options('*', function(req, res) {
//   res.send('awesome')
// })

// app.get('/.well-known/acme-challenge/:content', function(req, res) {
//   res.send('PW-phkjKRkbF7Oeg1ed8b_EuymzQGBI0leXIYDq5Hyc')
// })
