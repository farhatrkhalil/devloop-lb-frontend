import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import "./Academies.css";

const Academies: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Mock academies data
  const academies = [
    {
      id: 1,
      name: "Beirut Coding Academy",
      type: "bootcamp",
      description:
        "Intensive 12-week full-stack development bootcamp covering modern web technologies and best practices.",
      duration: "12 weeks",
      price: 2500,
      location: "Beirut",
      startDate: "2024-03-01",
      seats: 20,
      enrolled: 15,
      level: "beginner",
      technologies: ["JavaScript", "React", "Node.js", "MongoDB"],
      image: "💻",
      features: [
        "Project-based learning",
        "Career support",
        "Industry mentors",
        "Job placement assistance",
      ],
    },
    {
      id: 2,
      name: "AI & Machine Learning Institute",
      type: "certification",
      description:
        "Comprehensive certification program in artificial intelligence and machine learning with hands-on projects.",
      duration: "6 months",
      price: 1800,
      location: "Online",
      startDate: "2024-02-15",
      seats: 30,
      enrolled: 25,
      level: "intermediate",
      technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"],
      image: "🤖",
      features: [
        "Live online sessions",
        "Real-world projects",
        "Expert instructors",
        "Certificate upon completion",
      ],
    },
    {
      id: 3,
      name: "Mobile App Development School",
      type: "course",
      description:
        "Learn to build cross-platform mobile applications using React Native and Flutter.",
      duration: "8 weeks",
      price: 1200,
      location: "Beirut",
      startDate: "2024-03-10",
      seats: 15,
      enrolled: 12,
      level: "beginner",
      technologies: ["React Native", "Flutter", "JavaScript", "Dart"],
      image: "📱",
      features: [
        "Hands-on workshops",
        "App store deployment",
        "UI/UX principles",
        "Performance optimization",
      ],
    },
    {
      id: 4,
      name: "DevOps Engineering Program",
      type: "bootcamp",
      description:
        "Master DevOps practices, tools, and methodologies for modern software development.",
      duration: "10 weeks",
      price: 2200,
      location: "Beirut",
      startDate: "2024-04-01",
      seats: 18,
      enrolled: 10,
      level: "intermediate",
      technologies: ["Docker", "Kubernetes", "AWS", "Jenkins"],
      image: "🚀",
      features: [
        "Cloud infrastructure",
        "CI/CD pipelines",
        "Monitoring tools",
        "Security practices",
      ],
    },
    {
      id: 5,
      name: "Data Science Academy",
      type: "certification",
      description:
        "Comprehensive data science program covering statistics, analysis, and visualization techniques.",
      duration: "4 months",
      price: 1600,
      location: "Online",
      startDate: "2024-03-20",
      seats: 25,
      enrolled: 20,
      level: "beginner",
      technologies: ["Python", "R", "SQL", "Tableau"],
      image: "📊",
      features: [
        "Statistical analysis",
        "Data visualization",
        "Machine learning basics",
        "Portfolio building",
      ],
    },
    {
      id: 6,
      name: "Cybersecurity Training Center",
      type: "course",
      description:
        "Learn ethical hacking, network security, and cybersecurity best practices.",
      duration: "6 weeks",
      price: 1400,
      location: "Beirut",
      startDate: "2024-04-15",
      seats: 12,
      enrolled: 8,
      level: "intermediate",
      technologies: ["Linux", "Wireshark", "Metasploit", "Python"],
      image: "🔒",
      features: [
        "Ethical hacking labs",
        "Network analysis",
        "Security tools",
        "Certification prep",
      ],
    },
  ];

  const filters = [
    { id: "all", label: "All Programs" },
    { id: "bootcamp", label: "Bootcamps" },
    { id: "certification", label: "Certifications" },
    { id: "course", label: "Courses" },
    { id: "beginner", label: "Beginner" },
    { id: "intermediate", label: "Intermediate" },
  ];

  const filteredAcademies = academies.filter((academy) => {
    const matchesFilter =
      activeFilter === "all" ||
      academy.type === activeFilter ||
      academy.level === activeFilter;

    const matchesSearch =
      academy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      academy.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      academy.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      );

    return matchesFilter && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getLevelColor = (level: string) => {
    return level === "beginner" ? "#4ade80" : "#fbbf24";
  };

  return (
    <div className="academies">
      <Navbar />

      {/* Hero Section */}
      <section className="academies-hero">
        <div className="academies-hero-content">
          <h1 className="academies-hero-title">
            Tech <span className="highlight-lb">Academies</span>
          </h1>
          <p className="academies-hero-subtitle">
            Discover comprehensive training programs, bootcamps, and
            certifications to advance your tech career in Lebanon
          </p>
        </div>
      </section>

      {/* Academies Section */}
      <section className="academies-section">
        <div className="container">
          {/* Search and Filters */}
          <div className="academies-header">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search programs..."
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

          {/* Academies Grid */}
          <div className="academies-grid">
            {filteredAcademies.length > 0 ? (
              filteredAcademies.map((academy) => (
                <div key={academy.id} className="academy-card">
                  <div className="academy-header">
                    <div className="academy-image">
                      <span className="academy-icon">{academy.image}</span>
                    </div>
                    <div className="academy-badge">
                      <span
                        className="level-badge"
                        style={{
                          backgroundColor: getLevelColor(academy.level),
                        }}
                      >
                        {academy.level.charAt(0).toUpperCase() +
                          academy.level.slice(1)}
                      </span>
                    </div>
                  </div>

                  <div className="academy-content">
                    <h3 className="academy-title">{academy.name}</h3>
                    <p className="academy-description">{academy.description}</p>

                    <div className="academy-details">
                      <div className="detail-item">
                        <span className="detail-icon">⏱️</span>
                        <span>{academy.duration}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-icon">💰</span>
                        <span>${academy.price}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-icon">📍</span>
                        <span>{academy.location}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-icon">📅</span>
                        <span>Starts {formatDate(academy.startDate)}</span>
                      </div>
                    </div>

                    <div className="academy-technologies">
                      <h4>Technologies Covered:</h4>
                      <div className="tech-tags">
                        {academy.technologies.map((tech, index) => (
                          <span key={index} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="academy-features">
                      <h4>Program Features:</h4>
                      <ul className="features-list">
                        {academy.features.map((feature, index) => (
                          <li key={index} className="feature-item">
                            <span className="feature-icon">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="academy-footer">
                      <div className="academy-stats">
                        <span className="enrollment">
                          {academy.enrolled}/{academy.seats} enrolled
                        </span>
                        <span className="type-badge">
                          {academy.type.charAt(0).toUpperCase() +
                            academy.type.slice(1)}
                        </span>
                      </div>
                      <button className="enroll-btn">
                        {academy.enrolled >= academy.seats
                          ? "Full"
                          : "Enroll Now"}
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-academies">
                <div className="no-academies-icon">🔍</div>
                <h3>No programs found</h3>
                <p>
                  Try adjusting your search or filters to find more programs.
                </p>
              </div>
            )}
          </div>

          {/* Submit Academy CTA */}
          <div className="submit-academy-cta">
            <div className="cta-content">
              <h2>Are you an educational institution?</h2>
              <p>
                List your tech programs, bootcamps, and certifications to reach
                Lebanon's developer community.
              </p>
              <Link to="/contact" className="cta-btn">
                Contact Us to List Your Program
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

export default Academies;
