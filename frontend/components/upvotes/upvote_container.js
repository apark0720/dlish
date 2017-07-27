import { connect } from "react-redux";
import { createUpvote, deleteUpvote } from "../../actions/upvote_actions";
import Upvote from './upvote';

const mapStateToProps = (state, ownProps) => {
  return {
    userId: state.session.currentUser.id
  };
};

const mapDispatchToProps = (dispatch) => ({
  createUpvote: (currentUserId, postId) => dispatch(createUpvote(currentUserId, postId)),
  deleteUpvote: (currentUserId, postId) => dispatch(deleteUpvote(currentUserId, postId))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Upvote);
