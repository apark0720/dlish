import {
  combineReducers
} from 'redux';
import SessionReducer from './session_reducer';
import RecipeReducer from './recipe_reducer';
import modalReducer from './modal_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  recipe: RecipeReducer,
  modal: modalReducer
});

export default RootReducer;
