import React, { Component } from 'react';
import lasanha from '../../resources/images/lasanha.jpg';

import './Preparation.scss';
export default class Preparation extends Component {
  render() {
    const recipe = {
      name: 'Lasanha de brócolis',
      image: lasanha,
      fav: true,
      time: '1 hora',
      tags: ['gourmet'],
      description: 'Você que ama massas, não pode perder essa receita de lasanha de brócolis e molho branco! Fica deliciosa e é superfácil de fazer!',
      serving: {
        type: 'people',
        amount: 3
      },
      ingredients: [
        { name: 'Massa de lasanha', amount: '600gr', },
        { name: 'Brócolis', amount: '1', },
        { name: 'Tomate', amount: '3', },
        { name: 'Creme de leite', amount: '1', },
        { name: 'Molho branco', amount: '300ml', },
      ],
      nutrients: [
        { name: 'calories', amount: 602, unit: 'kcal'},
        { name: 'cholesterol', amount: 166, unit: 'milligrams', },
        { name: 'carbohydrate', amount: 35, unit: 'grams', },
        { name: 'protein', amount: 90, unit: 'grams', },
        { name: 'fat', amount: 32, unit: 'grams', items: [
          { name: 'satured', amount: 15, unit: 'grams', },
          { name: 'trans', amount: 0.3, unit: 'grams', },
        ]},
        { name: 'vitamin', items: [
          { name: 'a', amount: 34, unit: 'percentage', },
          { name: 'c', amount: 25, unit: 'percentage', },
        ]},
        { name: 'minerals', items: [
          { name: 'calcium', amount: 550, unit: 'milligrams', },
          { name: 'iron', amount: 4, unit: 'milligrams', },
          { name: 'sodium', amount: 1576, unit: 'milligrams', },
          { name: 'potassium', amount: 1041, unit: 'milligrams', },
        ]},
      ],
    }

    return (
      <div className='preparation'>
        <div className='image'
          style={{backgroundImage: `url(${recipe.image})`}}>
          <p className='title'>
            {recipe.name}
          </p>
        </div>

        <div className='content'>
          <p className='how'>
            Como preparar?
          </p>

        </div>
      </div>
    )
  }
}