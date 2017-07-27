import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Upvote extends React.Component {
  constructor(props) {
    super(props);
    this.upvoteRecipe = this.upvoteRecipe.bind(this);
    this.unupvoteRecipe = this.unupvoteRecipe.bind(this);
    this.upvoteOrUnupvoteRecipe = this.upvoteOrUnupvoteRecipe.bind(this);
  }

  upvoteRecipe(e) {
    e.preventDefault();
    this.props.createUpvote(this.props.userId, this.props.recipeId);
  }

  unupvoteRecipe(e) {
    e.preventDefault();
    this.props.deleteUpvote(this.props.userId, this.props.recipeId);
  }

  upvoteOrUnupvoteRecipe() {
    if(this.props.upvoted){
      return (
        <figure className="unupvote-button" onClick={this.unupvoteRecipe}></figure>
      );
    } else {
      return (
        <figure className="upvote-button" onClick={this.upvoteRecipe}></figure>
      );
    }
  }

  render() {
    return (
      <div className="upvote-button-frame">
        {this.upvoteOrUnupvoteRecipe()}
      </div>
    );
  }
}
export default Upvote;
