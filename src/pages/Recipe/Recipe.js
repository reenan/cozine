import React, { Component } from 'react';

import { Line } from 'rc-progress';
import { withRouter, Link } from 'react-router-dom';
import { Icon, Tag } from '../shared';

import lasanha from '../../resources/images/lasanha.jpg';
import brocolisPicado from '../../resources/mock/lasanha-brocolis/brocolis-picado.png';
import refogando from '../../resources/mock/lasanha-brocolis/refogando.png';

import './Recipe.scss';

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

const RECIPE = {
  name: 'Lasanha de brócolis',
  image: lasanha,
  fav: true,
  time: '1 hora',
  tags: ['gourmet'],
  description: 'Você que ama massas, não pode perder essa receita de lasanha de brócolis e molho branco! Fica deliciosa e é superfácil de fazer.',
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
  preparationSteps: [
    { duration: '15 minutos',
      description: 'Cozinhe o brócolis e escorra.' },
    { description: 'Pique bem ele.',
      duration: '10 minutos',
      images: [brocolisPicado] },
    { description: 'Em uma panela aqueça o azeite, frite o alho, acrescente o brócolis picadinho, adicione sal a gosto.',
      duration: '10 minutos',
      images: [refogando, brocolisPicado],
      videos: [refogando, brocolisPicado] },
    { type: 'text', description: 'Reserve.' },
    { type: 'text', description: 'À parte faça o molho branco.' },
    { type: 'text', description: 'Bata no liquidificador o leite, a farinha de trigo e o sal.' },
    { type: 'text', description: 'Em uma panela aqueça a margarina, frite o bacon, a cebola até que doure.' },
    { type: 'text', description: 'Acrescente na panela os ingredientes batidos no liquidificador.' },
    { type: 'text', description: 'Coloque noz-moscada a gosto e mexa até que o molho fique espesso, acrescente a creme de leite e desligue o fogo.' },
    { type: 'text', description: 'Em uma forma refratária faça camadas de molho branco, massa para lasanha, brócolis, presunto e queijo.' },
    { type: 'text', description: 'Alterne até que termine com os ingredientes.' },
    { type: 'text', description: 'Por cima da lasanha polvilhe com queijo parmesão.' },
    { type: 'text', description: 'Cubra a forma com papel alumínio e leve ao forno até que a massa esteja macia (30 minutos), retire o papel e deixe gratinar.' },
  ]
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

class Recipe extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeStep: 1
    }
  }

  render() {
    const { activeStep } = this.state;

    let serving = RECIPE.serving.amount === 1 ?
      SERVING_TYPE_MAP[RECIPE.serving.type].singular :
      SERVING_TYPE_MAP[RECIPE.serving.type].plural;

    return (
      <div className='recipe'>
        <div className='image'
          style={{backgroundImage: `url(${RECIPE.image})`}}>
          <p className='title'>
            {RECIPE.name}
          </p>
        </div>

        <div className='content'>

          <div className='tags'>
            {
              RECIPE.tags.length ? 
                RECIPE.tags.map((tag, index) => {
                  return (
                    <Tag key={index} tag={tag} />
                  )
                }) : <Tag />
            }
          </div>

          <ul className='info'>
            <li className='serving'>
              <Icon icon={SERVING_ICON_MAP[RECIPE.serving.type]} />
              <span>{RECIPE.serving.amount} {serving}</span>
            </li>
            <li className='time'>
              <Icon icon='clock' />
              <span>{RECIPE.time}</span>
            </li>
          </ul>

          <p className='description'>{RECIPE.description ? RECIPE.description : 'Sem descrição'}</p>

          <Link to='/preparation' className='preparation'>
              <Icon icon='mitten' />
              <p>Ver modo de preparo</p>
          </Link>

          <div className='ingredients'>
            <p className='subtitle'>Ingredientes</p>
            <ul>
              {
                RECIPE.ingredients.map((ingredient, index) => {
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
                RECIPE.nutrients.map((nutrient, i) => {
                  return (
                    <NutrientItem key={i} nutrient={nutrient} />
                  )
                })
              }
            </ul>

          </div>
        </div>

        <div className='preparation'>
      
          <div className='content'>
            <p className='how'>
              Como preparar?
            </p>
          </div>

          <div className='steps'>
            <ul>
              {
                RECIPE.preparationSteps.map((step, index) => {
                  
                  return (
                    activeStep === index ?
                      <ActiveStep
                        key={index}
                        number={index + 1}
                        step={step} /> :
                    
                      <Step
                        key={index}
                        number={index + 1}
                        step={step} />
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

function getNutrientLine(nutrient) {
  let percentageAmount = 0;

  if (nutrient.unit === 'percentage') {
    percentageAmount = nutrient.amount;
  } else {
    percentageAmount = percentage(nutrient.amount, RECOMENDED_NUTRIENTS_AMOUNT[nutrient.name]);
  }

  if (percentageAmount <= 100) {
    return (
      <Line
        strokeWidth={2}
        percent={percentageAmount} />
    )
  } else {
    let maxValue = Math.max(nutrient.amount, RECOMENDED_NUTRIENTS_AMOUNT[nutrient.name]);
    let minValue = Math.min(nutrient.amount, RECOMENDED_NUTRIENTS_AMOUNT[nutrient.name]);
    
    percentageAmount = percentage(minValue, maxValue);
    let percentageDiff = 100 - percentageAmount;

    return (
      <Line
        strokeWidth={2}
        percent={[percentageAmount, percentageDiff]} />
    )
  }
}

const NutrientItem = ({ nutrient }) => {
  
  return (
    <li className={`${nutrient.items ? 'with-inner' : ''}`}>
      <span className='name'>{NUTRIENT_MAP[nutrient.name]}</span>
      <span className='amount'>{formatNutrientAmount(nutrient.amount, nutrient.unit)}</span>

      {
        nutrient.items ?
          <NutientItemInner nutrient={nutrient} /> :
          nutrient.amount ?
            getNutrientLine(nutrient) : null
      }

    </li>
  )
}


// No idea how to style this
const ActiveStep = ({ number, step }) => {
  return (
    <li className='step active'>
      <div className='content'>  
        <span className='number'>Passo {number}.</span>
        <span className='text'>{step.description}</span>

        {
          step.duration ?
            <div className='duration'>
              <Icon icon='clock' />
              <span>{step.duration}</span>
            </div> : null
        } 

            {
              step.images ?
                <div className='images'>
                  {
                    step.images.map((image, index) => {
                      return   (
                        <div key={index} className='image'
                          style={{backgroundImage: `url(${image})`}} />
                      )
                    })
                  }
                </div> : null
            }
        </div>
    </li>
  )
}

const Step = ({ number, step }) => {
  return (
    <li className='step'>
      <span className='number'>{number}.</span>
      <span className='text'>{step.description}</span>

      <div className='inactive-extra'>
        {
          step.duration ?
            <div className='tag'>
              <Icon icon='clock' />
              <span>{step.duration}</span>
            </div> : null
        }

        {
          step.images ?
            <div className='tag'>
              <Icon icon='image' />
              <span>+ {step.images.length}</span>
            </div> : null
        }

        {
          step.videos ?
            <div className='tag'>
              <Icon icon='play' />
              <span>+ {step.videos.length}</span>
            </div> : null
        }
      </div>
    </li>
  )
}

/* Make those tags expandable: show only title and expand to show details when clicked */
const NutientItemInner = ({ nutrient }) => {

  return (
    <ul className='inner'>
      {
        nutrient.items.map((nutrientItem, j) => {
          const amountPercentage = nutrientItem.unit === 'percentage' ? nutrientItem.amount : percentage(nutrientItem.amount, RECOMENDED_NUTRIENTS_AMOUNT[nutrientItem.name]);
          return (
            <li className={`${nutrientItem.name}`} key={j}>
              <span className='progress-bar' style={{width: `${amountPercentage}%`}} />
              <span className='name'>{NUTRIENT_MAP[nutrientItem.name]}</span>
              <span className='amount'>{formatNutrientAmount(nutrientItem.amount, nutrientItem.unit)}</span>
            </li>
          )
        })
      }
    </ul>
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