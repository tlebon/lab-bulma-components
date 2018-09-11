import React, { Component } from 'react'

class Button extends Component {
    render() {
        const { big, danger, ...props } = this.props

        let className = 'button'
        if (big) className += ' big'
        if (danger) className += ' danger'

        return (
            <button {...props} className={className}>
                {this.props.children}
            </button>
        )
    }
}

export default Button