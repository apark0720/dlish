import React, { Component } from 'react';
import SlidingPane from 'react-sliding-pane';

import OrderFormContainer from './order_form_container';



class OrderFormPane extends React.Component {
  constructor() {
    super();
      this.state = {
           paneIsOpen: false,
      };
    this.openPane = this.openPane.bind(this);
    this.closePane = this.closePane.bind(this);
   }




   openPane() {
     this.setState({
       paneIsOpen: true
     });
   }

   closePane() {
     this.setState({ paneIsOpen: false });
   }

   render() {
     return (
       <div>
         <button onClick={this.openPane}>Order Now</button>

         <SlidingPane className="order-pane"
           isOpen={this.state.paneIsOpen}
           title='Mmmmm.....Tasty'
           subtitle='Pick up your order at a Starbucks of your choice between 12:15-12:45pm'
           onRequestClose={this.closePane}>
           <OrderFormContainer closePane={this.closePane.bind(this)}/>
         </SlidingPane>
       </div>
     );
   }
 }

export default OrderFormPane;
