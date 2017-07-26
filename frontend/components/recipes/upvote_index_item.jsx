import React from 'react';
import Modal from 'react-modal';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import style from './modal_style';

class UpvoteIndexItem extends React.Component {
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

          <a className="tile-link" onClick={this.openShowModal}>
              <img className="tile-img" src={recipe.main_image_url} />

            <div className="tile-info">
              <div>
                <div className="tile-title-tagline">{recipe.title}</div>
                <div className="sub">Prepared by: {recipe.chef_name}</div>
                <div className="sub">Recipe Source: {recipe.recipe_source}</div>
              </div>

            <div className="tile-bottom">
            </div>

            </div>
          </a>


          <Modal
           contentLabel="Modal"
           isOpen={this.state.modalShowOpen}
           onRequestClose={this.closeShowModal}
           style={style}>

           <section className="recipe-show-container">
             <button onClick={this.closeShowModal}>
               <i className="fa fa-times" aria-hidden="true"></i>
             </button>

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
         </Modal>
        </div>
    );
  }
};


export default UpvoteIndexItem;
