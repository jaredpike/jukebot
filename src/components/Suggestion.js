import React, { Component } from 'react';

class Suggestion extends Component {
    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        console.log('clicked! ' + this.props.value);

        this.props.search(this.props.value);
    }
    render() {
        return (
            <li className="suggestions__item"
                role="option"
                tabIndex="-1"
                aria-selected="false"
                id={`option-${this.props.index}`}
                onClick={this.handleClick}>
                {this.props.value}
            </li>
        );
    }
}

export default Suggestion;
