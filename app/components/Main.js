var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var componentHandler = require('exports?componentHandler!material-design-lite/material');

require('../app.css');

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName='appear'
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <header className="mdl-layout__header">
              <div className="mdl-layout__header-row">
                <span className="mdl-layout-title">GitHub Battle</span>
                <div className="mdl-layout-spacer"></div>
              </div>
            </header>
            <main className="mdl-layout__content">
              <div className="main">
                {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
              </div>
            </main>
          </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  },
  componentDidMount: function() {
    componentHandler.upgradeDom();
  }
});

module.exports = Main;
