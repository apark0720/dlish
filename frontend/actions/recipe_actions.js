export const RECEIVE_ALL_RECIPES = 'RECEIVE_ALL_RECIPES';
export const RECEIVE_RECIPE = 'RECEIVE_RECIPE';
export const DELETE_RECIPE = 'DELETE RECIPE';

import * as CampAPIUtil from '../util/recipe_util';

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
  return CampAPIUtil.fetchAllRecipes()
    .then(recipes => dispatch(receiveAllRecipes(recipes)));
};
//
export const requestSingleRecipe = (id) => (dispatch) => {
  return CampAPIUtil.fetchSingleRecipe(id)
    .then(recipe => dispatch(receiveSingleRecipe(recipe)));
};

export const createRecipe = (recipe) => (dispatch) => {
  return CampAPIUtil.createRecipe(recipe)
    .then(recipe => dispatch(receiveSingleRecipe(recipe)));
};

export const updateRecipe = (recipe, id) => (dispatch) => {
  return CampAPIUtil.editRecipe(recipe, id)
    .then(recipe => dispatch(receiveSingleRecipe(recipe)));
};

export const deleteRecipe = (id) => (dispatch) => {
  return CampAPIUtil.deleteRecipe(id)
    .then(recipe => dispatch(deleteSingleRecipe(recipe)));
};
