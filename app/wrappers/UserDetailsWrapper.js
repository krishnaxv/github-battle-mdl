var React = require('react');
var PropTypes = React.PropTypes;

function UserDetailsWrapper(props) {
  return (
    <div>
      <p className="mdl-typography--text-center mdl-typography--title">{props.header}</p>
      {props.children}
    </div>
  );
}

module.exports = UserDetailsWrapper;
