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