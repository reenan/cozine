import React, { Component } from 'react';

//import HTML5Backend from 'react-dnd-html5-backend'
//import { DragDropContext } from 'react-dnd'
import { BrowserRouter } from 'react-router-dom'

import { Menu } from './shared';

import '../resources/normalize.css';
import '../index.scss';
import Routes from '../routes.js';

class App extends Component {
  onChange = () => {
    console.log('onChange')
  }

  render() {
    return (
      <BrowserRouter onChange={this.onChange}>
        <div className='app'>
          <Menu />
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}

export default /* DragDropContext(HTML5Backend) */(App)
