var request = require('request');


var apikey = '7e30469636811cfa7dd0aef5dffcddbd';

var options = {
  method: 'GET',
  url: 'http://services.wine.com/api/v1.0/service.svc/JSON/catalogue?apikey=' + apiKey,
};

var apiRequest = function (req, res) {
  request(options, function(error, response, body) {
    if (!error) {
      console.log('API response', response);
      console.log('API body', body);
      //Callback(response.body.);
    } else {
      console.error('Error in API request', error);
    }
  });
};


module.exports = {
  apiRequest: apiRequest
};