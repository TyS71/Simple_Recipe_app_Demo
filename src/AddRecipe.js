import React, { Component } from 'react'; 
import './AddRecipe.css';

class AddRecipe extends Component{
	static defaultProps = {
		onSave(){}

}

	constructor(props){
	super(props);

	this.state = {
		newRecipe:
		{
			title: '',
			img: '',
			ingredients: [''],
			instructions: ''
		}

		
	}

	this.handleChangeIng = this.handleChangeIng.bind(this);
	this.handleNewIngredient = this.handleNewIngredient.bind(this);
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);

}

handleNewIngredient(e) {
  const {ingredients} = this.state;
  this.setState({ingredients: [...ingredients, '']});
}


handleChangeIng(e) {
  const index = Number(e.target.name.split('-')[1]);
  const ingredients = this.state.ingredients.map((ing, i) => (
    i === index ? e.target.value : ing
  ));
  this.setState({ingredients});
}

handleSubmit(e){
    e.preventDefault();
    this.props.onSave({...this.state})
    this.setState({
      title: '',
      instructions: '',
      ingredients: [''],

    })
  }
  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }


render(){
		const {title, instructions, img, ingredients} = this.state.newRecipe;
		let inputs = ingredients.map((ing, i) => (
      <div
        className="recipe-form-line"
        key={`ingredient-${i}`}
      >
        <label>{i+1}.
          <input
            type="text"
            name={`ingredient-${i}`}
            value={ing}
            size={45}
            autoComplete="off"
            placeholder="Ingredient"
            onChange={this.handleChangeIng} />
        </label>
      </div>
    ));
		return(
		<div id='new-recipe'>
			<h1>Add New Recipe</h1>
			<form 
				onSubmit={this.handleSubmit}
			>
				<label>
					Title:
					<input type="text" name="title" onChange={this.handleChange} />
				</label>
				{inputs}
				<button type='button'>+</button>
				<label>
					Instructions:
				</label>
					<input 
					size={45}
					type="text" 
					name="instructions"
					onChange={this.handleChange} />
				<label>
					Image url:
					<input 
					type="text" 
					name="img" 
					onChange={this.handleChange} />
				</label>
				<input type="Submit" />
			</form>
		</div>
		)	
	}
}

export default AddRecipe;