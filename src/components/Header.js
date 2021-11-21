import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="h-500">
    <div className="display-6">
      <Link to="/" className="nav-link">TAVERN</Link>
    </div>
  </nav>
);

export default Header;
