import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar-container">
      <Link to="/">
        <button className="navbar-button">Calculator</button>
      </Link>
      <Link to="/blog">
        <button className="navbar-button">Blog</button>
      </Link>
    </div>
  );
};

export default NavBar;
