import {
  combineReducers
} from 'redux';
import SessionReducer from './session_reducer';
import RecipeReducer from './recipe_reducer';
import ModalReducer from './modal_reducer';
import ErrorReducer from './error_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  recipe: RecipeReducer,
  modal: ModalReducer,
  errors: ErrorReducer
});

export default RootReducer;
