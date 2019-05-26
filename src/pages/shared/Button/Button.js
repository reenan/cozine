import React, { Component } from 'react'
import PropTypes from 'prop-types';

import './Button.scss';

import { Icon } from '../';

class Button extends Component {

  static propsTypes = {
    className: PropTypes.string,
    size: PropTypes.number,
  }

  static defaultProps = {
    className: '',
    size: 0,
  }

  render() {
    const { children, className, style } = this.props;

    return (
      <div className={`button ${className}`} style={style}>
        {children}
      </div>
    )
  }
}

class IconButton extends Button {
  render() {
    const { icon, className, size } = this.props;

    let style = {};

    if (size) {
      style.width = size + 'px';
      style.height = size + 'px';
      style.lineHeight = size + 'px';
    }

    return (
      <Button className={`btn-icon ${className}`} style={style}>
        <Icon size={size} icon={icon} />
      </Button>
    )
  }
}

class TextButton extends Button {
  render() {
    const { text, className } = this.props;

    return (
      <Button className={`btn-text ${className}`}>
        <span>{text}</span>
      </Button>
    )
  }
}

export {
  IconButton,
  TextButton
}