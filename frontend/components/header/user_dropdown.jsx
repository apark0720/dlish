import React from 'react';
import { Link, hashHistory } from 'react-router-dom';


class UserDropdown extends React.Component {
  constructor (props){
    super(props);

    this.redirectToProfile = this.redirectToProfile.bind(this);
  }

  redirectToProfile () {
    hashHistory.push('/users/' + this.props.currentUser.id);
  }

  render() {
    return (
      <div className="user-dropdown">
        <ul>
          <li onClick={this.redirectToProfile}>My Profile</li>
          <li onClick={this.props.logout}>Log Out</li>
        </ul>
      </div>
    );
  }
}

export default UserDropdown;
