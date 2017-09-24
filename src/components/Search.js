import React, { Component } from 'react';
import './Search.scss';
import SearchIcon from './vectors/SearchIcon';
import suggest from 'suggestion';
import Autosuggest from 'react-autosuggest';

const getSuggestionValue = suggestion => suggestion;

const renderSuggestion = suggestion => (
    suggestion
);

class Search extends Component {
    constructor() {
        super();

        this.state = {
            value: '',
            suggestions: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onSuggestionsFetchRequested = ({ value }) => {
        const self = this;
        suggest(value, { client: 'youtube' }, function (err, suggestions) {
            if (err) throw err;
            self.setState({suggestions: suggestions});
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    onSuggestionSelected = (event, { suggestionValue }) => {
      this.props.search(suggestionValue);
    };

    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

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
        const { value, suggestions } = this.state;

        const inputProps = {
            placeholder: 'Search YouTube',
            value,
            onChange: this.onChange
        };

        return (
            <form className="search" onSubmit={this.handleSubmit}>
                <div className="search__input">
                    <button className="search__icon" onClick={() => this.handleSubmit}>
                        <SearchIcon />
                    </button>

                    <Autosuggest
                        suggestions={suggestions}
                        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                        getSuggestionValue={getSuggestionValue}
                        renderSuggestion={renderSuggestion}
                        inputProps={inputProps}
                        onSuggestionSelected={this.onSuggestionSelected}
                    />
                </div>
            </form>

        );
    }
}

export default Search;
