import React from 'react';
import DevLoopLB from './DevLoopLB';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <DevLoopLB />
          </div>

          <nav className="footer-nav">
            <ul className="footer-menu">
              <li className="footer-item">
                <a href="#" className="footer-link active">
                  Home
                </a>
              </li>
              <li className="footer-item">
                <a href="#events" className="footer-link">
                  Events
                </a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-link">
                  Academies
                </a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-link">
                  About Us
                </a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>

          <div className="footer-copyright">
            <p>
              &copy; {currentYear} <strong>DevLoopLB</strong>. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 