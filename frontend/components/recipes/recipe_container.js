import {
  connect
} from 'react-redux';

import {
  receiveModal,
  hideModal
} from '../../actions/modal_actions';
import RecipeModal from './recipe_modal';

const mapStateToProps = state => ({
  errors: state.session.errors
});

const mapDispatchToProps = dispatch => ({
  receiveModal: (modalType) => dispatch(receiveModal(modalType)),
  hideModal: () => dispatch(hideModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeModal);
