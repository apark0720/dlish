import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { openModal } from '../../../actions/modal_actions';
import LoginFormContainer from '../session_form/login_form_container';
// import SignupFormContainer from '../signup_form_container';
import UserDropdownContainer from '../user_dropdown/user_dropdown_container';

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
      <nav className="login-navbar">
        <button onClick={this.props.showLogin}>Log In</button>
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

const mapDispatchToProps = (dispatch) => ({
  showLogin: () => dispatch(openModal(<LoginFormContainer formType={'login'}/>))
})

export default connect(null, mapDispatchToProps)(Greeting);
