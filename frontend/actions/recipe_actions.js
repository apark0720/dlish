export const RECEIVE_ALL_RECIPES = 'RECEIVE_ALL_RECIPES';
export const RECEIVE_RECIPE = 'RECEIVE_RECIPE';
export const DELETE_RECIPE = 'DELETE RECIPE';

import * as APIUtil from '../util/recipe_util';

export const receiveAllRecipes = (recipes) => {
  return {
    type: RECEIVE_ALL_RECIPES,
    recipes
  };
};

export const receiveSingleRecipe = (recipe) => {
  return {
    type: RECEIVE_RECIPE,
    recipe
  };
};

export const deleteSingleRecipe = (recipe) => {
  return {
    type: DELETE_RECIPE,
    recipe
  };
};

export const requestAllRecipes = () => (dispatch) => {
  return APIUtil.fetchAllRecipes()
    .then(recipes => dispatch(receiveAllRecipes(recipes)));
};
//
export const requestSingleRecipe = (id) => (dispatch) => {
  return APIUtil.fetchSingleRecipe(id)
    .then(recipe => dispatch(receiveSingleRecipe(recipe)));
};

export const createRecipe = (recipe) => (dispatch) => {
  return APIUtil.createRecipe(recipe)
    .then(recipe => dispatch(receiveSingleRecipe(recipe)));
};

export const updateRecipe = (recipe, id) => (dispatch) => {
  return APIUtil.editRecipe(recipe, id)
    .then(recipe => dispatch(receiveSingleRecipe(recipe)));
};

export const deleteRecipe = (id) => (dispatch) => {
  return APIUtil.deleteRecipe(id)
    .then(recipe => dispatch(deleteSingleRecipe(recipe)));
};
