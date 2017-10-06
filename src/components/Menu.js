import React, { Component } from 'react';
import './Menu.scss';

class Menu extends Component {
    render() {
        return (
            <div className={"menu " + (this.props.menuIsOpen ? 'is-open' : '')}>
                <button className="menu__burger" onClick={this.props.toggleMenu}>
                    <span></span>
                    <span></span>
                </button>
                <div className="menu__wrap">
                    <div className="menu__inner"></div>
                </div>
            </div>
        );
    }
}

export default Menu;
