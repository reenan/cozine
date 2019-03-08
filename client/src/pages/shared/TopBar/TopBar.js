import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

import './TopBar.scss';

export default class TopBar extends Component {
    render() {
        return (
            <div className='top-bar'> 
                <NavLink to='/Home'>Home</NavLink>
                <NavLink to='/schedule'>Schedule</NavLink>
                <NavLink to='/recipes'>Recipes</NavLink>
                <NavLink to='/recipe'>Recipe</NavLink>
                <NavLink to='/profile'>Profile</NavLink>
            </div>
        )
    }
}
