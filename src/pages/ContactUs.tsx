import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import "./ContactUs.css";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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
      console.log("Form submitted:", { ...formData, captchaValue });

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      recaptchaRef.current?.reset();
      setCaptchaValue(null);
    } catch (error) {
      setSubmitStatus("error");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "contact@devlooplb.com",
      link: "mailto:contact@devlooplb.com",
    },
    {
      icon: "🌐",
      title: "Website",
      value: "www.devlooplb.com",
      link: "https://www.devlooplb.com",
    },
    {
      icon: "📱",
      title: "Social Media",
      value: "@DevLoopLB",
      link: "https://twitter.com/DevLoopLB",
    },
    {
      icon: "📍",
      title: "Location",
      value: "Lebanon",
      link: null,
    },
  ];

  return (
    <div className="contact-us">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Contact Form Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2 className="section-title">Get in Touch</h2>
              <p className="contact-intro">
                Have questions about our events, want to collaborate, or just
                want to say hello? We'd love to hear from you! Fill out the form
                and we'll get back to you as soon as possible.
              </p>

              <div className="contact-details">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-item">
                    <div className="contact-icon">{info.icon}</div>
                    <div className="contact-text">
                      <h3>{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span>{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="contact-form-container">
              <div className="glass-form">
                <h3 className="form-title">Send us a Message</h3>

                {submitStatus === "success" && (
                  <div className="success-message">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="error-message">
                    Something went wrong. Please try again.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="events">Events & Workshops</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="support">Technical Support</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <div className="captcha-container">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Replace with your actual site key
                      onChange={handleCaptchaChange}
                      theme="dark"
                    />
                  </div>

                  <button
                    type="submit"
                    className="submit-btn"
                    disabled={isSubmitting || !captchaValue}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How can I join DevLoopLB events?</h3>
              <p>
                You can join our events by registering through our website or
                following us on social media for event announcements. Most
                events are free and open to all developers.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do I need to be an experienced developer to attend?</h3>
              <p>
                Not at all! We welcome developers of all skill levels, from
                beginners to experts. Our events are designed to be inclusive
                and educational for everyone.
              </p>
            </div>
            <div className="faq-item">
              <h3>How can I volunteer or contribute?</h3>
              <p>
                We're always looking for volunteers and contributors! You can
                reach out to us through this contact form or join our community
                channels to learn about opportunities.
              </p>
            </div>
            <div className="faq-item">
              <h3>Where are your events held?</h3>
              <p>
                Our events are held across different locations in Lebanon. We
                also host online events to reach developers who can't attend in
                person.
              </p>
            </div>
            <div className="faq-item">
              <h3>How can I become a speaker at events?</h3>
              <p>
                We're always looking for passionate speakers! If you have
                expertise in a particular technology or topic, reach out to us
                with your proposed talk. We'll help you prepare and schedule
                your session.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do you offer sponsorship opportunities?</h3>
              <p>
                Yes! We offer various sponsorship packages for companies looking
                to support the developer community. Contact us to learn about
                our sponsorship options and how your company can get involved.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ContactUs;
