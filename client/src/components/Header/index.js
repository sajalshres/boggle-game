/**
 * @file Header component of the Boggle game
 * @author sajalshres
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGamepad, faTrophy } from '@fortawesome/free-solid-svg-icons';

import './styles.scss';

function Header() {
  return (
    <header className="header">
      <div className="header__title">
        <h1 className="title">Boggle</h1>
      </div>
      <ul className="header__nav">
        <Link to="/">
          <li className="header__nav-item">
            <FontAwesomeIcon icon={faHome} className="btn" />
          </li>
        </Link>
        <Link to="/game">
          <li className="header__nav-item">
            <FontAwesomeIcon icon={faGamepad} className="btn" />
          </li>
        </Link>
        <Link to="/rank">
          <li className="header__nav-item">
            <FontAwesomeIcon icon={faTrophy} className="btn" />
          </li>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
