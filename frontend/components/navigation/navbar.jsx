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

  authLinks() {
    if (this.props.currentUser) {
      return (
        <div className="row">
          <ul><li><p>{ this.props.currentUser.email }</p></li></ul>
          <button onClick={ this.handleLogout }>Log Out</button>
        </div>);
    } else {
      return (
        <div className="row">
          <a onClick={ this.handleLoginClick }>Log In</a>
        </div>);
    }
  }

  render() {
    return (
      <nav className="navbar">
        <menu className="row">
          <Link to="/">
            <img src={ window.images.logo }/>
          </Link>
          <ul className="row">
            <li>
              <a target="_blank">Upvote</a>
            </li>
            <li>
              <a target="_blank">Submit Recipe</a>
            </li>
          </ul>
        </menu>
        <menu>
          { this.authLinks() }
          <Link to="/menu">
            <button>View Menu</button>
          </Link>
        </menu>
      </nav>
    );
  }
}
export default Navbar;
