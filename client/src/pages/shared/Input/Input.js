import React, { Component } from 'react'
import PropTypes from 'prop-types';

import './Input.scss';

export default class Input extends Component {

  static propsTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    required: PropTypes.bool,
    value: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
}

  static defaultProps = {
    className: '',
    type: 'text',
    required: false,
    value: '',
    label: '',
  }

  render() {
    const { type, label, required, value, className } = this.props;

    return (
      <div className={`input ${className}`}>
        <input type={type} required={required} defaultValue={value} />
        <label>{label}</label>
      </div>
    )
  }
}