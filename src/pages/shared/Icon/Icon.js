import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Icon.scss';

export default class Icon extends Component {
  
  static defaultProps = {
    className: '',
    size: 0
  }
  
  static propsTypes = {
    icon: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.number,
  }
  
  render() {
    const { icon, onClick, className, size } = this.props;
    
    let style = {};
    
    if (size) {
      style.fontSize = size + 'px';
    }
    
    return (
      <span style={style} onClick={onClick} className={`icon ${icon} ${className ? className : ''}`} />
    )
  }
}
