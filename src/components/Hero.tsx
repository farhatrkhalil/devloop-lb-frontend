import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const fullText = "Stay in the (dev) loop through our website which aggregates all the events and learning resources that devs living inside lebanon would be interested in.";
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeout: number;
    
    if (isTyping && displayText.length < fullText.length) {
      // Typing phase
      timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 50); // Typing speed
    } else if (isTyping && displayText.length === fullText.length) {
      // Pause when fully typed
      timeout = setTimeout(() => {
        setIsTyping(false);
      }, 3000); // Hold for 3 seconds
    } else if (!isTyping && displayText.length > 0) {
      // Deleting phase
      timeout = setTimeout(() => {
        setDisplayText(displayText.slice(0, -1));
      }, 30); // Deleting speed (faster)
    } else if (!isTyping && displayText.length === 0) {
      // Pause when fully deleted, then restart
      timeout = setTimeout(() => {
        setIsTyping(true);
      }, 1000); // Pause before restarting
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, fullText]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="hero">
      {/* Video Background */}
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="/background.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      
      {/* Dark Overlay */}
      <div className="hero-overlay"></div>
      
      {/* Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          Welcome to DevLoopLB
        </h1>
        <p className="hero-subtitle">
          <span className="typewriter-text-js">
            {displayText}
            <span className={`cursor ${showCursor ? 'visible' : 'hidden'}`}>|</span>
          </span>
        </p>
        
        <div className="hero-cta">
          <p className="cta-text">Check out the latest events</p>
          <div className="cta-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" height="56px" viewBox="0 -960 960 960" width="56px" fill="#fff">
              <path d="M480-200 240-440l46.67-46.67 193.33 193 193.33-193L720-440 480-200Zm0-248.67-240-240 46.67-46.66 193.33 193 193.33-193L720-688.67l-240 240Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;