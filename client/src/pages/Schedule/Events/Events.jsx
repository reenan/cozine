import React, { Component } from 'react'
import './Events.scss';

import { Icon } from '../../shared';

export default class Events extends Component {
	render() {

		const events = [
			{
				date: '02',
				occurrences: [
					{type: 'breakfeast', recipes: ['Iogurte natural', 'Banana', 'Suco de laranja']},
					{type: 'lunch', recipes: ['Massa ao molho Alfredo']},
					{type: 'dinner', recipes: ['Lasanha de brócolis']}
				]
			}, {
				date: '07',
				occurrences: [{type: 'lunch', recipes: ['Nhoque de batata doce']}]
			}, {
				date: '11',
				occurrences: [{type: 'breakfeast', recipes: ['Oatmeal']}]
			}, {
				date: '14',
				occurrences: [{type: 'dinner', recipes: ['Panquecas de legumes']}]
			},
		]


		return (
			<div className='events'>
				{
					events.map((item, index) => {
						return <Event key={index} event={item} />
					})
				}
			</div>
		)
	}
}


const Event = ({ event }) => {

	/* const ICON_MAP = {
		'breakfeast': 'coffee',
		'lunch': 'utensils',
		'dinner': 'bread-slice',
	} */

	const MEAL_MAP = {
		'breakfeast': 'Café da Manhã',
		'lunch': 'Almoço',
		'dinner': 'Jantar',
	}

	return (
		<div className='event'>
			<ul>
				<li className='date'>
					<span>{event.date}</span>
				</li>

				<li className='occurrences'>
					{
						event.occurrences.map((occurrence, i) => {
							return (
								<ul key={i}>
									<li className='type'>
										<span>{MEAL_MAP[occurrence.type]}</span>
										{/* <Icon icon={ICON_MAP[occurrence.type]} /> */}
									</li>
									<ul className='recipes'>
										{
											occurrence.recipes.map((recipe, j) => {
												return (
													<li>
														<p>{recipe}</p>
													</li>
												)
											})
										}
									</ul>
								</ul>
							)
						})
					}
				</li>

				<li className='actions'>
					<Icon icon='arrow-right' />
				</li>
			</ul>
		</div>
	)
}
