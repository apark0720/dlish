import {
  OPEN_MODAL,
  CLOSE_MODAL
} from '../actions/modal_actions';

const defaultState = {
  modalIsOpen: false,
  content: null,
};

const ModalReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case OPEN_MODAL:
      return { modalIsOpen: true, content: action.content };
    case CLOSE_MODAL:
      return defaultState;
    default:
      return state;
  }
};

export default ModalReducer;
