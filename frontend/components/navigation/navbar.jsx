import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.handleGuestLogin = this.handleGuestLogin.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleSignupClick = this.handleSignupClick.bind(this);
  }

  handleLoginClick(e) {
    e.preventDefault();
    this.props.receiveModal("LOGIN_MODAL");
  }

  handleSignupClick(e) {
    e.preventDefault();
    this.props.receiveModal("SIGNUP_MODAL");
  }

  handleGuestLogin(e) {
    e.preventDefault();
    this.props.login();
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    let email = '';
    if (this.props.currentUser) {
      email = this.props.currentUser.email;
    }
    return (
      <nav className="navbar">
        <menu className="row">
          <Link to="/">
            <img src={ window.images.logo }/>
          </Link>
          <ul className="row">
            <li>
              <a target="_blank"
                href="https://www.linkedin.com/">
                About
              </a>
            </li>
            <li>
              <a target="_blank"
                href="mailto:apark0720@gmail.com">Contact</a>
            </li>
          </ul>
        </menu>
        <menu>
          <Switch>
            <Route exact path="/">
              <div className="row">
                <a onClick={ this.handleLoginClick }>Log In</a>
                <button onClick={ this.handleGuestLogin }>Get Started</button>
              </div>
            </Route>
            <Route>
              <div className="row">
                <ul><li><p>{ email }</p></li></ul>
                <button onClick={ this.handleLogout }>Log Out</button>
              </div>
            </Route>
          </Switch>
        </menu>
      </nav>
    );
  }
}
export default Navbar;
