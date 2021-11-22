import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlassCheers } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
  <header>
    <nav className="navbar navbar-light">
      <div>
        <Link to="/" className="Brand navbar-brand text-danger fs-1 fw-bolder">
          TAVERN
          <span className="Logo mx-2">
            <FontAwesomeIcon icon={faGlassCheers} />
          </span>
        </Link>
      </div>
    </nav>
  </header>
);

export default Header;
