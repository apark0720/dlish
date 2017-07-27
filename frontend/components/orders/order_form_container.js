import { connect } from 'react-redux';
import { createOrder } from '../../actions/order_actions';
import OrderForm from './orderform';
import { receiveErrors, clearErrors } from '../../actions/error_actions';

const mapStateToProps = ({ session, errors}) => ({
  currentUser: session.currentUser,
  errors
});

const mapDispatchToProps = dispatch => ({
  createOrder: recipe => dispatch(createOrder(order)),
  clearErrors: () => dispatch(clearErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
