import React from 'react';
import { withRouter } from 'react-router';

const starbucks = [
  "1124 Pike St, Seattle, WA 98101",
  "1410 E John St, Seattle, WA 98112",
  "550 17th Ave, Seattle, WA 98122",
  "800 12th Ave, Seattle, WA 98122",
  "747 Broadway, Seattle, WA 98122",
  "700 5th Ave, Seattle, WA 98104",
  "600 E Olive Way, Seattle, WA 98102",
  "601 Union St, Seattle, WA 98101",
  "1524 7th Ave, Seattle, WA 98101",
  "2200 Westlake Ave, Seattle, WA 98121",
  "442 Terry Ave N, Seattle, WA 98109",
  "1501 4th Ave, Seattle, WA 98101",
  "102 Pike St, Seattle, WA 98101",
  "1912 Pike Pl, Seattle, WA 98101",
  "2326 1st Ave, Seattle, WA 98121",
  "521 Wall St, Seattle, WA 98121"
];

class OrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '', user_id: this.props.currentUser.id, recipe_id: this.props.recipeId };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
     this.props.clearErrors();
   }

  update(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const order = this.state;
    this.props.createOrder(order)
      .then(this.props.closeModal)
      .then(recipe => this.props.history.push('/menu'));
  }

  errors() {
    if (this.props.errors) {
      return (
        this.props.errors.map(error => {
          return (<li className="error" key={error}>{error}</li>);
        })
      );
    }
  }

  render() {
    return (
      <form className="recipe-create-form" onSubmit={this.handleSubmit} >
        <div className="create-header">
          <h1>Order Now</h1>
        </div>
        <section className="create-form-contents">
          <ul className="errors" >
            {this.errors()}
          </ul>

          <div><span>You are ordering:</span>

          </div>

          <div><span>Choose a Nearby Starbucks:</span>
            <select onChange={this.update('address')} >
              <option value="x" selected disabled>Select a category</option>
              {
                starbucks.map((address, idx) => (
                  <option key={idx} value={address}>{address}</option>
                ))
              }
            </select>
          </div>

          <div><span>Submit <br/> Form</span>
            <input type="submit" value="Submit" />
          </div>
        </section>
      </form>
    );
  }
}

export default withRouter(OrderForm);
