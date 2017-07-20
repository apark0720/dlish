import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
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
    const account = this.state;
    this.props.processForm({account});
    // this.props.history.push('/');
  }

  demoLogin() {
    this.props.login({ account: {
      username: "yaakovbeiss",
      password: "password"
    }});
    this.props.history.push('/');
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

    return (
      <div>
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">

            <div className="errors">{this.renderErrors()}</div>

            <div className="login-form">
              <br/>
                <label className="sign-in-text-input">
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


                <div className="log-in-buttons">
                  <input className="submit-button" type="submit" value="Log In" />
                </div>
  
              </div>




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
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUpForm);
