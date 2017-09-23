import React, { Component } from 'react';
import './Search.scss';
import SearchIcon from './vectors/SearchIcon';
import suggest from 'suggestion';

class Search extends Component {
    constructor() {
        super();

        this.state = {
            value: '',
            suggestions: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.resetInput = this.resetInput.bind(this);
    }

    resetInput() {
        this.setState({
            value: '',
            suggestions: ''
        });
    }

    onFocus() {
        this.resetInput();
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        const self = this;

        if (event.target.value.length) {
            suggest(event.target.value, { client: 'youtube' }, function (err, suggestions) {
                if (err) throw err;
                self.setState({suggestions: suggestions});
            });
            return;
        }

        this.setState({suggestions: ''});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.search(this.state.value);

        const results = document.querySelector('#results');
        results.scrollTop = 0;
    }

    render() {
        return (
            <form className="search" onSubmit={this.handleSubmit}>
                <div className="search__input">
                    <button className="search__icon" onClick={() => this.handleSubmit}>
                        <SearchIcon />
                    </button>
                        
                    <input type="text" placeholder="Search YouTube" value={this.state.value} onChange={this.handleChange} onFocus={this.onFocus}/>

                    <ul className="suggestions">
                        {
                            Object
                                .keys(this.state.suggestions)
                                .map(key => <li>{ this.state.suggestions[key]}</li>)
                        }
                    </ul>
                </div>
            </form>

        );
    }
}

export default Search;
