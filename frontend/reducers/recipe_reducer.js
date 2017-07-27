import {
  RECEIVE_ALL_RECIPES,
  RECEIVE_RECIPE,
  DELETE_RECIPE,
} from '../actions/recipe_actions';

import { RECEIVE_UPVOTE, REMOVE_UPVOTE } from '../actions/upvote_actions';


import merge from 'lodash/merge';

const RecipeReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_RECIPES:
      return merge({}, state, action.recipes);
    case RECEIVE_RECIPE:
      const recipe = action.recipe;
      return merge({}, state, {[action.recipe.id]: action.recipe});
    case RECEIVE_UPVOTE:
      let addNewUpvote = merge({}, state);
      if( addNewUpvote[action.upvote.recipe_id]){
        addNewUpvote[action.upvote.recipe_id].upvoted = true;
        addNewUpvote[action.upvote.recipe_id].upvote_count++;
                  }
      return addNewUpvote;
    case REMOVE_UPVOTE:
      let removeUpvote = merge({}, state);
      if( removeUpvote[action.upvote.recipe_id]) {
      removeUpvote[action.upvote.recipe_id].upvoted = false;
      removeUpvote[action.upvote.recipe_id].upvote_count--;
                  }
      return removeUpvote;
    default:
      return state;
  }
};

export default RecipeReducer;
