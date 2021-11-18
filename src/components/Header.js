import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav>
    <div>
      <Link to="/" className="nav-link">Home</Link>
    </div>
  </nav>
);

export default Header;
