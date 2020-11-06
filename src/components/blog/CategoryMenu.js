import React from 'react';
import { Link } from 'react-router-dom';

const CategoryMenu = () => {
  return (
    <div className="category-menu-container">
      <Link to="/blog">
        <button className="navbar-button">All</button>
      </Link>
      <Link to="/blog/news">
        <button className="navbar-button">News</button>
      </Link>
      <Link to="/blog/tips">
        <button className="navbar-button">Tips</button>
      </Link>
      <Link to="/blog/misc">
        <button className="navbar-button">More</button>
      </Link>
    </div>
  );
};

export default CategoryMenu;
