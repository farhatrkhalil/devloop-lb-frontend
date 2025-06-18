import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import "./AboutUs.css";

const AboutUs: React.FC = () => {
  return (
    <div className="about-us">
      <Navbar />

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-hero-title">
            About <span className="highlight-lb">DevLoopLB</span>
          </h1>
          <p className="about-hero-subtitle">
            Connecting Lebanon's developer community through events, workshops,
            and learning resources
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <h2 className="section-title">Our Mission</h2>
            <p className="mission-text">
              DevLoopLB is dedicated to fostering a vibrant tech community in
              Lebanon by connecting developers, students, and tech enthusiasts
              through curated events, workshops, and learning resources. We
              believe in the power of collaboration and knowledge sharing to
              drive innovation and growth in Lebanon's technology sector
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Community First</h3>
              <p>
                Building strong connections within Lebanon's developer ecosystem
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">📚</div>
              <h3>Continuous Learning</h3>
              <p>Promoting knowledge sharing and skill development</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🚀</div>
              <h3>Innovation</h3>
              <p>Encouraging creative thinking and technological advancement</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌍</div>
              <h3>Inclusivity</h3>
              <p>Welcoming developers of all backgrounds and skill levels</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="what-we-do-section">
        <div className="container">
          <h2 className="section-title">What We Do</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Tech Meetups</h3>
              <p>
                Organizing regular meetups across Lebanon to bring developers
                together for networking and knowledge sharing.
              </p>
            </div>
            <div className="service-card">
              <h3>Workshops & Training</h3>
              <p>
                Hosting hands-on workshops and training sessions on the latest
                technologies and best practices.
              </p>
            </div>
            <div className="service-card">
              <h3>Hackathons</h3>
              <p>
                Facilitating hackathons and coding challenges to encourage
                innovation and collaboration.
              </p>
            </div>
            <div className="service-card">
              <h3>Resource Hub</h3>
              <p>
                Curating and sharing valuable learning resources, tutorials, and
                industry insights.
              </p>
            </div>
            <div className="service-card">
              <h3>Mentorship Programs</h3>
              <p>
                Connecting experienced developers with newcomers through
                structured mentorship programs and career guidance.
              </p>
            </div>
            <div className="service-card">
              <h3>Industry Partnerships</h3>
              <p>
                Building bridges between the developer community and tech
                companies to create job opportunities and industry connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Our Team</h2>
          <p className="team-intro">
            DevLoopLB is run by passionate developers and community organizers
            who are committed to growing Lebanon's tech ecosystem
          </p>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">
                <div className="avatar-placeholder">👨‍💻</div>
              </div>
              <h3>Community Lead</h3>
              <p>Leading our community initiatives and event organization</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <div className="avatar-placeholder">👩‍💻</div>
              </div>
              <h3>Content Curator</h3>
              <p>Curating valuable resources and educational content</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <div className="avatar-placeholder">👨‍🔧</div>
              </div>
              <h3>Technical Lead</h3>
              <p>Overseeing technical workshops and hackathons</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="join-us-section">
        <div className="container">
          <div className="join-us-content">
            <h2 className="section-title">Join Our Community</h2>
            <p className="join-us-text">
              Ready to be part of Lebanon's fastest-growing developer community?
              Join us for events, workshops, and connect with fellow developers
            </p>
            <div className="join-us-buttons">
              <Link to="/contact" className="btn btn-primary">
                Get in Touch
              </Link>
              <Link to="/events" className="btn btn-secondary">
                View Events
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

export default AboutUs;
