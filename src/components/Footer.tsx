import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DevLoopLB from "./DevLoopLB";
import "./Footer.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo(0, 0);
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

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div
            className="footer-logo"
            onClick={handleLogoClick}
            style={{ cursor: "pointer" }}
          >
            <DevLoopLB />
          </div>

          <nav className="footer-nav">
            <ul className="footer-menu">
              <li className="footer-item">
                <Link
                  to="/"
                  className={`footer-link ${isActive("/") ? "active" : ""}`}
                  onClick={scrollToTop}
                >
                  Home
                </Link>
              </li>
              <li className="footer-item">
                <Link
                  to="/events"
                  className={`footer-link ${
                    isActive("/events") ? "active" : ""
                  }`}
                  onClick={scrollToTop}
                >
                  Events
                </Link>
              </li>
              <li className="footer-item">
                <Link
                  to="/academies"
                  className={`footer-link ${
                    isActive("/academies") ? "active" : ""
                  }`}
                  onClick={scrollToTop}
                >
                  Academies
                </Link>
              </li>
              <li className="footer-item">
                <Link
                  to="/about"
                  className={`footer-link ${
                    isActive("/about") ? "active" : ""
                  }`}
                  onClick={scrollToTop}
                >
                  About Us
                </Link>
              </li>
              <li className="footer-item">
                <Link
                  to="/contact"
                  className={`footer-link ${
                    isActive("/contact") ? "active" : ""
                  }`}
                  onClick={scrollToTop}
                >
                  Contact Us
                </Link>
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
