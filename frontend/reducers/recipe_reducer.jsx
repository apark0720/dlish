import {
  RECEIVE_ALL_RECIPES,
  RECEIVE_RECIPE,
  DELETE_RECIPE,
} from '../actions/recipe_actions';

import merge from 'lodash/merge';

const RecipeReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_RECIPES:
      return merge({}, state, action.recipes);
    case RECEIVE_RECIPE:
      const recipe = action.recipe;
      return merge({}, state, {[action.recipe.id]: action.recipe});
    default:
      return state;
  }
};

export default RecipeReducer;
