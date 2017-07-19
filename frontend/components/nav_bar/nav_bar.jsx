import React from 'react';
import { Link } from 'react-router-dom';
import { nav } from 'react-bootstrap';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showMe: false, searchShow: false};
  }

  componentDidMount() {
    window.addEventListener("click", this.closeDropdown);
  }

  loginLink() {
    if (this.props.currentUser) {
      return "";
    } else {
      return (
        <li>
          <Link to="/login">
            Log in
          </Link>
        </li>
      );
    }
  }

  signupLink() {
    if (this.props.currentUser) {
      return "";
    } else {
      return (
        <li className="nav-item">
          <Link to="/signup">
            Sign up
          </Link>
        </li>
      );
    }
  }

  render () {
    return (
      <div className="w-nav" data-animation="default" data-collapse="medium" data-duration={400}>
        <div className="nav-bar-container w-container"><a className="w-nav-brand" href="#"><img className="logo" sizes="85px" src="images/dlish_logo.png" srcSet="images/dlish_logo-p-500.png 500w, images/dlish_logo-p-800.png 800w, images/dlish_logo-p-1080.png 1080w, images/dlish_logo-p-1600.png 1600w, images/dlish_logo.png 1628w" width={85} /></a>
          <nav className="nav-menu w-nav-menu" role="navigation"><a className="nav-link w-nav-link" href="#">How it Works</a><a className="nav-link w-nav-link" href="#">Login</a></nav>
        </div>
      </div>
    );
  }
}

export default NavBar;
