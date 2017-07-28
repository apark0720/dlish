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

export const createRecipe = (recipe) => {
  return $.ajax({
    method: 'POST',
    url: 'api/recipes',
    data: { recipe }
  });
};

export const editRecipe = (recipe, id) => {
  return $.ajax({
    method: 'PATCH',
    contentType: false,
    processData: false,
    url: `api/recipes/${id}`,
    data: recipe
  });
};

export const deleteRecipe = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/recipes/${id}`,
  });
};
