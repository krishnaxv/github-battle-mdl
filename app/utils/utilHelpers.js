var React = require('react');

// Method to convert Object to String
var helpers = {
  objectToStr: function(object) {
    return <pre>{JSON.stringify(object, null, ' ')}</pre>;
  }
}

module.exports = helpers;
