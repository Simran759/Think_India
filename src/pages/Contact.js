import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="contact-hero-content"
          >
            <h1>Contact Us</h1>
            <p>Get in touch with us to learn more about Think India and how you can get involved.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="section contact-info-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">We'd love to hear from you. Reach out to us through any of these channels.</p>
          </motion.div>

          <div className="contact-info-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="contact-info-card"
            >
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <h3>Email Us</h3>
              <p>info@thinkindia.org</p>
              <p>contact@thinkindia.org</p>
              <p>We typically respond within 24 hours</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="contact-info-card"
            >
              <div className="contact-icon">
                <FaPhone />
              </div>
              <h3>Call Us</h3>
              <p>+91 98765 43210</p>
              <p>+91 87654 32109</p>
              <p>Monday - Friday, 9:00 AM - 6:00 PM</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="contact-info-card"
            >
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <h3>Visit Us</h3>
              <p>Think India Headquarters</p>
              <p>Main Campus, University Area</p>
              <p>City, State - PIN Code</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="contact-info-card"
            >
              <div className="contact-icon">
                <FaClock />
              </div>
              <h3>Office Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section contact-form-section">
        <div className="container">
          <div className="contact-form-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="contact-form"
            >
              <h2>Send Us a Message</h2>
              <p>Have a question or want to get involved? Fill out the form below and we'll get back to you as soon as possible.</p>
              
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
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
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Enter subject"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="contact-map"
            >
              <h2>Find Us</h2>
              <p>Visit our headquarters or connect with us on social media.</p>
              
              <div className="map-container">
                <div className="map-placeholder">
                  <div className="map-content">
                    <div className="map-marker"></div>
                    <h4>Think India Headquarters</h4>
                    <p>Main Campus, University Area</p>
                    <p>City, State - PIN Code</p>
                    <p>India</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="#" className="social-icon" aria-label="Facebook">
                    <FaFacebook />
                  </a>
                  <a href="#" className="social-icon" aria-label="Twitter">
                    <FaTwitter />
                  </a>
                  <a href="#" className="social-icon" aria-label="Instagram">
                    <FaInstagram />
                  </a>
                  <a href="#" className="social-icon" aria-label="LinkedIn">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Find answers to common questions about Think India</p>
          </motion.div>

          <div className="faq-grid">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="faq-item"
            >
              <h3>How can I join Think India?</h3>
              <p>You can join Think India by filling out our membership form, attending our events, or contacting us directly. We welcome students from all backgrounds who are passionate about leadership and community service.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="faq-item"
            >
              <h3>What types of events do you organize?</h3>
              <p>We organize a wide variety of events including leadership summits, technical workshops, hackathons, community service activities, cultural events, and networking sessions.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="faq-item"
            >
              <h3>Do you offer internship opportunities?</h3>
              <p>Yes, we offer internship opportunities for students interested in gaining hands-on experience in event management, community service, and organizational leadership.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="faq-item"
            >
              <h3>How can organizations partner with Think India?</h3>
              <p>Organizations can partner with us by reaching out through our contact form or email. We collaborate with educational institutions, companies, and NGOs on various initiatives.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 