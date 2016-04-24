var React = require('react');
var PropTypes = React.PropTypes;

// Import Components
var Results = require('../components/Results');

// Import
var githubHelpers = require('../utils/githubHelpers');

var ResultsContainer = React.createClass({
  getInitialState: function() {
    return {
      isLoading: true,
      scores: []
    };
  },
  render: function() {
    return (
      <Results
        isLoading={this.state.isLoading}
        scores={this.state.scores}
        playersInfo={this.props.location.state.playersInfo}
      />
    );
  },
  componentDidMount: function() {
    githubHelpers.battle(this.props.location.state.playersInfo).then(function(scores) {
      this.setState({
        isLoading: false,
        scores: scores
      })
    }.bind(this));
  }
});

module.exports = ResultsContainer;
