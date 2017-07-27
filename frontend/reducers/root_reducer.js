import {
  combineReducers
} from 'redux';
import SessionReducer from './session_reducer';
import RecipeReducer from './recipe_reducer';
import UpvoteReducer from './upvote_reducer';
import ModalReducer from './modal_reducer';
import ErrorReducer from './error_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  recipe: RecipeReducer,
  upvote: UpvoteReducer,
  modal: ModalReducer,
  errors: ErrorReducer
});

export default RootReducer;
