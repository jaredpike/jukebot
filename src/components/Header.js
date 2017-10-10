import React from 'react';
import './Header.scss';

const Header = (props) => {
    return (
        <header className="header">
            <div className="header__section">
                <a className="header__logo">{props.name}</a>
            </div>
        </header>
    )
};

export default Header;