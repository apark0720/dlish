import React from 'react';
import { connect } from 'react-redux';
import { login, logout, signup } from '../../../actions/session_actions';
import { closeModal, openModal } from '../../../actions/modal_actions';
import LoginForm from './login_form';
// import SignupFormContainer from './signup_form_container';

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch, { formType }) => {
  const processForm = (formType === 'login') ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)).then(() => dispatch(closeModal())),
    formType,
    showSignup: () => dispatch(openModal(<SignupFormContainer formType='signup'/>)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
