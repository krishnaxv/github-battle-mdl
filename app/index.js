var React = require('react');
var ReactDOM = require('react-dom');

// Import
var routes = require('./config/routes');

ReactDOM.render(
  routes,
  document.querySelector('#app')
);
