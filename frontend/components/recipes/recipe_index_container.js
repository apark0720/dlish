import {
  connect
} from 'react-redux';

import RecipeIndex from './recipe_index';
import {
  requestAllRecipes
} from '../../actions/recipe_actions';
import {
  selectAllRecipes
} from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    recipes: selectAllRecipes(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestAllRecipes: () => dispatch(requestAllRecipes())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeIndex)
