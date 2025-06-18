import React from "react";
import "./AcademiesSection.css";

const AcademiesSection: React.FC = () => {
  return (
    <section className="academies-section">
      <div className="academies-background">
        <div className="academies-overlay"></div>
        <div className="academies-container">
          <div className="academies-content">
            <div className="academies-text-card">
              <h2 className="academies-title">
                Build Skills That Power Innovation
              </h2>
              <p className="academies-subtitle">
                Check out the Lebanese academies and bootcamps that can help you
                elevate your skills or reach the next stage of your career
              </p>
              <button className="academies-cta-button">
                Academies
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademiesSection;
