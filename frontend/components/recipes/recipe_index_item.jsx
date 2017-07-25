import React from 'react';
import Modal from 'react-modal';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import style from './modal_style';

class RecipeTile extends React.Component {
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
//   convertMiliseconds(miliseconds, format) {
//   var days, hours, minutes, seconds, total_hours, total_minutes, total_seconds;
//
//   total_seconds = parseInt(Math.floor(miliseconds / 1000));
//   total_minutes = parseInt(Math.floor(total_seconds / 60));
//   total_hours = parseInt(Math.floor(total_minutes / 60));
//   days = parseInt(Math.floor(total_hours / 24));
//
//   seconds = parseInt(total_seconds % 60);
//   minutes = parseInt(total_minutes % 60);
//   hours = parseInt(total_hours % 24);
//
//   switch(format) {
// 	case 's':
// 		return total_seconds;
// 		break;
// 	case 'm':
// 		return total_minutes;
// 		break;
// 	case 'h':
// 		return total_hours;
// 		break;
// 	case 'd':
// 		return days;
// 		break;
// 	default:
// 		return { d: days, h: hours, m: minutes, s: seconds };
//   }
// };

  // daysLeft() {
  //   const endDate = this.props.recipe.order_by_date;
  //
  //   let result;
  //   if (typeof endDate === 'number') {
  //     result = endDate - Date.now();
  //   } else {
  //     result = Date.parse(endDate) - Date.now();
  //   }
  //
  //   const convertedMills = this.convertMiliseconds(result);
  //   return convertedMills['d'];
  // }

  render() {
    const recipe = this.props.recipe;
    // const progress = (35)
    // const progressPercent = `${Math.round(progress)}%`
    return (

        <div className="recipe-tile">
          <a className="tile-link" onClick={this.openShowModal}>

              <img className="tile-img" src={recipe.main_image_url}></img>

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

// <span>${recipe.price}</span>
// &nbsp;
//
// <div className="progress-bar" style={{width: `${progressPercent}`, maxWidth: '100%'}} />
// <div className="progress-label">
//   <div className="tile-percent">{progressPercent}</div>
//   <div>{this.daysLeft()} days left</div>
// </div>

export default RecipeTile;
