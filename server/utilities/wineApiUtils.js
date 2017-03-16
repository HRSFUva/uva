var request = require('request');


var apiKey = '7e30469636811cfa7dd0aef5dffcddbd';

var options = {
  method: 'GET',
  url: 'http://services.wine.com/api/beta/service.svc/JSON/catalog?filter=categories(490+124)&offset=10&size=5&apikey=' + apiKey,
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
      // console.log('API body', body);
      res.send(body);
    } else {
      console.error('Error in API request', error);
    }
  });
};


module.exports = {
  apiRequest: apiRequest
};