var index = require('../index');
var expect = require('chai').expect;
// var stubs = require('./Stubs');
var $ = require('jquery');
var request = require('request');

describe('Node Server Request Listener Function', function() {
  it ('should answer GET request for /wine with status code 200', function() {
    var options = {
      method: 'GET',
      url: 'http://localhost:' + process.env.PORT + '/wine'
    };
    request(options, function(error, res, body) {
      expect(res.StatusCode).to.equal(200);
    });
  });
});

