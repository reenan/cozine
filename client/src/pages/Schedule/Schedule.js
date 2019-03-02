import React, { Component } from 'react'
import './Schedule.scss';

import Calendar from './Calendar/Calendar';
import Events from './Events/Events';
//import Day from './Day/Day';

export default class Schedule extends Component {

	render() {
		return (
			<div className='schedule'>
				{/* <Day /> */}
				<Calendar />
				{/* <Events /> */}
			</div>
		)
	}
}
