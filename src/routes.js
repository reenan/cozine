import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { Menu } from './pages/shared';
import { Schedule, Recipes, Recipe, Profile, Preparation } from './pages'

export default (
	<BrowserRouter>
		<div>
			<Menu />
			<Switch>
				<Route path='/schedule' component={Schedule} />
				<Route path='/recipes' component={Recipes} />
				<Route path='/recipe' component={Recipe} />
				<Route path='/preparation' component={Preparation} />
				<Route path='/profile' component={Profile} />
				{/* <Route path='/' component={Home} /> */}
				
				<Redirect from='*' to='/schedule' />
			</Switch>
		</div>
	</BrowserRouter>
)