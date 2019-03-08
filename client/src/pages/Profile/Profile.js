import React, { Component } from 'react'
import './Profile.scss';

import { Icon, Input, IconButton} from '../shared';

export default class Profile extends Component {

	constructor(props) {
		super(props);

		this.state = {
			meals: [
				{ name: 'Café da manhã', time: '09:00' },
				{ name: 'Almoço', time: '12:00' },
				{ name: 'Café da tarde', time: '15:00' },
				{ name: 'Lanche', time: '17:00' },
				{ name: 'Jantar', time: '21:00' },
			]
		}
	}

	render() {
		const { meals } = this.state;

		return (
			<div className='profile'>
				<div className='meals'>
					<p className='subtitle'>Refeições</p>
					<p className='description'>
						At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.
					</p>
					<ul>
						{
							meals.map((meal, index) => {
								return (
									<li key={index}>
										<Input required value={meal.name} label='Nome' />
										<Input required value={meal.time} label='Horário' />

										<div>
											<IconButton size={14} icon='check' />
										</div>

										<div>
											<IconButton size={14} icon='trash' />
										</div>
									</li>
								)
							})
						}
					</ul>
				</div>

			</div>
		)
	}
}