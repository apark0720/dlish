import React from 'react';
import ModalVideo from 'react-modal-video';
import style from './modal_style';
import UpvoteContainer from '../upvotes/upvote_container';

class SuggestionIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShowOpen: false,
      recipe: this.props.recipe
    };

    this.openShowModal = this.openShowModal.bind(this);
    this.closeShowModal = this.closeShowModal.bind(this);
  }

  openShowModal() {
    this.setState({ modalShowOpen: true });
  }

  closeShowModal() {
    this.setState({ modalShowOpen: false });
  }

  render() {
    const recipe = this.props.recipe;
    return (

      <div className="recipe-tile">
        <a className="tile-link" >
            <img className="tile-img" src={recipe.main_image_url} onClick={this.openShowModal}/>

          <div className="tile-info">
            <div className="tile-title-tagline">
              <div className='tile-title'>
                <h3>{recipe.title}</h3>
                <p className='sub'>Recipe Source: {recipe.recipe_source}</p>
              </div>
              <div className='tile-vote'>
                <UpvoteContainer recipeId={recipe.id} upvoted={recipe.upvoted}/>
                {recipe.upvote_count}
              </div>
            </div>
          </div>
        </a>

        <ModalVideo
         channel='youtube'
         videoId={recipe.video_id}
         isOpen={this.state.modalShowOpen}
         onClose={this.closeShowModal}
         autoplay="1">
        </ModalVideo>
      </div>
    );
  }
}


export default SuggestionIndexItem;
