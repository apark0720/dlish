import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.logout();
  }

  renderAuthLink() {
    if (this.props.loggedIn) {
      return (
        <ul className="nav-logout">
          <li onClick={this.logout}><Link to="/">Log Out</Link></li>
        </ul>
      );
    } else {
      return (
        <ul className="nav-login-signup">
          <li><GreetingContainer /></li>
        </ul>
      );
    }
  }

  render() {
    return(
      <nav>
        <ul>
          <li><Link to="/" className="nav-logo"></Link></li>
          <li><Link to="/" >Menu</Link></li>
          <li><Link to="/" >How it Works</Link></li>
        </ul>
        { this.renderAuthLink() }
      </nav>
    );
  }
}

export default NavBar;
