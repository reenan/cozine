import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import './Recipe.scss';
import lasanha from '../../resources/images/lasanha.jpg';

class Recipe extends Component {

  render() {
    const recipe = {
      name: 'Lasanha de brócolis',
      image: lasanha,
      fav: true,
      time: '1 hora',
      tags: ['gourmet'],
      description: '',
      //ingredients: ['Massa de lasanha', 'Brócolis', 'Tomate', 'Creme de leite', 'Molho branco'],
    }
    
    return (
      <div className='recipe'>
        <p>{recipe.name}</p>

        <div className='image' style={{backgroundImage: `url(${recipe.image}`}} />

        </div>
    )
  }
}

export default withRouter(Recipe);