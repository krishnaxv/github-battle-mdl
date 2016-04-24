var React = require('react');
var PropTypes = React.PropTypes;
var componentHandler = require('exports?componentHandler!material-design-lite/material');

// Import
var styles = require('../styles')

var Prompt = React.createClass({
  propTypes: {
    header: PropTypes.string.isRequired,
    onSubmitUser: PropTypes.func.isRequired,
    onUpdateUser: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired
  },
  invalidUsername: function(e) {
    e.preventDefault();
  },
  render: function() {
    return (
      <div className="page-content mdl-typography--text-center">
        <p className="mdl-layout-title">{this.props.header}</p>
        <form onSubmit={this.props.onSubmitUser} onInvalid={this.invalidUsername}>
          <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input
              type="text"
              id="github-username"
              className="mdl-textfield__input"
              onChange={this.props.onUpdateUser}
              value={this.props.username}
              pattern="[A-Za-z0-9]+"
              autoComplete="off"
              autoFocus
              required
            />
            <label className="mdl-textfield__label" htmlFor="github-username">GitHub Username</label>
            <span className="mdl-textfield__error mdl-typography--text-left">Use at least one letter & one numeral.</span>
          </div>
          <div>
            <button type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" style={styles.playerInputBtn}>Continue</button>
          </div>
        </form>
      </div>
    );
  },
  componentDidMount: function() {
    componentHandler.upgradeDom();
  }
});

module.exports = Prompt;
