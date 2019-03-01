import React, { Component } from 'react'
import './Events.scss';

import { Icon } from '../../shared';

export default class Events extends Component {
	render() {

		const events = [
			{
				date: '02',
				data: [
					{type: 'breakfeast', recipes: ['Iogurte natural', 'Banana', 'Suco de laranja']},
					{type: 'lunch', recipes: ['Massa ao molho Alfredo']},
					{type: 'dinner', recipes: ['Lasanha de brócolis']}
				]
			}, {
				date: '07',
				data: [{type: 'lunch', recipes: ['Nhoque de batata doce']}]
			}, {
				date: '11',
				data: [{type: 'breakfeast', recipes: ['Oatmeal']}]
			}, {
				date: '14',
				data: [{type: 'dinner', recipes: ['Panquecas de legumes']}]
			},
		]


		return (
			<ul className='events'>
				{
					events.map((item, index) => {
						return <Event key={index} event={item} />
					})
				}
			</ul>
		)
	}
}


const Event = ({ event }) => {

	const MEAL_MAP = {
		'breakfeast': 'Café da Manhã',
		'lunch': 'Almoço',
		'dinner': 'Jantar',
	}

	return (
		<li className='event'>
			<span className='date'>{event.date}</span>
			<ul className='data'>
				{
					event.data.map((occurrence, i) => {
						return (
							<li key={i}>
								<p>{MEAL_MAP[occurrence.type]}</p>
								<ul>
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
							</li>
						)
					})
				}
			</ul>
			<Icon icon='arrow-right' />
		</li>
	)

	/* return (
		<div className='event'>
			<ul>
				<li className='date'>
					<span>{event.date}</span>
				</li>

				<li className='data'>
					{
						event.data.map((occurrence, i) => {
							return (
								<ul key={i}>
									<li className='type'>
										<span>{MEAL_MAP[occurrence.type]}</span>
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
	) */
}
