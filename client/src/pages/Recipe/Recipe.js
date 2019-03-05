import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import { Icon } from '../shared';

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
    }

    const SERVING_ICON_MAP = {
      people: 'user-alt',
      portion: 'mortar-pestle',
    }

    const SERVING_TYPE_MAP = {
      people: {
        singular: 'pessoa',
        plural: 'pessoas',
      },
      portion: {
        singular: 'porção',
        plural: 'porções',
      }
    }
      
    let serving = recipe.serving.amount === 1 ?
      SERVING_TYPE_MAP[recipe.serving.type].singular :
      SERVING_TYPE_MAP[recipe.serving.type].plural;

    return (
      <div className='recipe'>
        <div className='image' style={{backgroundImage: `url(${recipe.image}`}} />

        <div className='content'>
          <p className='title'>{recipe.name}</p>

          <ul className='info'>
            <li className='serving'>
              <Icon icon={SERVING_ICON_MAP[recipe.serving.type]} />
              <span>{recipe.serving.amount} {serving}</span>
            </li>
            <li className='time'>
              <Icon icon='clock' />
              <span>{recipe.time}</span>
            </li>
          </ul>

          <p className='description'>{recipe.description ? recipe.description : 'Sem descrição'}</p>

          <div className='ingredients'>
            <p className='subtitle'>Ingredientes</p>
            <ul>
              {
                recipe.ingredients.map((ingredient, index) => {
                  return (
                    <li key={index}>
                      <span>{ingredient.amount}</span>
                      <span>{ingredient.name}</span>
                    </li>
                  )
                })
              }
            </ul>
          </div>

          <div className='nutritional-values'>
            <p className='subtitle'>Valores nutricionais</p>

            <ul>
              <li>
                <p>Carbohydrates</p>
                <span>120g</span>
              </li>
              <li>
                <p>Protein</p>
                <span>120g</span>
              </li>
              <li>
                <p>Fat</p>
                <span>120g</span>
              </li>
              <li>
                <p>Vitamins and Minerals</p>
                <span>120g</span>
              </li>
            </ul>
          </div>
        </div>

        </div>
    )
  }
}

export default withRouter(Recipe);