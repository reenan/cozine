import React, { Component } from 'react';
import lasanha from '../../resources/images/lasanha.jpg';
import brocolisPicado from '../../resources/mock/lasanha-brocolis/brocolis-picado.png';
import refogando from '../../resources/mock/lasanha-brocolis/refogando.png';

import { Icon } from '../shared';

import './Preparation.scss';
export default class Preparation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStep: 1
    }
  }

  previousStep = () => {
    const { activeStep } = this.state;
    this.setActiveStep(activeStep - 1);
  }
  
  nextStep = () => {
    const { activeStep } = this.state;
    this.setActiveStep(activeStep + 1);
  }

  setActiveStep = (step) => {
    this.setState({activeStep: step});
  }

  render() {
    const { activeStep } = this.state;
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

        <div className='steps'>
          <ul>
            {
              recipe.preparationSteps.map((step, index) => {
                
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
    )
  }
}

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