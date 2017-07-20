import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import AuthModal from '../auth_modal';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.loggedIn) {
  //     this.props.history.push('/');
  //   }
  // }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const account = this.state;
    this.props.processForm(account);
  }

  demoLogin() {
    e.preventDefault();
       this.props.processForm({email: "bob@gmail", password: "123456"});
     }

 renderDemo() {
   if (this.props.formType === 'login') {
     return (
       <button className="btn demo-btn" onClick={this.handleDemoClick}>Demo Account</button>
     );
   }
 }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const renderMessage = (
        this.props.formType === 'login' ? 'Log In' : 'Sign Up for dlish'
      );

    return (
      <div>
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">

            <div className="errors">{this.renderErrors()}</div>

            <div className="login-form">
              <br/>
                <label className="log-in-text-input">
                  <input type="text"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.update('username')}
                    className="login-input"
                  />
                </label>
                <br/>

                <br/>
                <label className="log-in-text-input">
                  <input type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="login-input"
                  />
                </label>
                <br/>

                  <input type="submit" className="submit-button" value="Log In" />
              </div>
            </form>

            <div className="social-box">
            <br/>
              <a className="linkedin logo" href="https://www.linkedin.com" target="_blank">
                <img src={window.images.linkedin_icon} className="linkedin-icon" />
              </a>
              <a className="github logo" href="https://github.com" target="_blank">
                <img src={window.images.github_icon} className="github-icon"  />
              </a>
              <a className="resume logo" href="http://www.google.com" target="_blank">
                <img src={window.images.resume_icon} className="resume-icon" />
              </a>
            </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
