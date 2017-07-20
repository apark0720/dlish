import React from 'react';
import { Link } from 'react-router-dom';

import SessionFormContainer from '../session_form/session_form_container';
import AuthModal from '../auth_modal';

class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user_drop_active: false
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({user_drop_active: false}, () => {window.removeEventListener('click', this.onClick, false );});
  }

  toggleDropdown(e) {
    this.setState({user_drop_active: true}, () => {window.addEventListener('click', this.onClick, false);});
    e.stopPropagation();
  }

  render() {
    const { currentUser, logout } = this.props;

    const sessionLinks = () => (
      <nav>
        <AuthModal formType='login' />
      </nav>
    );

    const personalGreeting = (currentUser, logout) => (
      <div className="login-navbar">
        <button onClick={this.toggleDropdown.bind(this)} >
          {this.props.currentUser.first_name} {this.props.currentUser.last_name}
        </button>
        {this.state.user_drop_active ? <UserDropdownContainer /> : <div className="user-dropdown-hidden"></div> }
      </div>
    );

    return (
      currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
    );
  }
}

export default Greeting;
