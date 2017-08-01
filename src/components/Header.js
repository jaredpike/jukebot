import React from 'react';
import './Header.scss';

const Header = (props) => {
    return (
        <header className="header">
            <div className="header__section">
                <a className="header__logo">{props.name}</a>
            </div>
            <div className="header__section">
                <button className="header__burger"><span></span></button>
            </div>
        </header>
    )
};

export default Header;