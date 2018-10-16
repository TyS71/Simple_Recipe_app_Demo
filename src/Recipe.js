import React from 'react'; 
import './Recipe.css';

function Recipe(props){
	const ingredients = props.ingredients.map((ing, i) => {
		return <li key={i}>{ing}</li>
	})
	return(
		<div className='recipe-item'>
			<img className='img' alt="{props.title}" src={props.img} />
			<h1>{props.title}</h1>
			<label>
				Instructions:
				<p>{props.instructions}</p>
			</label>
			<label> 
				Ingredients: 
				<ul>
					{ingredients}
				</ul>
			</label>
		</div>
	)
}

export default Recipe;