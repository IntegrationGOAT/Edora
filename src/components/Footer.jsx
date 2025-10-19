import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="section">
          <h3>Edora</h3>
          <p>Simplifying education technology management for schools worldwide.</p>
        </div>
        <div className="section">
          <h4>Product</h4>
          <ul>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/resources">Resources</Link></li>
          </ul>
        </div>
        <div className="section">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="section">
          <h4>Support</h4>
          <ul>
            <li><Link to="/support">Help Center</Link></li>
            <li><Link to="/documentation">Documentation</Link></li>
            <li><Link to="/status">Status</Link></li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <div className="container">
          <p>&copy; 2025 Edora. All rights reserved.</p>
          <div className="legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
