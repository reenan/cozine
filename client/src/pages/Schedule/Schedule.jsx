import React, { Component } from 'react'
import './Schedule.scss';

import Calendar from './Calendar/Calendar';
import Events from './Events/Events';

export default class Schedule extends Component {

	render() {
		return (
			<div className='schedule'>
				<Calendar />
				<Events />
			</div>
		)
	}
}