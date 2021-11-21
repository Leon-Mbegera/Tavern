import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => (
  <header>
    <nav className="navbar navbar-light">
      <div>
        <i className="fa fa-beer" aria-hidden="true" />
        <Link to="/" className="Brand navbar-brand text-danger fs-1 fw-bolder">TAVERN</Link>
      </div>
    </nav>
  </header>
);

export default Header;
