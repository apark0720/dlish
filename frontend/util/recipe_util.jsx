export const fetchAllRecipes = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/recipes'
  });
};

export const fetchSingleRecipe = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/recipes/${id}`
  });
};

export const createRecipe = (Recipe) => {
  return $.ajax({
    method: 'POST',
    url: 'api/recipes',
    data: { Recipe }
  });
};

export const editRecipe = (Recipe, id) => {
  return $.ajax({
    method: 'PATCH',
    contentType: false,
    processData: false,
    url: `api/recipes/${id}`,
    data: Recipe
  });
};

export const deleteRecipe = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/recipes/${id}`,
  });
};
