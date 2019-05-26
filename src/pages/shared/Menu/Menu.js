import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import { IconButton, Icon } from './..'

import './Menu.scss';

export default class Menu extends Component {

  constructor(props) {
    super(props)

    this.state = {
      open: true
    }
  }

  toggleSideBar = (e) => {
    e.preventDefault()
    e.stopPropagation()

    this.setState({
      open: !this.state.open
    })
  }

  closeSidebar = () => {
    this.setState({
      open: false
    })
  }

  preventDefault = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  render() {
    const { open } = this.state;

    return (
      <div onClick={this.closeSidebar} className={`menu ${open ? 'open' : ''}`}> 

        <IconButton size={14} icon={`${open ? 'times' : 'bars'}`} onClick={this.toggleSideBar} />

        <div className='side-bar' onClick={this.preventDefault}>
          <div className='items' onClick={this.closeSidebar}>
            <NavLink to='/schedule'>
              <Icon icon='calendar-day'/>
              <span>Schedule</span>
            </NavLink>
            <NavLink to='/recipes'>
              <Icon icon='book'/>
              <span>Recipes</span>
            </NavLink>
            <NavLink to='/profile'>
              <Icon icon='user'/>
              <span>Profile</span>
            </NavLink>
          </div>
        </div>
      </div>
      )
    }
  }
