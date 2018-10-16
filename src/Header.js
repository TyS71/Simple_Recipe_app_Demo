import React from 'react';
import './Header.css'; 

function Header(props){
	return(
		<header className='headerBar'>
			<h2>RecipeApp</h2> 
			<nav>
				<a>Add Recipe</a>
				<a>About</a>
				<a>Contact</a>
			</nav>
		</header>
	)
}

export default Header;