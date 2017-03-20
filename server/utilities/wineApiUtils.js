var request = require('request');
var key = require('./apikey.js');



module.exports = {

  apiRequest: function(search, callback){
    var options = {
      method: 'GET',
      url: 'http://services.wine.com/api/beta/service.svc/JSON/catalog?filter=categories(490+124)&offset=10&size=5&apikey=' + key.apiKey,
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
        // console.log('API response', response);
        console.error('Error in API request', error);
        callback(error, false, null)
        // res.send(body);
      } else {
        // console.log('API body', response);
        callback(null, true, response) 
      }
    });
  },

  topRed: function(price, callback){
    var options = {
      method: 'GET',
      url: 'http://services.wine.com/api/beta/service.svc/JSON/catalog?filter=categories(490+124)&offset=10&size=5&apikey=' + key.apikey,
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
      url: 'http://services.wine.com/api/beta/service.svc/JSON/catalog?filter=categories(490+124)&offset=10&size=5&apikey=' + key.apikey,
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
      url: 'http://services.wine.com/api/beta/service.svc/JSON/catalog?filter=categories(490+124)&offset=10&size=5&apikey=' + key.apikey,
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
        console.error('Error from topRated function', error);
        callback(error, false, null);
      } else {
        console.log('Response from topRed function');
        callback(error, true, response);
      }
      
    })
  }

};



// var options = {
//   method: 'GET',
//   url: 'http://services.wine.com/api/beta/service.svc/JSON/catalog?filter=categories(490+124)&offset=10&size=5&apikey=' + apiKey,
//   // qs: 
//   //  { filter: 'categories(490 124)',
//   //    offset: '10',
//   //    size: '5',
//   //    apikey: '7e30469636811cfa7dd0aef5dffcddbd' },
//   // headers: 
//   //  { 'postman-token': 'b781b801-612b-f6aa-3cef-f08dd927b9fc',
//   //    'cache-control': 'no-cache' },
//   // body: 'pa87901'
// };

/*
http://services.wine.com/api/version/service.svc/format/resource?apikey=key&parameters
For different wine api data, replace 'resource' with the following:
  Supported values are: catalog, reference, and catalogmap
*/


// var apiRequest = function (req, res) {
//   request(options, function(error, response, body) {
//     if (!error) {
//       // console.log('API response', response);
//       console.log('API body', JSON.parse(body));
//       res.send(body);
//     } else {
//       console.error('Error in API request', error);
//     }
//   });
// };


// module.exports = {
//   apiRequest: apiRequest
// };