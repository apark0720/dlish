export const createUpvote = (currentUserId, recipeId) => {
  console.log(currentUserId, recipeId);
  console.log({upvote: {user_id: currentUserId, recipe_id: recipeId}});
  return $.ajax({
    method: "POST",
    url: "/api/upvotes",
    data: {upvote: {user_id: currentUserId, recipe_id: recipeId}}
  });
};

export const deleteUpvote = (currentUserId, recipeId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/upvotes/${currentUserId}`,
    data: {upvote: {user_id: currentUserId, recipe_id: recipeId}}
  });
};
