var React = require('react');
var PropTypes = React.PropTypes;

function UserDetails(user) {
  var cardBackground = {
    background: 'url(' + user.info.avatar_url + ') center / cover'
  }
  return (
    <div className="github-user-card mdl-card mdl-shadow--2dp">
      <div className="mdl-card__title" style={cardBackground}>
        <div className="overlay"></div>
        <h2 className="mdl-card__title-text">{user.info.name}</h2>
      </div>
      <div className="mdl-card__supporting-text">
        <p>{user.info.login}</p>
        {user.info.location && <p>{user.info.location}</p>}
      </div>
      <table className="mdl-data-table mdl-js-data-table">
        <tbody>
          {
            !!user.score &&
              <tr>
                <td className="mdl-data-table__cell--non-numeric">Score</td>
                <td className="mdl-data-table__cell--non-numeric">{user.score}</td>
              </tr>
          }
          <tr>
            <td className="mdl-data-table__cell--non-numeric">Profile URL</td>
            <td className="mdl-data-table__cell--non-numeric">{user.info.html_url}</td>
          </tr>
          {
            user.info.company &&
              <tr>
                <td className="mdl-data-table__cell--non-numeric">Company</td>
                <td className="mdl-data-table__cell--non-numeric">{user.info.company}</td>
              </tr>
          }
          {
            user.info.blog &&
              <tr>
                <td className="mdl-data-table__cell--non-numeric">Blog</td>
                <td className="mdl-data-table__cell--non-numeric">{user.info.blog}</td>
              </tr>
          }
          <tr>
            <td className="mdl-data-table__cell--non-numeric">Public Repos</td>
            <td className="mdl-data-table__cell--non-numeric">{user.info.public_repos}</td>
          </tr>
          <tr>
            <td className="mdl-data-table__cell--non-numeric">Followers</td>
            <td className="mdl-data-table__cell--non-numeric">{user.info.followers}</td>
          </tr>
          <tr>
            <td className="mdl-data-table__cell--non-numeric">Following</td>
            <td className="mdl-data-table__cell--non-numeric">{user.info.following}</td>
          </tr>
          <tr>
            <td className="mdl-data-table__cell--non-numeric">Member Since</td>
            <td className="mdl-data-table__cell--non-numeric">{user.info.created_at}</td>
          </tr>
          <tr>
            <td className="mdl-data-table__cell--non-numeric">Last Activity</td>
            <td className="mdl-data-table__cell--non-numeric">{user.info.updated_at}</td>
          </tr>
        </tbody>
      </table>
      <div className="mdl-card__actions mdl-typography--text-center">
        <a href={user.info.html_url} className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" target="_blank">
          GitHub Profile
        </a>
      </div>
    </div>
  );
}

UserDetails.propTypes = {
  score: PropTypes.number,
  info: PropTypes.shape({
    name: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    company: PropTypes.string,
    blog: PropTypes.string,
    location: PropTypes.string,
    public_repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    created_at: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired
  })
}

module.exports = UserDetails;
