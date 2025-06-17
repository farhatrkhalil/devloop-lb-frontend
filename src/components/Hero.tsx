import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./Hero.css";

const Hero: React.FC = () => {
  const fullTexts = [
    "Stay in the (dev) loop with DevLoopLB, your go-to hub for all the latest events, workshops, and learning resources made for developers in Lebanon",
    "Explore tech meetups, hackathons, and learning sessions happening across Lebanon",
    "DevLoopLB connects developers, students, and tech enthusiasts through curated events and resources",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  const currentFullText = fullTexts[currentIndex];

  useEffect(() => {
    let timeout: number;

    if (isTyping && displayText.length < currentFullText.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentFullText.slice(0, displayText.length + 1));
      }, 50);
    } else if (isTyping && displayText.length === currentFullText.length) {
      timeout = setTimeout(() => {
        setIsTyping(false);
      }, 3000);
    } else if (!isTyping && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(displayText.slice(0, -1));
      }, 30);
    } else if (!isTyping && displayText.length === 0) {
      timeout = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % fullTexts.length);
        setIsTyping(true);
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentFullText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="hero">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="/background.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-overlay"></div>

      <Navbar />

      <div className="hero-content">
        <h1 className="hero-title">Welcome to DevLoopLB</h1>
        <p className="hero-subtitle">
          <span className="typewriter-text-js">
            {displayText}
            <span className={`cursor ${showCursor ? "visible" : "hidden"}`}>
              |
            </span>
          </span>
        </p>

        <a href="#events" className="hero-cta">
          <p className="cta-text">Check out the latest events</p>
          <div className="cta-arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="56px"
              viewBox="0 -960 960 960"
              width="56px"
              fill="#fff"
            >
              <path d="M480-200 240-440l46.67-46.67 193.33 193 193.33-193L720-440 480-200Zm0-248.67-240-240 46.67-46.66 193.33 193 193.33-193L720-688.67l-240 240Z" />
            </svg>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
