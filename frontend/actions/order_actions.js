import * as APIUtil from "../util/order_util";

export const RECEIVE_ORDER = "RECEIVE_ORDER";

export const receiveOrder = order => ({
  type: RECEIVE_ORDER,
  order
});

export const createOrder = order => dispatch => {
  return (
    APIUtil.createOrder(order)
    .then( newOrder => dispatch(receiveOrder(newOrder)))
  );
};
