import React from 'react';
import { connect } from 'react-redux';

import { closeModal } from '../../actions/modal_actions';

const ModalContainer = ({ closeModal, modalIsOpen, content }) => (
  <div className={ modalIsOpen ? 'modal-structure' : 'modal-structure hidden' } onClick={closeModal}>
      { content }
  </div>
);

const matchStateToProps = ({modal: { modalIsOpen, content }}) => ({
  modalIsOpen,
  content
});

const matchDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(matchStateToProps, matchDispatchToProps)(ModalContainer);
