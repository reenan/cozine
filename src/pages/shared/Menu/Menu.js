import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import { IconButton, Icon } from './..'

import './Menu.scss';

export default class Menu extends Component {

  constructor(props) {
    super(props)

    this.state = {
      open: true,
      closing: false
    }
  }

  openSidebar = (e) => {
    e.preventDefault()
    e.stopPropagation()

    this.setState({
      open: true
    })
  }

  closeSidebar = (e) => {
    e.preventDefault()
    e.stopPropagation()

    this.setState({
      closing: true
    }, () => {
      setTimeout(() => {
        this.setState({
          closing: false,
          open: false,
        })
      }, 600)
    })
  }

  render() {
    const { open, closing } = this.state;

    return (
      <div onClick={this.closeSidebar} className={`menu ${closing ? 'closing' : ''} ${open ? 'open' : ''}`}> 

        {
          open ?
          <IconButton size={14} icon='times' onClick={this.closeSidebar} /> :
          <IconButton size={14} icon='bars' onClick={this.openSidebar} />
        }
        

        <div className='side-bar'>
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
