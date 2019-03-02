import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import './Recipes.scss';

class Recipes extends Component {
	render() {
		return (
			<div className='recipes'>
				hello recipes
			</div>
		)
	}
}

export default withRouter(Recipes);