import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>Think India</h3>
              <p>Empowering students to think, innovate, and lead.</p>
            </div>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/team">Our Team</Link></li>
              <li><Link to="/work">Our Work</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <FaEnvelope />
                <span>info@thinkindia.org</span>
              </div>
              <div className="contact-item">
                <FaPhone />
                <span>+91 98765 43210</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Stay updated with our latest events and activities.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Think India. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 