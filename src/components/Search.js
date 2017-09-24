import React, { Component } from 'react';
import './Search.scss';
import SearchIcon from './vectors/SearchIcon';
import suggest from 'suggestion';
import Suggestion from './Suggestion';

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
                        
                    <input type="text"
                           placeholder="Search YouTube"
                           value={this.state.value}
                           onChange={this.handleChange}
                           onFocus={this.onFocus}
                           role="combobox"
                           autoComplete="off"
                           aria-autocomplete="list"
                           aria-owns="suggestions"
                           aria-expanded="false"
                           aria-controls="suggestions"
                           aria-haspopup="false"
                           aria-activedescendant="option-1"
                    />
                </div>
                <ul id="suggestions" className="suggestions" role="listbox">
                    {
                        Object
                            .keys(this.state.suggestions)
                            .map(key => <Suggestion key={key} index={key} value={this.state.suggestions[key]} search={this.props.search} />)
                    }
                </ul>
            </form>

        );
    }
}

export default Search;
