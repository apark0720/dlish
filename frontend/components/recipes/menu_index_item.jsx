import React from 'react';
import Modal from 'react-modal';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import style from './modal_style';

class MenuIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShowOpen: false,
      modalEditOpen: false,
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
              <img className="tile-img" src={recipe.main_image_url}/>

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

          <MenuModal />
        </div>
    );
  }
};

export default MenuIndexItem;
