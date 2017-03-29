var request = require('request');
var config = require('./config.js');
var key = config.apiKey;
var fbAppId = config.fbAppId;

module.exports = {

  apiRequest: function(search, price, callback) {
    var options = {
      method: 'GET',
      url: 'https://services.wine.com/api/beta/service.svc/JSON/catalog',
      qs: {
        size: 50,
        search: search,
        filter: 'rating(85|100)+price(' + price + '|' + (price * (price/10 + 1)) + ')',
        sort: 'rating|descending',
        apikey: key
      },
      headers: {
        'cache-control': 'no-cache'
      },
      json: true
    };

    request(options, function(error, response, body) {
      if (error) {
        console.error('Error in API request', error);
        callback(error, null)
      } else {
        console.log('API body', body.Products.List.length);
        callback(null, body.Products.List);
      }
    });
  },

  topRed: function(price, callback) {
    var options = {
      method: 'GET',
      url: 'https://services.wine.com/api/beta/service.svc/JSON/catalog',
      qs: { 
        filter: 'categories(490+124)+rating(85|100)+price(' + price + '|' + price+10 + ')',
        size: '100',
        sort: 'popularity|descending',
        apikey: key
      },
      headers: {
        'cache-control': 'no-cache'
      },
      json: true
    };

    request(options, function(error, response, body) {
      if (error) {
        callback(error, null);
      } else {
        callback(null, body);
      }
    });
  },

  topWhite: function(price, callback) {
    var options = {
      method: 'GET',
      url: 'https://services.wine.com/api/beta/service.svc/JSON/catalog',
      qs: {
        filter: 'categories(490+125)+rating(85|100)+price(10|20)',
        size: '100',
        sort: 'popularity|descending',
        apikey: key
      },
      headers: {
        'cache-control': 'no-cache'
      },
      json: true
    };

    request(options, function(error, response, body) {
      if (error) {
        console.error('Error from top white function', error);
        callback(error, null);
      } else {
        console.log('Response for top white search', body);
        callback(null, body);
      }
    });
  },

  topRated: function(price, callback) {
    var options = {
      method: 'GET',
      url: 'https://services.wine.com/api/beta/service.svc/JSON/catalog',
      qs: {
        filter: 'categories(490+124)',
        size: '5',
        apikey: key
      },
      headers: {
        'cache-control': 'no-cache'
      },
      json: true
    };

    request(options, function(error, response, body) {
      if (error) {
        console.error('Error from topRated function', error);
        callback(error, null);
      } else {
        console.log('Response from topRed function');
        callback(null, body);
      }
    });
  },

  forcedRequest: function (price, wine, callback) {
    var forcedOptions = {
      method: 'GET',
      url: 'https://services.wine.com/api/beta/service.svc/JSON/catalog',
      qs: {
        filter: 'rating(85|100)+price(' + price + '|' + price+10 + ')',
        size: '100',
        search: wine,
        apikey: key
      },
      headers: {
        'cache-control': 'no-cache'
      },
      json: true
    };

    request(forcedOptions, function(error, response, body) {
      if(error){
        callback(error, null);
      } else {
        callback(null, body);
      }
    });
  }
}