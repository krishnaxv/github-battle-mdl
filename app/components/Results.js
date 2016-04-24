var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

// Import
var utilHelpers = require('../utils/utilHelpers');

// Import Components
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('../wrappers/UserDetailsWrapper');
var Loading = require('./Loading');

function StartOver() {
  return (
    <div className="mdl-typography--text-center">
      <Link to="/playerOne">
        <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Start Over</button>
      </Link>
    </div>
  )
}

function Results(props) {
  if (props.isLoading ==  true) {
    return (
      <Loading />
    );
  }

  if (props.scores[0] == props.scores[1]) {
    return (
      <div className="mdl-typography--text-center">
        <p className="mdl-typography--title">It's a tie!</p>
        <StartOver />
      </div>
    )
  }

  var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  var losingIndex = winningIndex == 1 ? 0 : 1;

  return (
    <div>
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--6-col">
          <UserDetailsWrapper header="Winner">
            <UserDetails info={props.playersInfo[winningIndex]} score={props.scores[winningIndex]} />
          </UserDetailsWrapper>
        </div>
        <div className="mdl-cell mdl-cell--6-col">
          <UserDetailsWrapper header="Loser">
            <UserDetails info={props.playersInfo[losingIndex]} score={props.scores[losingIndex]} />
          </UserDetailsWrapper>
        </div>
      </div>
      <StartOver />
    </div>
  )
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  scores: PropTypes.array.isRequired,
  playersInfo: PropTypes.array.isRequired
}

module.exports = Results;
