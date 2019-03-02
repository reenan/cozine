import React, { Component } from 'react'
import './Profile.scss';

export default class Profile extends Component {
	render() {
		return (
			<div className='profile'>
				<div className='header'>
					<div className='photo' />
					<div className='user-info'>
						<p className='name'>Renan Souza</p>
						<p className='email'>0renan.souza@gmail.com</p>
					</div>
				</div>
			</div>
		)
	}
}