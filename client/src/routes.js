import React from 'react'
import {
	BrowserRouter,
	Route,
	Switch,
	Redirect
} from 'react-router-dom'

import { Home, Calendar } from './pages';

export default (
	<BrowserRouter>
		<Switch>
			<Route path='/' component={Calendar} exact />
			<Route path='/' component={Home} exact />
			
			<Redirect from='*' to='/' />
		</Switch>
	</BrowserRouter>
)