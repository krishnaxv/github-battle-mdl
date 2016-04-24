var React = require('react');
var transparentBg = require('../styles').transparentBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var componentHandler = require('exports?componentHandler!material-design-lite/material');

// Import
require('../app.css')

var Home = React.createClass({
  render: function() {
    return (
      <div className="page-content mdl-typography--text-center home">
        <p className="mdl-typography--headline">Last & Final Call for All the Transformers!</p>
        <p className="mdl-typography--title">Time for Battle!</p>
        <Link to="/playerOne">
          <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
            Get Started
          </button>
        </Link>
      </div>
    );
  },
  componentDidMount: function() {
    componentHandler.upgradeDom();
  }
});

module.exports = Home;
