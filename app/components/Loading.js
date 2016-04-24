var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = React.PropTypes;
var componentHandler = require('exports?componentHandler!material-design-lite/material');

var styles = {
  loader: {
    marginTop: '70px',
  }
}

var Loading = React.createClass({
  render: function() {
    return (
      <div className="mdl-typography--text-center">
        <div className="mdl-spinner mdl-js-spinner is-active" style={styles.loader}></div>
      </div>
    );
  },
  componentDidMount: function() {
    componentHandler.upgradeDom();
  }
});

module.exports = Loading;
