import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DevLoopLB from "./DevLoopLB";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo(0, 0);
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

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleLogoClick = () => {
    // If we're already on the home page, scroll to top and reload
    if (location.pathname === "/") {
      window.scrollTo(0, 0);
      window.location.reload();
    } else {
      // If we're on a different page, navigate to home and then reload
      navigate("/");
      setTimeout(() => {
        window.scrollTo(0, 0);
        window.location.reload();
      }, 100);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div
          className="navbar-logo"
          onClick={handleLogoClick}
          style={{ cursor: "pointer" }}
        >
          <DevLoopLB />
        </div>

        {/* Desktop Navigation */}
        <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <li className="navbar-item">
            <Link
              to="/"
              className={`navbar-link ${isActive("/") ? "active" : ""}`}
              onClick={scrollToTop}
            >
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="/events"
              className={`navbar-link ${isActive("/events") ? "active" : ""}`}
              onClick={scrollToTop}
            >
              Events
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="/academies"
              className={`navbar-link ${
                isActive("/academies") ? "active" : ""
              }`}
              onClick={scrollToTop}
            >
              Academies
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="/about"
              className={`navbar-link ${isActive("/about") ? "active" : ""}`}
              onClick={scrollToTop}
            >
              About Us
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="/contact"
              className={`navbar-link ${isActive("/contact") ? "active" : ""}`}
              onClick={scrollToTop}
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Right side button */}
        <div className="navbar-right">
          <Link
            to="/submit-event"
            className="submit-event-button"
            onClick={scrollToTop}
          >
            Submit an Event
          </Link>
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
