import React from 'react';
import { withRouter, hashHistory } from 'react-router-dom';
import SuggestionIndexItem from './suggestion_index_item';


class SuggestionIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllRecipes();
  }

  selectRecipes() {
    let activeRecipes = [];
    this.props.recipes.forEach(recipe => {
      if (recipe.status === "pending") {
        activeRecipes.push(
          <SuggestionIndexItem
            key={recipe.id}
            recipe={recipe} />);
      }
    });
    return activeRecipes;
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
