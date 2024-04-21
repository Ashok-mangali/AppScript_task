import React, { useState } from 'react';
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';
import './index.css'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <nav>
        <div className="logo-section">
          <img src="/images/campany_logo.png" alt="CompanyLogo" className="logo" />
          
        </div>
        <h1 className="logo-text">LOGO</h1>
        <div className="nav-icons">
          <FaSearch className="icon" />
          <FaHeart className="icon" />
          <FaShoppingCart className="icon" />
          <FaUser className="icon" />
          <div className="language-selection">
            {/* Language selection dropdown */}
            <select>
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
          </div>
        </div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
      {/* Navigation links */}
      <ul className={`nav-links ${showMenu ? 'show' : ''}`}>
        <li><a href="Shop">Shop</a></li>
        <li><a href="Skills">Skills</a></li>
        <li><a href="Stores">Stores</a></li>
        <li><a href="About">About</a></li>
        <li><a href="Contact">Contact Us</a></li>
      </ul>
    </header>
  );
};

export default Header;