import { connect } from 'react-redux';
import { createRecipe } from '../../actions/recipe_actions';
import SubmitRecipeForm from './submit_recipe_form';

import { receiveErrors, clearErrors } from '../../actions/error_actions';

const mapStateToProps = ({ session, errors}) => ({
  currentUser: session.currentUser,
  errors
});

const mapDispatchToProps = dispatch => ({
  createRecipe: recipe => dispatch(createRecipe(recipe)),
  clearErrors: () => dispatch(clearErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(SubmitRecipeForm);
