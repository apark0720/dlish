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
              <div>
                <div className="tile-title-tagline">{recipe.title}</div>
                <div className="sub">Recipe Source: {recipe.recipe_source}</div>
                <UpvoteContainer recipeId={this.props.recipe.id} upvoted={this.props.recipe.upvoted}/>
                <div>{recipe.upvote_count}</div>
              </div>

            <div className="tile-bottom">

            </div>

            </div>
          </a>


          <ModalVideo
           channel='youtube'
           videoId={recipe.video_id}
           isOpen={this.state.modalShowOpen}
           onClose={this.closeShowModal}
           autoplay="1">

           <section className="recipe-show-container">

             <section className="recipe-show">
               <figure className="recipe-box">
                 <img src={recipe.main_image_url} />
               </figure>

               <aside className="recipe-info">
                 <header className="recipe-user-info">
                   <img src={recipe.chef_image_url}/>
                   <div className="username">
                     <h1>{recipe.chef_name}</h1>
                   </div>
                 </header>

                 <figcaption className="recipe-details">
                   <h2>{recipe.title}</h2>
                   <br/>
                   <p>{recipe.description}</p>
                 </figcaption>
               </aside>
             </section>

           </section>
         </ModalVideo>
        </div>
    );
  }
}


export default SuggestionIndexItem;
