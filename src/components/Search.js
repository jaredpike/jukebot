import React, { Component } from 'react';
import './Search.scss';

class Search extends Component {
    constructor() {
        super();

        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.resetInput = this.resetInput.bind(this);
    }

    resetInput() {
        this.setState({value: ''});
    }

    onFocus() {
        this.resetInput();
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.search(this.state.value);
    }

    render() {
        return (
            <form className="search" onSubmit={this.handleSubmit}>
                <div className="search__input">
                    <input type="text" placeholder="Search YouTube" value={this.state.value} onChange={this.handleChange} onFocus={this.onFocus}/>
                </div>
            </form>

        );
    }
}

export default Search;