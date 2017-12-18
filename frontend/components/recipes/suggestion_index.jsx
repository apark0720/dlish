import React from 'react';
import { withRouter, hashHistory } from 'react-router-dom';
import SuggestionIndexItem from './suggestion_index_item';


class SuggestionIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filter: "" };
  }

  componentDidMount() {
    this.props.requestAllRecipes();
  }

  selectRecipes(flavor) {
    let selected = this.props.recipes;

    if (flavor === ('Savory' || 'Spicy' || 'Sweet')) {
      selected = this.props.recipes.filter(recipe => (recipe.category === flavor));
    }
    selected.sort((a, b) => (b.upvote_count - a.upvote_count));

    return selected.map(recipe => {
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

  setFilter(filter) {
    return e => {
      this.setState({
        [filter]: e.currentTarget.value
      });
    };
  }

  render() {
    const { recipes } = this.props;
    return (
      <div className="allrecipes-scope">
        <h1 className="all-header">Vote for Next Week's Menu</h1>
        <p style={{ 'textAlign': 'center', 'fontSize': '16px', 'marginBottom': '40px' }}>Click on the <b>image</b> to view the <b>recipe video</b></p>
        <div className="recipes">
          <div>
            <span>Showing results in:  </span>
            <span className="allrecipes-span">98144</span>
          </div>

          <div className="allrecipes-text"><span>Filter:</span>
            <select onChange={this.setFilter('filter')} >
              <option value="" selected>All Flavors</option>
              <option value="Savory">Savory</option>
              <option value="Spicy">Spicy</option>
              <option value="Sweet">Sweet</option>
            </select>
          </div>
        </div>

        <div className="recipe-list">
          {this.selectRecipes(this.state.filter)}
        </div>
      </div>
    );

  }
}

export default withRouter(SuggestionIndex);
