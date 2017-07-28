import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import SubmitRecipeFormContainer from './submit_recipe_form_container';

const style = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(0, 0, 0, 0.60)',
    zIndex          : 10
  },
  content : {
    position        : 'fixed',
    top             : '10%',
    left            : '50%',
    transform       : 'translate(-50%)',
    // right           : '550px',
    // bottom          : '25px',
    margin          : 'auto',
    padding         : '15px 30px',
    backgroundColor : '#FFFF',
    zIndex          : 11
  }
};

class SubmitRecipeModal extends React.Component {
  constructor() {
     super();
     this.state = {
       modalIsOpen: false,
     };

     this.openModal = this.openModal.bind(this);
     this.closeModal = this.closeModal.bind(this);
     this.handleClick = this.handleClick.bind(this);
   }

   openModal() {
     this.setState({
       modalIsOpen: true
     });
   }

   closeModal() {
     this.setState({ modalIsOpen: false });
   }

   handleClick(e) {
     e.preventDefault();

     if (this.props.currentUser) {
       this.openModal();
     } else {
       this.props.openLoginModal(e);
     }
   }

   render() {
     return (
       <div>
         <a onClick={this.handleClick}>Submit Recipe</a>

         <Modal className="submit-recipe-modal"
           isOpen={this.state.modalIsOpen}
           onRequestClose={this.closeModal}
           style={style}
           contentLabel='modal'>
           <SubmitRecipeFormContainer closeModal={this.closeModal.bind(this)}/>
         </Modal>
       </div>
     );
   }
 }

export default SubmitRecipeModal;
