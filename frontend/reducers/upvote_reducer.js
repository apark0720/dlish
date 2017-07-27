import merge  from 'lodash/merge';
import { RECEIVE_UPVOTE, REMOVE_UPVOTE } from '../actions/upvote_actions';

const UpvoteReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_UPVOTE:
      let addNewUpvote = merge({}, state);
      if( addNewUpvote[action.upvote.post_id]){
        addNewUpvote[action.upvote.post_id].upvoted = true;
        addNewUpvote[action.upvote.post_id].upvotes_count
                      = addNewUpvote[action.upvote.post_id].upvotes_count + 1;
                  }
      return addNewUpvote;
    case REMOVE_UPVOTE:
      let removeUpvote = merge({}, state);
      if( removeUpvote[action.upvote.post_id]) {
      removeUpvote[action.upvote.post_id].upvoted = false;
      removeUpvote[action.upvote.post_id].upvotes_count
                    = removeUpvote[action.upvote.post_id].upvotes_count - 1;
                  }
      return removeUpvote;
    default:
      return state;
  }
};

export default UpvoteReducer;
