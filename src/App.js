import React, { Component } from 'react';
import './App.css';
import Header from './Header'; 
import RecipeList from './RecipeList';
import AddRecipe from './AddRecipe'; 

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      recipes:[
      {
        id: 0,
        title: 'Pizza',
        img: 'https://www.cicis.com/media/1243/pizza_adven_zestypepperoni.png', 
        ingredients: ['sauce', 'cheese', 'crust'],
        instructions: 'mix them all together'
      },
      {
        id: 1,
        title: 'Pasta',
        img: 'https://static01.nyt.com/images/2016/05/03/dining/03COOKING-PASTAWITHBUTTER2/03COOKING-PASTAWITHBUTTER2-videoSixteenByNineJumbo1600.jpg', 
        ingredients: ['sauce', 'cheese', 'noodles'],
        instructions: 'mix them all together'
      }
      ],
      nextId: 2

    }
    this.handleSave = this.handleSave.bind(this);
  }


  handleSave(recipe) {
    this.setState((prevState, props) => {
      const newRecipe = {...recipe, id: this.state.nextRecipeId};
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe],
        showForm: false
      }
    });
  }

  render() {
    return (
      <div>
        <Header /> 
        <AddRecipe 
          onSave={this.handleSave}
        />
        <RecipeList 
          recipes={this.state.recipes}
          id={this.state.nextId}
        />
      </div>
    );
  }
}

export default App;
