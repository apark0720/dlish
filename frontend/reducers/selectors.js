import {
  values
} from 'lodash';

export const selectRecipe = ({ recipe }, id) => {
  const rec = recipe[id] || {};
  return rec;
}

export const selectAllRecipes = ({ recipe }) =>  values(recipe);
