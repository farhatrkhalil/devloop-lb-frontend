import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import "./SubmitEvent.css";

const SubmitEvent: React.FC = () => {
  const [formData, setFormData] = useState({
    eventTitle: "",
    eventType: "",
    description: "",
    date: "",
    time: "",
    duration: "",
    location: "",
    organizerName: "",
    organizerEmail: "",
    organizerPhone: "",
    maxAttendees: "",
    isFree: "yes",
    ticketPrice: "",
    eventLink: "",
    tags: "",
    requirements: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please complete the reCAPTCHA verification");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate form submission - replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Here you would typically send the form data to your backend
      console.log("Event submitted:", { ...formData, captchaValue });

      setSubmitStatus("success");
      setFormData({
        eventTitle: "",
        eventType: "",
        description: "",
        date: "",
        time: "",
        duration: "",
        location: "",
        organizerName: "",
        organizerEmail: "",
        organizerPhone: "",
        maxAttendees: "",
        isFree: "yes",
        ticketPrice: "",
        eventLink: "",
        tags: "",
        requirements: "",
      });
      recaptchaRef.current?.reset();
      setCaptchaValue(null);
    } catch (error) {
      setSubmitStatus("error");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="submit-event">
      <Navbar />

      {/* Hero Section */}
      <section className="submit-hero">
        <div className="submit-hero-content">
          <h1 className="submit-hero-title">
            Submit Your <span className="highlight-lb">Event</span>
          </h1>
          <p className="submit-hero-subtitle">
            Share your tech event, workshop, or meetup with Lebanon's developer
            community
          </p>
        </div>
      </section>

      {/* Submit Event Form Section */}
      <section className="submit-section">
        <div className="container">
          <div className="submit-content">
            <div className="submit-info">
              <h2 className="section-title">Event Submission Guidelines</h2>
              <div className="guidelines">
                <div className="guideline-item">
                  <div className="guideline-icon">📋</div>
                  <div className="guideline-text">
                    <h3>Complete Information</h3>
                    <p>
                      Provide detailed information about your event to help
                      attendees understand what to expect.
                    </p>
                  </div>
                </div>
                <div className="guideline-item">
                  <div className="guideline-icon">🎯</div>
                  <div className="guideline-text">
                    <h3>Relevant Content</h3>
                    <p>
                      Events should be related to technology, development, or
                      the tech community in Lebanon.
                    </p>
                  </div>
                </div>
                <div className="guideline-item">
                  <div className="guideline-icon">⏰</div>
                  <div className="guideline-text">
                    <h3>Timely Submission</h3>
                    <p>
                      Submit your event at least 1 week in advance to allow for
                      review and promotion.
                    </p>
                  </div>
                </div>
                <div className="guideline-item">
                  <div className="guideline-icon">✅</div>
                  <div className="guideline-text">
                    <h3>Quality Standards</h3>
                    <p>
                      We review all submissions to ensure they meet our
                      community standards and guidelines.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="submit-form-container">
              <div className="glass-form">
                <h3 className="form-title">Event Details</h3>

                {submitStatus === "success" && (
                  <div className="success-message">
                    Thank you for submitting your event! We'll review it and get
                    back to you within 48 hours.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="error-message">
                    Something went wrong. Please try again.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="submit-form">
                  {/* Event Information */}
                  <div className="form-section">
                    <h4 className="section-heading">Event Information</h4>

                    <div className="form-group">
                      <label htmlFor="eventTitle">Event Title *</label>
                      <input
                        type="text"
                        id="eventTitle"
                        name="eventTitle"
                        value={formData.eventTitle}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter event title"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="eventType">Event Type *</label>
                      <select
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select event type</option>
                        <option value="meetup">Tech Meetup</option>
                        <option value="workshop">Workshop</option>
                        <option value="hackathon">Hackathon</option>
                        <option value="conference">Conference</option>
                        <option value="webinar">Webinar</option>
                        <option value="training">Training Session</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="description">Event Description *</label>
                      <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        placeholder="Describe your event, what attendees will learn, and what to expect..."
                      />
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="date">Event Date *</label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="time">Event Time *</label>
                        <input
                          type="time"
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="duration">Duration *</label>
                        <select
                          id="duration"
                          name="duration"
                          value={formData.duration}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select duration</option>
                          <option value="1h">1 hour</option>
                          <option value="2h">2 hours</option>
                          <option value="3h">3 hours</option>
                          <option value="4h">4 hours</option>
                          <option value="6h">6 hours</option>
                          <option value="8h">8 hours</option>
                          <option value="1d">1 day</option>
                          <option value="2d">2 days</option>
                          <option value="3d">3 days</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="maxAttendees">Max Attendees</label>
                        <input
                          type="number"
                          id="maxAttendees"
                          name="maxAttendees"
                          value={formData.maxAttendees}
                          onChange={handleInputChange}
                          placeholder="Leave empty for unlimited"
                          min="1"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="location">Location *</label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        required
                        placeholder="Event venue or online platform"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="eventLink">Event Link</label>
                      <input
                        type="url"
                        id="eventLink"
                        name="eventLink"
                        value={formData.eventLink}
                        onChange={handleInputChange}
                        placeholder="Registration or event page URL"
                      />
                    </div>
                  </div>

                  {/* Pricing Information */}
                  <div className="form-section">
                    <h4 className="section-heading">Pricing Information</h4>

                    <div className="form-group">
                      <label htmlFor="isFree">Is this a free event? *</label>
                      <select
                        id="isFree"
                        name="isFree"
                        value={formData.isFree}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="yes">Yes, it's free</option>
                        <option value="no">No, it's paid</option>
                      </select>
                    </div>

                    {formData.isFree === "no" && (
                      <div className="form-group">
                        <label htmlFor="ticketPrice">
                          Ticket Price (USD) *
                        </label>
                        <input
                          type="number"
                          id="ticketPrice"
                          name="ticketPrice"
                          value={formData.ticketPrice}
                          onChange={handleInputChange}
                          placeholder="Enter ticket price"
                          min="0"
                          step="0.01"
                        />
                      </div>
                    )}
                  </div>

                  {/* Organizer Information */}
                  <div className="form-section">
                    <h4 className="section-heading">Organizer Information</h4>

                    <div className="form-group">
                      <label htmlFor="organizerName">Organizer Name *</label>
                      <input
                        type="text"
                        id="organizerName"
                        name="organizerName"
                        value={formData.organizerName}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="organizerEmail">Email Address *</label>
                        <input
                          type="email"
                          id="organizerEmail"
                          name="organizerEmail"
                          value={formData.organizerEmail}
                          onChange={handleInputChange}
                          required
                          placeholder="Your email address"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="organizerPhone">Phone Number</label>
                        <input
                          type="tel"
                          id="organizerPhone"
                          name="organizerPhone"
                          value={formData.organizerPhone}
                          onChange={handleInputChange}
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="form-section">
                    <h4 className="section-heading">Additional Information</h4>

                    <div className="form-group">
                      <label htmlFor="tags">Tags/Keywords</label>
                      <input
                        type="text"
                        id="tags"
                        name="tags"
                        value={formData.tags}
                        onChange={handleInputChange}
                        placeholder="e.g., React, JavaScript, AI, Web Development"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="requirements">
                        Prerequisites/Requirements
                      </label>
                      <textarea
                        id="requirements"
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleInputChange}
                        rows={3}
                        placeholder="Any prerequisites, required skills, or materials attendees should bring..."
                      />
                    </div>
                  </div>

                  <div className="captcha-container">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                      onChange={handleCaptchaChange}
                      theme="dark"
                    />
                  </div>

                  <button
                    type="submit"
                    className="submit-btn"
                    disabled={isSubmitting || !captchaValue}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Event"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default SubmitEvent;
