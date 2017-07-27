import * as APIUtil from "../util/upvote_api_util";

export const RECEIVE_UPVOTE = "RECEIVE_UPVOTE";
export const REMOVE_UPVOTE = "REMOVE_UPVOTE";

export const receiveUpvote = upvote => ({
  type: RECEIVE_UPVOTE,
  upvote
});

export const removeUpvote = upvote => ({
  type: REMOVE_UPVOTE,
  upvote
});

export const createUpvote = (currentUserId, recipeId) => dispatch => {
  return (
    APIUtil.createUpvote(currentUserId, recipeId)
    .then( upvote => dispatch(receiveUpvote(upvote)))
  );
};

export const deleteUpvote = (currentUserId, recipeId) => dispatch => {
  return (
    APIUtil.deleteUpvote(currentUserId, recipeId)
    .then( upvote => dispatch(removeUpvote(upvote)))
  );
};
