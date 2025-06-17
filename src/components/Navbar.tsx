import React, { useState, useEffect } from "react";
import DevLoopLB from "./DevLoopLB";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const updateScrollBar = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      const progressBar = document.querySelector(
        ".scroll-progress-bar"
      ) as HTMLElement;
      if (progressBar) {
        progressBar.style.width = `${scrollPercent}%`;
      }
    };

    window.addEventListener("scroll", updateScrollBar);
    return () => window.removeEventListener("scroll", updateScrollBar);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div
          className="navbar-logo"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "auto" });
            window.location.reload();
          }}
          style={{ cursor: "pointer" }}
        >
          <DevLoopLB />
        </div>

        {/* Desktop Navigation */}
        <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <li className="navbar-item">
            <a href="#" className="navbar-link active">
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">
              Events
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">
              Academies
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">
              About Us
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">
              Contact Us
            </a>
          </li>
        </ul>

        {/* Right side button */}
        <div className="navbar-right">
          <button className="submit-event-button">Submit an Event</button>
        </div>

        {/* Mobile menu button */}
        <div className="mobile-menu" onClick={toggleMenu}>
          <span className={`bar ${isMenuOpen ? "active" : ""}`}></span>
          <span className={`bar ${isMenuOpen ? "active" : ""}`}></span>
          <span className={`bar ${isMenuOpen ? "active" : ""}`}></span>
        </div>
      </div>
      <div className="scroll-progress-bar"></div>
    </nav>
  );
};

export default Navbar;
