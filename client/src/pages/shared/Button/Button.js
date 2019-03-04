import React, { Component } from 'react'
import './Button.scss';

import { Icon } from '../';

class Button extends Component {
  render() {
    const { children, className } = this.props;

    return (
      <div className={`button ${className ? className : ''}`}>
        {children}
      </div>
    )
  }
}

class IconButton extends Button {
  render() {
    const { icon, className } = this.props;

    return (
      <Button className={`btn-icon ${className ? className : ''}`}>
        <Icon icon={icon} />
      </Button>
    )
  }
}

class TextButton extends Button {
  render() {
    const { text, className } = this.props;

    return (
      <Button className={`btn-text ${className ? className : ''}`}>
        <span>{text}</span>
      </Button>
    )
  }
}

export {
  IconButton,
  TextButton
}