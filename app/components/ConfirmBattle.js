var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var componentHandler = require('exports?componentHandler!material-design-lite/material');

// Import Components
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('../wrappers/UserDetailsWrapper');
var Loading = require('./Loading');

// Import
var styles = require('../styles');

var ConfirmBattle = React.createClass({
  propTypes: {
    isLoading: PropTypes.bool.isRequired,
    onInitiateBattle: PropTypes.func.isRequired,
    playersInfo: PropTypes.array.isRequired
  },
  render: function() {
    return (
      this.props.isLoading ?
        <Loading /> :
        <div>
          <div className="mdl-grid user-details">
            <div className="mdl-cell mdl-cell--6-col">
              <UserDetailsWrapper header="Player One">
                <UserDetails info={this.props.playersInfo[0]} />
              </UserDetailsWrapper>
            </div>
            <div className="mdl-cell mdl-cell--6-col">
              <UserDetailsWrapper header="Player Two">
                <UserDetails info={this.props.playersInfo[1]} />
              </UserDetailsWrapper>
            </div>
          </div>
          <div className="mdl-typography--text-center">
            <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={this.props.onInitiateBattle}>Initiate Battle</button>
            <Link to="/playerOne">
              <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" style={styles.marginLeftBtn}>Start Over</button>
            </Link>
          </div>
        </div>
    );
  },
  componentDidMount: function() {
    componentHandler.upgradeDom();
  },
});

module.exports = ConfirmBattle;
