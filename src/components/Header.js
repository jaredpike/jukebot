import React from 'react';
import './Header.scss';
import Robot from './vectors/Robot';

const Header = (props) => {
    return (
        <header className="header">
            <div className="header__section">
                <a className="header__logo">
                    <span><Robot /></span>
                    <span>{props.name}</span>
                </a>
            </div>
        </header>
    )
};

export default Header;