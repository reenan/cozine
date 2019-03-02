import React, { Component } from 'react'

import { NavLink } from 'react-router-dom';
import { Icon } from '../../shared';

import './Events.scss';

export default class Events extends Component {
	render() {

		const events = [
			{
				date: '02',
				data: [
					{type: 'breakfeast', list: ['Iogurte natural', 'Banana', 'Suco de laranja']},
					{type: 'lunch', list: ['Massa ao molho Alfredo']},
					{type: 'dinner', list: ['Lasanha de brócolis']}
				]
			}, {
				date: '07',
				data: [{type: 'lunch', list: ['Nhoque de batata doce']}]
			}, {
				date: '11',
				data: [{type: 'breakfeast', list: ['Oatmeal']}]
			}, {
				date: '14',
				data: [{type: 'dinner', list: ['Panquecas de legumes']}]
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

	const MEAL_MAP = {
		'breakfeast': 'Café da Manhã',
		'lunch': 'Almoço',
    'dinner': 'Jantar',
	}

	return (
		<NavLink to='/' className='event'>
			<span className='date'>{event.date}</span>
			<ul className='data'>
				{
					event.data.map((data, i) => {
						return (
							<li key={i}>
								<p>{MEAL_MAP[data.type]}</p>
								<ul>
									{
										data.list.map((item, j) => {
											return (
												<li key={j}>
													<p>{item}</p>
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
		</NavLink>
	)
}
