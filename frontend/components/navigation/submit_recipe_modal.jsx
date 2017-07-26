import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import SubmitRecipeFormContainer from '../submit_recipe_form/submit_recipe_form_container';

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
    top             : '75px',
    left            : '75px',
    right           : '75px',
    bottom          : '75px',
    margin          : 'auto',
    border          : '1px solid #ccc',
    padding         : '15px 30px',
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
   }

   openModal() {
     this.setState({
       modalIsOpen: true
     });
   }

   closeModal() {
     this.props.clearErrors();
     this.setState({ modalIsOpen: false });
   }

   render() {
     return (
       <div>
         <a onClick={this.openModal}>Submit Recipe</a>

         <Modal
           isOpen={this.state.modalIsOpen}
           onRequestClose={this.closeModal}
           style={style}
           contentLabel='modal'>
           <SubmitRecipeFormContainer modalFunction={this.openModal.bind(this)}/>
         </Modal>
       </div>
     );
   }
 }

export default SubmitRecipeModal;
