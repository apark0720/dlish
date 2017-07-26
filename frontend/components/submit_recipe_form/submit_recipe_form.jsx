  import React from 'react';
  import { withRouter } from 'react-router';

  const defaultState = (currentUser) => ({
    creator_id: currentUser.id,
    title: "",
    description: "",
    url: "",
    recipe_source: "",
    category: ""
  });

  const categories = [
    "sweet",
    "savory",
    "spicy"
  ];

  class RecipeSubmitForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = defaultState(this.props.currentUser);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount() {
       this.props.clearErrors();
     }
     
    update(field) {
      return e => this.setState({
         [field]: e.currentTarget.value
      });
    }

    handleSubmit(e) {
      e.preventDefault();
      let newState = Object.assign({}, this.state);

      this.props.createRecipe(newState)
        .then(recipe => this.props.history.push(`/recipes/${recipe.id}`),
        err => scroll(0,0));
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
        <form className="project-create-form" onSubmit={this.handleSubmit} >
          <div className="create-header">
            <h1>Submit a Recipe</h1>
          </div>
          <section className="create-form-contents">
            <ul className="errors" >
              {this.errors()}
            </ul>

            <div><span>Recipe title</span>
              <input type="text" placeholder="Title" onChange={this.update('title')} value={this.state.title} />
            </div>

            <div><span>Short description</span>
              <textarea name="Description" className="form-description" placeholder="Description" onChange={this.update('description')} value={this.state.description}></textarea>
            </div>

            <div><span>Category</span>
              <select name="expertise" onChange={this.update('category')} value={this.state.category} >
                <option value="x" disabled="true">Select a category</option>
                {
                  categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))
                }
              </select>
            </div>

            <div><span>Video URL</span>
              <input type="text" placeholder="URL" onChange={this.update('url')} value={this.state.url} />
            </div>

            <div><span>Recipe Source</span>
              <input type="text" placeholder="Recipe Source" onChange={this.update('recipe_source')} value={this.state.recipe_source} />
            </div>



            <div><span>Submit Recipe</span>
              <input type="submit" value="Submit" />
            </div>
          </section>
        </form>
      );
    }
  }

  export default withRouter(RecipeSubmitForm);
