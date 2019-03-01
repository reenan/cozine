import React from 'react'
import {
	BrowserRouter,
	Route,
	Switch,
	Redirect
} from 'react-router-dom'

import { Home, Schedule, Profile } from './pages';

export default (
	<BrowserRouter>
		<Switch>
			<Route path='/' component={Schedule} exact />
			<Route path='/' component={Profile} exact />
			<Route path='/' component={Home} exact />
			
			<Redirect from='*' to='/' />
		</Switch>
	</BrowserRouter>
)