import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Icon.scss';

export default class Icon extends Component {
    
    static propsTypes = {
        icon: PropTypes.string.isRequired,
        className: PropTypes.string,
        onClick: PropTypes.func,
    }

    render() {
        const { icon, onClick, className } = this.props;

        return (
            <span onClick={onClick} className={`icon ${icon} ${className}`} />
        )
    }
}
