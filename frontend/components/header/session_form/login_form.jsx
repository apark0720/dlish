import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
  }

  componentWillUnmount(){
    this.props.clearErrors();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  errors() {
    if (this.props.errors) {
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
	}

  otherLink() {
    if (this.props.formType === 'login') {
      return (
        <div className="other-link">
          <p>New to dlish?</p>
          <button onClick={this.props.showSignup}>Sign Up</button>
        </div>
      );
    } else {
      return (
        <div className="other-link">
          <p>Already have an account?</p>
          <button onClick={this.props.showLogin}>Log In</button>
        </div>
      );
    }
  }

  handleGuestLogin(e) {
    e.preventDefault();
    this.props.processForm({ user: {username: "RonBurgundy", password: "123456"} });
  }

  render() {
    return (
      <div className="session-form-container" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={this.handleSubmit} className="session-form-box">
          <p className="divider">
  					<span className="divider-line">
              Log In With Your Email
            </span>
          </p>
          {this.errors()}
          <div className="session-form">
            <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="session-input"
                placeholder="Email"
              />
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="session-input"
                placeholder="Password"
              />
            <br/>
            <input className="pink-button-form" type="submit" value="LOG IN" />
          </div>
          <div className="bottomborder" onClick={this.props.clearErrors}>
            {this.otherLink()}
          </div>
        </form>
        <br />
        <input className="pink-button-form" type="submit" onClick={this.handleGuestLogin} value="GUEST LOG IN" />
        <br />
      </div>
    );
  }
}

export default withRouter(LoginForm);
