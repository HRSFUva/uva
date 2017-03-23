var request = require('request');
var bodyParser = require('body-parser');
// var key = require('./apikey.js');
var key = process.env.KEY;




module.exports = {

  apiRequest: function(search, price, callback){

    var options = {
      method: 'GET',
      url: 'http://services.wine.com/api/beta/service.svc/JSON/catalog?size=50&search=' + search + '&price=' + price + '|' + (price * (price/10 + 1)) + '&sort=rating&apikey=' + key,
      headers:
       { 'cache-control': 'no-cache' },
       json: true
    };

    request(options, function(error, response, fields) {
      if (error) {
        console.error('Error in API request', error);
        callback(error, false, null)
     } else {
        console.log('API body', response.body.Products.List.length);
        callback(null, true, response.body.Products.List);
      }
    });
  },

  topRed: function(price, callback){
    var options = {
      method: 'GET',
      url: 'http://services.wine.com/api/beta/service.svc/JSON/catalog?filter=categories(490+124)&offset=10&size=5&apikey=' + key,
      qs:
      { filter: 'categories(490 124)',
      offset: '10',
      size: '5',
      },
        headers:
      { 'cache-control': 'no-cache' },
      json: true
    };

    request(options, function(error, response, fields) {
      if (error) {
        console.error('Error from top red function', error);
        callback(error, false, null);
      } else {
        console.log('Top rated results', response);
        callback(error, true, response);
      }
    })
  },

  topWhite: function(price, callback) {
    var options = {
      method: 'GET',
      url: 'http://services.wine.com/api/beta/service.svc/JSON/catalog?filter=categories(490+124)&offset=10&size=5&apikey=' + key,
      qs:
        { filter: 'categories(490 124)',
      offset: '10',
      size: '5',
      },
      headers:
      { 'cache-control': 'no-cache' },
      json: true
    }

    request(options, function(error, response, fields) {
      if (error) {
        console.error('Error from top white function', error);
        callback(error, false, null);
      } else {
        console.log('Response for top white search', response);
        callback(error, true, response);
      }
    })
  },

  topRated: function(price, callback) {
    var options = {
      method: 'GET',
      url: 'http://services.wine.com/api/beta/service.svc/JSON/catalog?filter=categories(490+124)&offset=10&size=5&apikey=' + key,
      qs:
        { filter: 'categories(490 124)',
      offset: '10',
      size: '5',
      },
      headers:
      { 'cache-control': 'no-cache' },
      json: true
    };

    request(options, function(error, response, fields) {
      if (error) {
        console.error('Error from topRated function', error);
        callback(error, false, null);
      } else {
        console.log('Response from topRed function');
        callback(error, true, response);
      }
    })
  },

  forcedRequest: function (callback) {
   var forcedOptions = { method: 'GET',
     url: 'http://services.wine.com/api/beta/service.svc/JSON/catalog',
     qs:
      { offset: '10',
        size: '10',
        apikey: '7e30469636811cfa7dd0aef5dffcddbd',
        rating: '85|100',
        price: '10|20',
        format: 'JSON'
      },
     headers:
      { 'cache-control': 'no-cache' }
      };
    request(forcedOptions, function(error, response, fields) {
      if(error){
        callback(error, response)
      } else {
        callback(null, response)
      }
    })
  }

}

var options = {
  method: 'GET',
  url: 'http://services.wine.com/api/beta/service.svc/JSON/catalog?filter=categories(490+124)&offset=10&size=5&apikey=' + key,
  size: 25,
};

var pricePoints = [0, 10, 20, 30, 40, 50]

var varietals = [];


