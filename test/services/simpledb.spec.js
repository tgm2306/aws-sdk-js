// Generated by CoffeeScript 1.12.3
(function() {
  var AWS, helpers;

  helpers = require('../helpers');

  AWS = helpers.AWS;

  describe('AWS.SimpleDB', function() {
    return describe('setEndpoint', function() {
      it('uses global endpoint if region is us-east-1', function() {
        var service;
        service = new AWS.SimpleDB({
          region: 'us-east-1'
        });
        return expect(service.endpoint.host).to.equal('sdb.amazonaws.com');
      });
      return it('uses normal setEndpoint functionality if region is not us-east-1', function() {
        var service;
        service = new AWS.SimpleDB({
          region: 'us-west-2'
        });
        return expect(service.endpoint.host).to.equal('sdb.us-west-2.amazonaws.com');
      });
    });
  });

}).call(this);
