import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { Schedule, Recipes, Recipe, Profile } from './pages'

export default () => (
	<Switch>
		<Route path='/schedule' component={Schedule} />
		<Route path='/recipes' component={Recipes} />
		<Route path='/recipe' component={Recipe} />
		<Route path='/profile' component={Profile} />
		{/* <Route path='/' component={Home} /> */}
		<Redirect from='*' to='/schedule' />
	</Switch>
)