import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import styles from './Header.module.css';

const Header = () => {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoText}>Edora</span>
        </Link>

        <button 
          className={styles.menuButton} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.menuIcon}></span>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
          <ul className={styles.navList}>
            <li>
              <Link to="/" className={`${styles.navLink} ${location.pathname === '/' ? styles.active : ''}`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/features" className={`${styles.navLink} ${location.pathname === '/features' ? styles.active : ''}`}>
                Features
              </Link>
            </li>
            <li>
              <Link to="/about" className={`${styles.navLink} ${location.pathname === '/about' ? styles.active : ''}`}>
                About Us
              </Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link to="/dashboard" className={`${styles.navLink} ${location.pathname === '/dashboard' ? styles.active : ''}`}>
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/resources" className={`${styles.navLink} ${location.pathname === '/resources' ? styles.active : ''}`}>
                    Resources
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link to="/support" className={`${styles.navLink} ${location.pathname === '/support' ? styles.active : ''}`}>
                  Support
                </Link>
              </li>
            )}
          </ul>

          <div className={styles.auth}>
            {user ? (
              <>
                <span className={styles.userInfo}>{user.name}</span>
                <button onClick={logout} className={styles.logoutButton}>Log Out</button>
              </>
            ) : (
              <>
                <Link to="/login" className={styles.loginButton}>Log In</Link>
                <Link to="/register" className={styles.signupButton}>Sign Up</Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
