/**
* @file Header component of the Boggle game
* @author sajalshres
*/
import React from 'react';
import './styles.scss';

function Header() {
    return (
        <header className="header">
            <div className="header__title">
                <h1 className="title">Boggle</h1>
            </div>
        </header>
    );
}

export default Header