import React, { useEffect, useRef } from 'react';
import './LatestEvents.css';

interface Event {
  id: number;
  tags: string[];
  title: string;
  description: string;
  image: string;
}

const LatestEvents: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Match height function similar to jQuery matchHeight
  const matchHeight = (selector: string) => {
    if (!containerRef.current) return;
    
    const elements = containerRef.current.querySelectorAll(selector) as NodeListOf<HTMLElement>;
    if (elements.length === 0) return;

    // Reset heights first
    elements.forEach(el => {
      el.style.height = 'auto';
    });

    // Find the tallest element
    let maxHeight = 0;
    elements.forEach(el => {
      const height = el.offsetHeight;
      if (height > maxHeight) {
        maxHeight = height;
      }
    });

    // Set all elements to the max height
    elements.forEach(el => {
      el.style.height = `${maxHeight}px`;
    });
  };

  useEffect(() => {
    // Apply match height to different sections
    const applyMatchHeight = () => {
      matchHeight('.event-tags');
      matchHeight('.event-title');
      matchHeight('.event-description');
    };

    // Apply on mount and window resize
    applyMatchHeight();
    
    const handleResize = () => {
      applyMatchHeight();
    };

    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const mockEvents: Event[] = [
    {
      id: 1,
      tags: ["Workshop", "GDG", "Frontend"],
      title: "React Advanced Patterns & Best Practices",
      description: "Deep dive into advanced React patterns, custom hooks, and performance optimization techniques that every developer should know...",
      image: "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      tags: ["Tech Talk", "BDD"],
      title: "Building Scalable APIs with Node.js",
      description: "Learn how to design and build robust, scalable APIs using Node.js, Express, and modern database solutions...",
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      tags: ["Networking"],
      title: "DevLoopLB End-of-Year Networking Event",
      description: "Join fellow developers, designers, and tech enthusiasts for an evening of networking, discussions, and celebrating our achievements...",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section id="events" className="latest-events">
      <div className="events-container" ref={containerRef}>
        <div className="events-header">
          <h2 className="events-title">Latest Events</h2>
          <button className="see-all-button">
            See all events
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div className="events-grid">
          {mockEvents.map((event) => (
            <div key={event.id} className="event-card">
              <img 
                src={event.image} 
                alt={event.title}
                className="event-image"
              />
              
              <div className="event-content">
                <div className="event-tags">
                  {event.tags.map((tag, index) => (
                    <span key={index} className="event-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="event-title">
                  {event.title}
                </h3>
                
                <p className="event-description">
                  {event.description}
                </p>
                
                <div className="event-footer">
                  <a href="#" className="read-more-link">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Disclaimer */}
        <div className="events-disclaimer">
          <div className="disclaimer-content">
            <div className="disclaimer-icon">
              <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#000">
                <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
              </svg>
            </div>
            <p className="disclaimer-text">
              Please note that none of these events are hosted or organized by DevLoopLB. We are simply an aggregator of interesting events in Lebanon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestEvents; 