import {
  RECEIVE_MODAL
} from '../actions/modal_actions';

const ModalReducer = (state = null, action) => {
  switch (action.type) {
    case RECEIVE_MODAL:
      return action.modalType;
    default:
      return state;
  }
};

export default ModalReducer;
