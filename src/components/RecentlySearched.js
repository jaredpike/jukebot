import React, { Component } from 'react';
import './RecentlySearched.scss';

class RecentlySearched extends Component {
    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(searchTerm) {
        this.props.search(searchTerm);
    }

    render() {
        return (
            <div className="recently-searched">
                <h3 className="recently-searched__title">Recently Searched</h3>
                <ul className="recently-searched__list">
                        {
                        Object
                            .keys(this.props.searchedTerms)
                            .map(key =>
                                <li className="recently-searched__item" key={key}>
                                    <button
                                        className="recently-searched__button"
                                        onClick={() => this.handleClick(this.props.searchedTerms[key])}
                                    >
                                        {this.props.searchedTerms[key]}
                                    </button>
                                </li>
                            )
                        }
                </ul>
            </div>
        )
    }
}

export default RecentlySearched;