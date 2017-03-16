var request = require('request');


var apiKey = '7e30469636811cfa7dd0aef5dffcddbd';

var options = {
  method: 'GET',
  url: 'http://services.wine.com/api/beta/service.svc/JSON/catalog?filter=categories(490+124)&offset=10&size=5&apikey=' + apiKey,
  // qs: 
  //  { filter: 'categories(490 124)',
  //    offset: '10',
  //    size: '5',
  //    apikey: '7e30469636811cfa7dd0aef5dffcddbd' },
  // headers: 
  //  { 'postman-token': 'b781b801-612b-f6aa-3cef-f08dd927b9fc',
  //    'cache-control': 'no-cache' },
  // body: 'pa87901'
};

/*
http://services.wine.com/api/version/service.svc/format/resource?apikey=key&parameters
For different wine api data, replace 'resource' with the following:
  Supported values are: catalog, reference, and catalogmap
*/


var apiRequest = function (req, res) {
  request(options, function(error, response, body) {
    if (!error) {
      // console.log('API response', response);
      console.log('API body', JSON.parse(body));
      res.send(body);
    } else {
      console.error('Error in API request', error);
    }
  });
};


module.exports = {
  apiRequest: apiRequest
};