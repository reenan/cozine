import React from 'react'
import {
	BrowserRouter,
	Route,
	Switch,
	Redirect
} from 'react-router-dom'

import { TopBar } from './pages/shared';
import { Home, Schedule, Recipes, Recipe, Profile, Preparation } from './pages';

export default (
	<BrowserRouter>
		<div>
			<TopBar />
			<Switch>
			<Route path='/schedule' component={Schedule} exact />
				<Route path='/recipes' component={Recipes} exact />
				<Route path='/recipe' component={Recipe} exact />
				<Route path='/preparation' component={Preparation} exact />
				<Route path='/profile' component={Profile} exact />
				<Route path='/' component={Home} exact />
				
				<Redirect from='*' to='/' />
			</Switch>
		</div>
	</BrowserRouter>
)