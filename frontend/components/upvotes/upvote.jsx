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
    this.props.createUpvote(this.props.currentUser.id, this.props.recipeId);
    this.setState({upvoted: true});
  }

  unupvoteRecipe(e) {
    e.preventDefault();
    this.props.deleteUpvote(this.props.currentUser.id, this.props.recipeId);
    this.setState({upvoted: false});
  }

  upvoteOrUnupvoteRecipe() {
    if(this.props.upvoted){
      return (
        <img src={ window.images.upvoted } onClick={this.unupvoteRecipe}/>
      );
    } else {
      return (
        <img src={ window.images.unupvoted } onClick={this.upvoteRecipe}/>
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
