var React = require('react');
var PropTypes = React.PropTypes;

// Import Components
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      isLoading: true,
      playersInfo: []
    };
  },
  handleInitiateBattle: function() {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    });
  },
  render: function() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        onInitiateBattle={this.handleInitiateBattle}
        playersInfo={this.state.playersInfo}
      />
    );
  },
  componentDidMount: function() {
    var query = this.props.location.query;
    // Fetch information from GitHub
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo]).then(function(players) {
      // console.log('PLAYERS', players);
      this.setState({
        isLoading: false,
        playersInfo: [players[0], players[1]]
      });
    }.bind(this));
  }
});

module.exports = ConfirmBattleContainer;
