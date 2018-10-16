import React from 'react';
import Recipe from './Recipe';
import './RecipeList.css';

function RecipeList(props){
	let recipes = props.recipes.map((item, index) => (
		 <Recipe 
			id={item.id}
			instructions={item.instructions}
			title={item.title}
			ingredients={item.ingredients}
			img={item.img}
		/>
	));
		return(
			<div id='recipes-container'>
				{recipes}
			</div>
		)

}

export default RecipeList; 