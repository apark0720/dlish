import { RECEIVE_ORDER } from '../actions/order_actions';
import merge from 'lodash/merge';

const OrderReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ORDER:
      const order = action.order;
      return merge({}, state, {[order.id]: order});
    default:
      return state;
  }
};

export default OrderReducer;
