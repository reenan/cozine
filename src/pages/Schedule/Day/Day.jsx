import React, { Component } from 'react'
import './Day.scss';

import { Icon } from '../../shared';

import moment from 'moment';
import 'moment/locale/pt-br';
moment.locale('pt-BR');

export default class Day extends Component {
	render() {

		const initial = 0;
		const final = 23;
		const step = 1;

		const lines = [];

		const recipes = {
			1: ['Something'],
			4: ['Other'],
			7: ['Cool', 'Cold'],
			14: ['Water', 'Juice', 'Coffee'],
		}

		for (let i = initial; i <= final; i += step) {
			lines.push(
				<Line key={i} time={i.toString().padStart(2, 0) + ':00'} recipes={recipes[i]} />
			)
		}


		const weekday = moment().format('dddd');
		const monthDay = moment().format('DD [de] MMMM [de] Y');

		return (
			<div className='day'>
				<div className='header'>
					<ul>
						<li>
							<p className='weekday'>
								{weekday}
							</p>
							<p className='month-day'>
								{monthDay}
							</p>
						</li>
						<li>
							<Icon icon='calendar' />
						</li>
					</ul>
				</div>
				<ul className='hours'>
					{lines}
				</ul>
			</div>
		)
	}
}


const Line = ({ time, recipes }) => {
	return (
		<li>
			<span>
				{time}
			</span>
			{
				recipes ? 
				<ul>
					{
						recipes.map((item, index) => {
							return (
								<li key={index}>
									{item}
								</li>
							)
						})
					}	
				</ul> : null
			}
			
		</li>
	)
}
