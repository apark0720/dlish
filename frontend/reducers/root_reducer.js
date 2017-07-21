import {
  combineReducers
} from 'redux';
import SessionReducer from './session_reducer';
import modalReducer from './modal_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  modal: modalReducer
});

export default RootReducer;
