import { connect } from "react-redux";
import { createUpvote, deleteUpvote } from "../../actions/upvote_actions";
import Upvote from './upvote';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
  createUpvote: (currentUserId, recipeId) => dispatch(createUpvote(currentUserId, recipeId)),
  deleteUpvote: (currentUserId, recipeId) => dispatch(deleteUpvote(currentUserId, recipeId))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Upvote);
