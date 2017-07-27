import React from 'react';
import { withRouter, hashHistory } from 'react-router-dom';
import SuggestionIndexItem from './suggestion_index_item';


class SuggestionIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllRecipes();
  }

  selectRecipes() {
    return this.props.recipes.map(recipe => {
      if (recipe.status === "pending") {
        return (
          <SuggestionIndexItem
            key={recipe.id}
            recipe={recipe} />);
      } else {
        return null;
      }
    });
  }

  render() {
    const { recipes } = this.props;
    let activeRecipes = this.selectRecipes();

    return (
      <div className="allrecipes-scope">
        <h1 className="all-header">Vote for Next Week's Menu</h1>
        <div className="recipes">
          <div className="allrecipes-text">
            <span>Showing results in:</span>
            <span className="allrecipes-span">98144</span>
          </div>
          <div className="recipe-list">
          {activeRecipes}
          </div>
        </div>
      </div>
    );

  }
}

export default withRouter(SuggestionIndex);
