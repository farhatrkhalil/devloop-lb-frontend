import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import "./Events.css";

const Events: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Mock events data
  const events = [
    {
      id: 1,
      title: "React Lebanon Meetup",
      type: "meetup",
      description:
        "Join us for an evening of React discussions, networking, and learning. We'll cover the latest React features and best practices.",
      date: "2024-02-15",
      time: "18:00",
      duration: "2h",
      location: "Beirut Digital District",
      organizer: "React Lebanon",
      isFree: true,
      attendees: 45,
      maxAttendees: 50,
      tags: ["React", "JavaScript", "Frontend"],
      image: "🎯",
    },
    {
      id: 2,
      title: "AI & Machine Learning Workshop",
      type: "workshop",
      description:
        "Hands-on workshop covering the fundamentals of AI and machine learning. Perfect for developers looking to expand their skills.",
      date: "2024-02-20",
      time: "14:00",
      duration: "4h",
      location: "Online (Zoom)",
      organizer: "TechAcademy Lebanon",
      isFree: false,
      price: 25,
      attendees: 28,
      maxAttendees: 30,
      tags: ["AI", "Machine Learning", "Python"],
      image: "🤖",
    },
    {
      id: 3,
      title: "Web3 & Blockchain Hackathon",
      type: "hackathon",
      description:
        "48-hour hackathon focused on building innovative Web3 applications. Great prizes and networking opportunities.",
      date: "2024-03-01",
      time: "09:00",
      duration: "2d",
      location: "American University of Beirut",
      organizer: "Blockchain Lebanon",
      isFree: true,
      attendees: 120,
      maxAttendees: 150,
      tags: ["Web3", "Blockchain", "Solidity"],
      image: "⛓️",
    },
    {
      id: 4,
      title: "DevOps Best Practices",
      type: "conference",
      description:
        "One-day conference covering DevOps methodologies, tools, and best practices for modern software development.",
      date: "2024-03-10",
      time: "09:00",
      duration: "8h",
      location: "Le Royal Hotel",
      organizer: "DevOps Lebanon",
      isFree: false,
      price: 50,
      attendees: 85,
      maxAttendees: 100,
      tags: ["DevOps", "CI/CD", "Docker"],
      image: "🚀",
    },
    {
      id: 5,
      title: "Mobile App Development Workshop",
      type: "workshop",
      description:
        "Learn to build cross-platform mobile apps using React Native. From setup to deployment.",
      date: "2024-03-15",
      time: "10:00",
      duration: "6h",
      location: "Beirut Creative Hub",
      organizer: "Mobile Dev Lebanon",
      isFree: true,
      attendees: 35,
      maxAttendees: 40,
      tags: ["React Native", "Mobile", "JavaScript"],
      image: "📱",
    },
    {
      id: 6,
      title: "Data Science & Analytics Summit",
      type: "conference",
      description:
        "Annual summit bringing together data scientists, analysts, and business leaders to discuss the future of data.",
      date: "2024-03-25",
      time: "08:00",
      duration: "1d",
      location: "Phoenicia Hotel",
      organizer: "Data Lebanon",
      isFree: false,
      price: 75,
      attendees: 200,
      maxAttendees: 250,
      tags: ["Data Science", "Analytics", "Python"],
      image: "📊",
    },
  ];

  const filters = [
    { id: "all", label: "All Events" },
    { id: "meetup", label: "Meetups" },
    { id: "workshop", label: "Workshops" },
    { id: "hackathon", label: "Hackathons" },
    { id: "conference", label: "Conferences" },
    { id: "free", label: "Free Events" },
  ];

  const filteredEvents = events.filter((event) => {
    const matchesFilter =
      activeFilter === "all" ||
      (activeFilter === "free" && event.isFree) ||
      event.type === activeFilter;

    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );

    return matchesFilter && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getEventTypeIcon = (type: string) => {
    const icons: { [key: string]: string } = {
      meetup: "👥",
      workshop: "🔧",
      hackathon: "💻",
      conference: "🎤",
      webinar: "📺",
      training: "📚",
    };
    return icons[type] || "📅";
  };

  return (
    <div className="events">
      <Navbar />

      {/* Hero Section */}
      <section className="events-hero">
        <div className="events-hero-content">
          <h1 className="events-hero-title">
            Tech <span className="highlight-lb">Events</span>
          </h1>
          <p className="events-hero-subtitle">
            Discover upcoming tech events, workshops, and meetups in Lebanon's
            vibrant developer community
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="events-section">
        <div className="container">
          {/* Search and Filters */}
          <div className="events-header">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>

            <div className="filters">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  className={`filter-btn ${
                    activeFilter === filter.id ? "active" : ""
                  }`}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Events Grid */}
          <div className="events-grid">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <div key={event.id} className="event-card">
                  <div className="event-header">
                    <div className="event-image">
                      <span className="event-icon">{event.image}</span>
                    </div>
                    <div className="event-type">
                      <span className="type-icon">
                        {getEventTypeIcon(event.type)}
                      </span>
                      <span className="type-label">
                        {event.type.charAt(0).toUpperCase() +
                          event.type.slice(1)}
                      </span>
                    </div>
                  </div>

                  <div className="event-content">
                    <h3 className="event-title">{event.title}</h3>
                    <p className="event-description">{event.description}</p>

                    <div className="event-details">
                      <div className="detail-item">
                        <span className="detail-icon">📅</span>
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-icon">🕒</span>
                        <span>
                          {event.time} ({event.duration})
                        </span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-icon">📍</span>
                        <span>{event.location}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-icon">👤</span>
                        <span>{event.organizer}</span>
                      </div>
                    </div>

                    <div className="event-tags">
                      {event.tags.map((tag, index) => (
                        <span key={index} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="event-footer">
                      <div className="event-stats">
                        <span className="attendees">
                          {event.attendees}/{event.maxAttendees} attendees
                        </span>
                        <span
                          className={`price ${event.isFree ? "free" : "paid"}`}
                        >
                          {event.isFree ? "Free" : `$${event.price}`}
                        </span>
                      </div>
                      <button className="register-btn">
                        {event.attendees >= event.maxAttendees
                          ? "Full"
                          : "Register"}
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-events">
                <div className="no-events-icon">🔍</div>
                <h3>No events found</h3>
                <p>Try adjusting your search or filters to find more events.</p>
              </div>
            )}
          </div>

          {/* Submit Event CTA */}
          <div className="submit-event-cta">
            <div className="cta-content">
              <h2>Have an event to share?</h2>
              <p>
                Submit your tech event, workshop, or meetup to reach Lebanon's
                developer community.
              </p>
              <Link to="/submit-event" className="cta-btn">
                Submit Your Event
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Events;
