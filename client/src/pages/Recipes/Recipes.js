import React, { Component } from 'react'
import { withRouter, NavLink } from 'react-router-dom';

import { IconButton, TextButton, Tag } from '../shared';


import './Recipes.scss';
import ragu from '../../resources/images/ragu.jpg';
import alfredo from '../../resources/images/alfredo.jpg';
import lasanha from '../../resources/images/lasanha.jpg';
import pqueijo from '../../resources/images/pao-de-queijo.jpg';

class Recipes extends Component {

  render() {
    const recipes = [
      {
        name: 'Ragu de shimeji',
        image: ragu,
        fav: false,
        time: '20 minutos',
        tags: ['veggie', 'fast'],
        description: 'Essa receita simples pode ser preparada com menos de R$ 10,00 e em poquissímo tempo',
        //ingredients: ['Shimeji', 'Vinho tinto', 'Polentina', 'Água', 'Sal'],
      },
      {
        name: 'Massa ao molho Alfredo nome comprido para linebreak',
        image: alfredo,
        fav: true,
        time: '25 minutos',
        tags: ['fast', 'cheap', 'easy'],
        description: 'Essa receita simples pode ser preparada com menos de R$ 10,00 e em poquissímo tempoenos de R$ 10,00 e em poquissímo tempoenos de R$ 10,00 e em poquissímo tempoenos de R$ 10,00 e em poquissímo tempoenos de R$ 10,00 e em poquissímo tempo',
        //ingredients: ['Macarrão penne', 'Creme de ricota', 'Molho branco', 'Sal', 'Pimenta do reino'],
      },
      {
        name: 'Lasanha de brócolis',
        image: lasanha,
        fav: true,
        time: '1 hora',
        tags: ['gourmet'],
        description: '',
        //ingredients: ['Massa de lasanha', 'Brócolis', 'Tomate', 'Creme de leite', 'Molho branco'],
      },
      {
        name: 'Pão de queijo',
        image: pqueijo,
        fav: false,
        time: '40 minutos',
        tags: [],
        description: 'Aquela receita básica e sem erro do famoso pão de queijo.',
        //ingredients: ['Massa de lasanha', 'Brócolis', 'Tomate', 'Creme de leite', 'Molho branco'],
      }
    ]

    return (
      <div className='recipes'>
      {
        recipes.map((recipe, index) => {
          return (
            <Recipe key={index} recipe={recipe} />
          )
        })
      }
      </div>
    )
  }
}

const Recipe = ({ recipe }) => {

  return (
    <div>
      <div className='image' style={{backgroundImage: `url(${recipe.image}`}} />
      
      <div className='content'>
        <p className='name'>{recipe.name}</p>
        
        <p className='description'>{recipe.description ? recipe.description : 'Sem descrição'}</p>
        
        <div className='tags'>
          {
            recipe.tags.length ? 
              recipe.tags.map((tag, index) => {
                return (
                  <Tag key={index} tag={tag} />
                )
              }) : <Tag />
          }
        </div>
      
        <div className='actions'>
          <div className='buttons'>
            <NavLink to='/recipe'>
              <TextButton text='Ver mais' />
            </NavLink>
          </div>

          <div className={`fav`}>
            <IconButton className={`${recipe.fav ? 'active' : ''}`} icon='heart' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Recipes);