import React, { Component } from 'react'
import './Home.scss';

import logo from '../../resources/images/logo.png';

export default class Home extends Component {
	render() {
		return (
			<div className='home'>
				<div className='content'>
					<img alt='Cozinhe Logo' src={logo} />
					<span className='title'>Cozinhe</span>
				</div>
			</div>
		)
	}
}
