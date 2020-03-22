/**
 * @file Header component of the Boggle game
 * @author sajalshres
 */
import React from 'react';
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
        <li className="header__nav-item">
          <a href="#" className="btn">
            <FontAwesomeIcon icon={faHome} />
          </a>
        </li>
        <li className="header__nav-item">
          <a href="#" className="btn">
            <FontAwesomeIcon icon={faGamepad} />
          </a>
        </li>
        <li className="header__nav-item">
          <a href="#" className="btn">
            <FontAwesomeIcon icon={faTrophy} />
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
