import React from 'react';
import Modal from 'react-modal';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import style from './modal_style';
import OrderFormPane from '../orders/order_form_pane';

class MenuIndexItem extends React.Component {
  // componentWillUnmount() {
  //   Modal.setAppElement('section.recipe-show-modal');
  // }

  constructor(props) {
    super(props);
    this.state = {
      modalShowOpen: false
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
      <div className="recipe-tile" id="recipe-tile">
        <a className="tile-link" >
          <img className="tile-img" src={recipe.main_image_url} onClick={this.openShowModal} />

          <div className="tile-info">
            <div className="tile-title-tagline">
              <div className='tile-title'>
                <h3>{recipe.title}</h3>
                <p className='sub'>Prepared by: {recipe.chef_name}</p>
              </div>
              <div className='tile-price'>
                ${recipe.price}
              </div>
            </div>
          </div>
        </a>

        <Modal
          contentLabel="Modal"
          isOpen={this.state.modalShowOpen}
          onRequestClose={this.closeShowModal}
          shouldCloseOnOverlayClick={true}
          style={style}
        >

          <section className="recipe-show-container" id="recipe-show-modal">

            <section className="recipe-show">
              <figure className="recipe-box">
                <iframe src={`https://www.youtube.com/embed/${recipe.video_id}?autoplay=1`} frameBorder="0" allowFullScreen></iframe>
              </figure>

              <aside className="recipe-info">
                <header className="recipe-user-info">
                  <img src={recipe.chef_image_url} />
                  <div className="username">
                    <h1>{recipe.chef_name}</h1>
                  </div>
                </header>

                <figcaption className="recipe-details">
                  <h2>{recipe.title}</h2>
                  <OrderFormPane recipeId={recipe.id} closeShowModal={this.closeShowModal} />
                </figcaption>
              </aside>
            </section>

          </section>
        </Modal>
      </div>
    );
  }
};

export default MenuIndexItem;
