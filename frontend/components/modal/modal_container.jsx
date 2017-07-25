import React from 'react';
import { connect } from 'react-redux';

import ModalWrapper from './modal_wrapper';
import LoginContainer from '../session_form/login_container';
import SignupContainer from '../session_form/signup_container';
import { hideModal } from '../../actions/modal_actions';

const ModalContainer = ({ modal, hideModal }) => {
  switch (modal) {
    case 'LOGIN_MODAL':
      return (
        <ModalWrapper hideModal={ hideModal } title="Log In">
          <LoginContainer />
        </ModalWrapper>
      );
    case 'SIGNUP_MODAL':
      return (
        <ModalWrapper hideModal={ hideModal } title="Sign Up">
          <SignupContainer />
        </ModalWrapper>
      );
    case 'RECIPE_MODAL':
      return (
        <ModalWrapper hideModal={ hideModal } title="View Recipe Details">
          <RecipeContainer />
        </ModalWrapper>
      );
    default:
      return null;
  }
};

const mapStateToProps = ({ modal }) => ({
  modal
});

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalContainer);
