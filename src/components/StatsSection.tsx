import React, { useState, useEffect, useRef } from 'react';
import './StatsSection.css';

interface Stat {
  id: number;
  number: number;
  suffix: string;
  label: string;
  icon: string;
  iconType: 'gif' | 'mp4';
}

const StatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState<{ [key: number]: number }>({});
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const stats: Stat[] = [
    {
      id: 1,
      number: 22,
      suffix: '+',
      label: 'Events since 2025',
      icon: 'https://cdn-icons-mp4.flaticon.com/512/19000/19000777.mp4',
      iconType: 'mp4'
    },
    {
      id: 2,
      number: 8,
      suffix: '+',
      label: 'Bootcamps & Academies',
      icon: 'https://cdn-icons-mp4.flaticon.com/512/6454/6454149.mp4',
      iconType: 'mp4'
    },
    {
      id: 3,
      number: 11,
      suffix: '+',
      label: 'Lebanese Dev Communities',
      icon: 'https://cdn-icons-mp4.flaticon.com/512/6172/6172532.mp4',
      iconType: 'mp4'
    }
  ];

  // Initialize animated numbers
  useEffect(() => {
    const initialNumbers: { [key: number]: number } = {};
    stats.forEach(stat => {
      initialNumbers[stat.id] = 0;
    });
    setAnimatedNumbers(initialNumbers);
  }, []);

  // Intersection Observer to trigger animation when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  // Animate numbers when section becomes visible
  useEffect(() => {
    if (isVisible) {
      stats.forEach(stat => {
        let startTime: number;
        const duration = 2000; // 2 seconds
        const startValue = 0;
        const endValue = stat.number;

        const animate = (currentTime: number) => {
          if (!startTime) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / duration, 1);
          
          // Easing function for smooth animation
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart);
          
          setAnimatedNumbers(prev => ({
            ...prev,
            [stat.id]: currentValue
          }));

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
      });
    }
  }, [isVisible]);

  const handleCardHover = (statId: number) => {
    setHoveredCard(statId);
    const video = videoRefs.current[statId];
    if (video) {
      video.loop = true; // Enable looping while hovering
      video.play();
    }
  };

  const handleCardLeave = (statId: number) => {
    setHoveredCard(null);
    const video = videoRefs.current[statId];
    if (video) {
      // Let the video finish its current iteration
      video.loop = false;
      
      // Add event listener to reset when video ends
      const handleVideoEnd = () => {
        video.currentTime = 0;
        video.removeEventListener('ended', handleVideoEnd);
      };
      
      video.addEventListener('ended', handleVideoEnd);
    }
  };

  const renderIcon = (stat: Stat) => {
    return (
      <video 
        ref={(el) => { videoRefs.current[stat.id] = el; }}
        src={stat.icon}
        className="stat-icon-media"
        muted
        playsInline
      />
    );
  };

  return (
    <section ref={sectionRef} className="stats-section">
      <div className="stats-container">
        <div className="stats-header">
          <h2 className="stats-title">
            DevLoop<span style={{ color: "rgb(0, 209, 210)" }}>LB</span> in
            Numbers 📊
          </h2>
          <p className="stats-subtitle">
            Connecting Lebanon's developer ecosystem through events, education,
            and community
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="stat-card"
              onMouseEnter={() => handleCardHover(stat.id)}
              onMouseLeave={() => handleCardLeave(stat.id)}
            >
              <div className="stat-icon">{renderIcon(stat)}</div>
              <div className="stat-number">
                {animatedNumbers[stat.id] || 0}
                {stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 