import React, { Component } from 'react';

import { Line } from 'rc-progress';
import { withRouter } from 'react-router-dom';
import { Icon } from '../shared';

import lasanha from '../../resources/images/lasanha.jpg';
import './Recipe.scss';

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
      nutrients: [
        { name: 'calories', amount: 602, unit: 'kcal'},
        { name: 'cholesterol', amount: 166, unit: 'milligrams', },
        { name: 'carbohydrate', amount: 35, unit: 'grams', },
        { name: 'protein', amount: 44, unit: 'grams', },
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

    const RECOMENDED_NUTRIENTS_AMOUNT = {
      calories: 2000,
      fat: 65,
      satured: 20,
      cholesterol: 300,
      carbohydrate: 300,
      calcium: 1100,
      protein: 50,
      iron: 14,
      sodium: 2400,
      potassium: 4700,
      trans: 0,
    }

    const NUTRIENT_MAP = {
      calories: 'Calorias',
      fat: 'Gorduras',
      satured: 'Saturada',
      trans: 'Trans',
      cholesterol: 'Colesterol',
      carbohydrate: 'Carboidratos',
      protein: 'Proteínas',
      vitamin: 'Vitaminas',
      a: 'A',
      c: 'C',
      minerals: 'Minerais',
      calcium: 'Cálcio',
      iron: 'Ferro',
      sodium: 'Sódio',
      potassium: 'Potássio',
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
            <ul className='nutrients'>
              {
                recipe.nutrients.map((nutrient, i) => {
                  return (
                    <NutrientItem key={i} nutrient={nutrient} />
                  )
                })
              }
            </ul>

          </div>
        </div>

        </div>
    )
  }
}

const NutrientItem = ({ nutrient }) => {
  const RECOMENDED_NUTRIENTS_AMOUNT = {
    calories: 2000,
    fat: 65,
    satured: 20,
    cholesterol: 300,
    carbohydrate: 300,
    calcium: 1100,
    protein: 50,
    iron: 14,
    sodium: 2400,
    potassium: 4700,
  }

  const NUTRIENT_MAP = {
    calories: 'Calorias',
    fat: 'Gorduras',
    satured: 'Saturada',
    trans: 'Trans',
    cholesterol: 'Colesterol',
    carbohydrate: 'Carboidratos',
    protein: 'Proteínas',
    vitamin: 'Vitaminas',
    a: 'A',
    c: 'C',
    minerals: 'Minerais',
    calcium: 'Cálcio',
    iron: 'Ferro',
    sodium: 'Sódio',
    potassium: 'Potássio',
  }

  return (
    <li>
      <span className='name'>{NUTRIENT_MAP[nutrient.name]}</span>
      
      <span className='amount'>{formatNutrientAmount(nutrient.amount, nutrient.unit)}</span>
      {
        nutrient.amount ?
          nutrient.unit === 'percentage' ?
            <Line percent={nutrient.amount} /> :
            <Line percent={percentage(nutrient.amount, RECOMENDED_NUTRIENTS_AMOUNT[nutrient.name])} /> :
            null
      }

      {
        nutrient.items !== undefined ?
          <ul className='inner'>
            {
              nutrient.items.map((nutrientItem, j) => {
                return (
                  <li key={j}>
                    <span className='name'>{NUTRIENT_MAP[nutrientItem.name]}</span>
                    {
                      nutrientItem.amount ?
                        nutrientItem.unit === 'percentage' ?
                          <Line percent={nutrientItem.amount} /> :
                          <Line percent={percentage(nutrientItem.amount, RECOMENDED_NUTRIENTS_AMOUNT[nutrientItem.name])} /> :
                          null
                    }
                  </li>
                )
              })
            }
          </ul> : null
      }
    </li>
  )
}


function percentage(amount, total) {
  return (100 * amount) / total;
}

function formatNutrientAmount(amount, unit) {
  switch (unit) {
    case 'kcal':
      return `${amount} ${unit}`;
    case 'grams':
      return `${amount}gr`;
    case 'milligrams':
      return `${amount}mg`;
    case 'percentage':
      return `${amount}%`;
    default:
      return amount;
  }
}

export default withRouter(Recipe);