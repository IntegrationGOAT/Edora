import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo" aria-label="Edora Home">
          <span className="logoText">
            <img src="https://media.discordapp.net/attachments/1425099203780018218/1426824651044032543/1760251896947.png?ex=68eca181&is=68eb5001&hm=21b83c45bdc17593dda79bc9e8fdec19d847915af175ad14dc39d598175b4079&=&format=webp&quality=lossless&width=823&height=823" alt="Edora Logo" />
          </span>
        </Link>

        <button 
          className="menuButton" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="menuIcon"></span>
        </button>

        <nav className={`nav${isMenuOpen ? ' open' : ''}`}>
          <ul className="navList">
            <li>
              <Link to="/" className={`navLink${location.pathname === '/' ? ' active' : ''}`}>Home</Link>
            </li>
            <li>
              <Link to="/classes" className={`navLink${location.pathname === '/classes' ? ' active' : ''}`}>Classes</Link>
            </li>
            <li>
              <Link to="/features" className={`navLink${location.pathname === '/features' ? ' active' : ''}`} onClick={(e) => { e.preventDefault(); navigate('/features'); }}>Features</Link>
            </li>
            <li>
              <Link to="/about" className={`navLink${location.pathname === '/about' ? ' active' : ''}`} onClick={(e) => { e.preventDefault(); navigate('/about'); }}>About</Link>
            </li>
            <li>
              <Link to="/pricing" className={`navLink${location.pathname === '/pricing' ? ' active' : ''}`}>Pricing</Link>
            </li>
            <li>
              <Link to="/resources" className={`navLink${location.pathname === '/resources' ? ' active' : ''}`}>Resources</Link>
            </li>
            <li>
              <Link to="/support" className={`navLink${location.pathname === '/support' ? ' active' : ''}`}>Support</Link>
            </li>
            <li>
              <Link to="/contact" className={`navLink${location.pathname === '/contact' ? ' active' : ''}`}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
