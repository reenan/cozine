import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Tag.scss';

export default class Tag extends Component {
    
    static propsTypes = {
        className: PropTypes.string,
    }

    static defaultProps = {
        className: ''
    }

    render() {
        const { className, tag } = this.props;

        const TAG_MAP = {
            veggie: 'Vegetariano',
            fast: 'Rápido',
            cheap: 'Barato', 
            gourmet: 'Gourmet', 
            easy: 'Fácil', 
          }

        return (
            <span className={`tag ${tag || 'untagged'} ${className}`}>
                {TAG_MAP[tag] || 'Sem categoria'}
            </span>
        )
    }
}
