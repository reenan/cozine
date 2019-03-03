import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import { Icon } from '../shared';

import './Recipes.scss';
import ragu from '../../resources/images/ragu.jpg';
import alfredo from '../../resources/images/alfredo.jpg';
import lasanha from '../../resources/images/lasanha.jpg';

class Recipes extends Component {

	render() {
		const recipes = [
			{
				name: 'Ragu de shimeji',
				image: ragu,
				time: '20 minutos',
				ingredients: ['Shimeji', 'Vinho tinto', 'Polentina', 'Água', 'Sal'],
			},
			{
				name: 'Massa ao molho Alfredo nome comprido para linebreak',
				image: alfredo,
				time: '25 minutos',
				ingredients: ['Macarrão penne', 'Creme de ricota', 'Molho branco', 'Sal', 'Pimenta do reino'],
			},
			{
				name: 'Lasanha de brócolis',
				image: lasanha,
				time: '1 hora',
				ingredients: ['Massa de lasanha', 'Brócolis', 'Tomate', 'Creme de leite', 'Molho branco'],
			}
		]

		return (
			<div className='recipes'>
				<ul>
				{
					recipes.map((recipe, index) => {
						return (
							<Recipe key={index} recipe={recipe} />
						)
					})
				}
				</ul>
			</div>
		)
	}
}

const Recipe = ({ recipe }) => {

	return (
		<li>
			<div className='image' style={{backgroundImage: `url(${recipe.image}`}} />
			<div className='data'>
				<p className='name'>{recipe.name}</p>
				<p className='ingredients'>{recipe.ingredients.join(', ')}</p>
				
				<Icon icon='clock' />
				<span>{recipe.time}</span>
			</div>
		</li>
	)
}

export default withRouter(Recipes);