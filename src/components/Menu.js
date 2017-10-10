import React, { Component } from 'react';
import './Menu.scss';

class Menu extends Component {
    constructor() {
        super();

        this.onBurgerClick = this.onBurgerClick.bind(this);
    }

    onBurgerClick() {
        this.props.toggleMenu();
        this.burgerButton.blur();
    }

    render() {
        return (
            <div className={"menu " + (this.props.menuIsOpen ? 'is-open' : '')}>
                <button className="menu__burger"
                        onClick={this.onBurgerClick}
                        ref={(burgerButton) => { this.burgerButton = burgerButton }}>
                    <span></span>
                    <span></span>
                </button>
                <div className="menu__wrap">
                    <div className="menu__inner">
                        <div className="menu__section">
                            <div className="shortcuts">
                                <h2 className="shortcuts__title">Keyboard Shortcuts</h2>
                                <ul className="shortcuts__list">
                                    <li className="shortcuts__item">
                                        <div className="shortcuts__action">Play/Pause</div>
                                        <div className="shortcuts__key">space</div>
                                    </li>
                                    <li className="shortcuts__item">
                                        <div className="shortcuts__action">Shuffle</div>
                                        <div className="shortcuts__key">S</div>
                                    </li>
                                    <li className="shortcuts__item">
                                        <div className="shortcuts__action">Loop</div>
                                        <div className="shortcuts__key">L</div>
                                    </li>
                                    <li className="shortcuts__item">
                                        <div className="shortcuts__action">Volume Up</div>
                                        <div className="shortcuts__key">+</div>
                                    </li>
                                    <li className="shortcuts__item">
                                        <div className="shortcuts__action">Volume Down</div>
                                        <div className="shortcuts__key">-</div>
                                    </li>
                                    <li className="shortcuts__item">
                                        <div className="shortcuts__action">Play Next Song</div>
                                        <div className="shortcuts__key">Shift</div>
                                        <div className="shortcuts__key">→</div>
                                    </li>
                                    <li className="shortcuts__item">
                                        <div className="shortcuts__action">Rewind</div>
                                        <div className="shortcuts__key">Shift</div>
                                        <div className="shortcuts__key">←</div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/*
                        <div className="menu__section">
                            <div className="more">
                                <h2 className="more__title">Suggestions?</h2>
                                <div className="more__content">
                                    <p>If you have feature suggestions, please tweet at me.</p>
                                </div>
                            </div>
                        </div>
                        */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;
