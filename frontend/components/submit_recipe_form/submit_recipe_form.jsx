  import React from 'react';
  import { withRouter } from 'react-router';

  const defaultState = {
    title: "",
    description: "",
    url: "",
    video_id: "",
    main_image_url: "",
    recipe_source: "",
    category: ""
  };

  const categories = [
    "Sweet",
    "Savory",
    "Spicy"
  ];

  class RecipeSubmitForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = defaultState;
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount() {
       this.props.clearErrors();
     }

    update(field) {
      return e => {
        let fieldValue = e.currentTarget.value;
        if (field === 'url') {
          const videoUrl = e.currentTarget.value;
          const startIdx = videoUrl.indexOf("=");
          const endIdx = videoUrl.lastIndexOf("&");
          let videoId = "";
          if (endIdx === -1) {
            videoId = videoUrl.slice(startIdx+1);
          } else {
            videoId = videoUrl.slice(startIdx+1, endIdx);
          }
          const mainImageUrlValue = `http://img.youtube.com/vi/${videoId}/0.jpg`;

          this.setState({
            [field]: fieldValue,
            ['video_id']: videoId,
            ['main_image_url']: mainImageUrlValue
          });
        } else {
            this.setState({
              [field]: fieldValue
            });
        }
      };
    }

    handleSubmit(e) {
      e.preventDefault();


      this.props.createRecipe(this.state)
        .then(this.props.closeModal)
        .then(recipe => this.props.history.push('/suggestions'));

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

    submitReady() {
      if (this.state.title.length > 0 && this.state.description.length > 0 &&
      this.state.url.length > 0 && this.state.recipe_source.length > 0 && this.state.category.length > 0)
      {
        return true;
      }
      return false;
    }

    render() {
      return (
        <form className="recipe-create-form" onSubmit={this.handleSubmit} >
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
                <option value="x" selected disabled>Select a category</option>
                {
                  categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))
                }
              </select>
            </div>

            <div><span>Youtube URL</span>
              <input type="text" placeholder="URL" onChange={this.update('url')} value={this.state.url} />
            </div>

            <div><span>Recipe Source</span>
              <input type="text" placeholder="Recipe Source" onChange={this.update('recipe_source')} value={this.state.recipe_source} />
            </div>



            <div><span>Submit <br/> Form</span>
              <input className={ !this.submitReady() ? 'disabled' : '' } type="submit" value="Submit" />
            </div>
          </section>
        </form>
      );
    }
  }

  export default withRouter(RecipeSubmitForm);
