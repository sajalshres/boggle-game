/**
 * @file Header component of the Boggle game
 * @author sajalshres
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGamepad, faTrophy } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Boggle</h1>
      <ul className="nav">
        <Link to="/" className="home-page">
          <li className="nav-item">
            <FontAwesomeIcon icon={faHome} className="btn" />
          </li>
        </Link>
        <Link to="/game" className="boggle-page">
          <li className="nav-item">
            <FontAwesomeIcon icon={faGamepad} className="btn" />
          </li>
        </Link>
        <Link to="/rank" className="rank-page">
          <li className="nav-item">
            <FontAwesomeIcon icon={faTrophy} className="btn" />
          </li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
