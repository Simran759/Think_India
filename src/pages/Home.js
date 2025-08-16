import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaCalendarAlt, FaLightbulb, FaHandshake, FaTrophy, FaEnvelope } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="home">
      {/* Welcome Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              Welcome to <span className="highlight">Think India</span>
            </h1>
            <p className="hero-subtitle">
              Empowering students to think, innovate, and lead. Building a brighter future for India through education, collaboration, and community service.
            </p>
            <div className="hero-buttons">
              <a href="#about" className="btn btn-primary">Learn More</a>
              <a href="#contact" className="btn btn-secondary">Join Us</a>
            </div>
          </motion.div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">About Us</h2>
            <p className="section-subtitle">
              Think India is a student-driven organization dedicated to fostering leadership, innovation, and social responsibility among young minds.
            </p>
          </motion.div>

          <div className="about-grid">
            <motion.div 
              className="about-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="about-icon">
                <FaLightbulb />
              </div>
              <h3>Motive</h3>
              <p>To inspire and empower students to become proactive leaders who contribute positively to society through innovative thinking and collaborative action.</p>
            </motion.div>

            <motion.div 
              className="about-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="about-icon">
                <FaTrophy />
              </div>
              <h3>Goals</h3>
              <p>Develop leadership skills, promote social awareness, create networking opportunities, and foster a culture of innovation and entrepreneurship among students.</p>
            </motion.div>

            <motion.div 
              className="about-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="about-icon">
                <FaHandshake />
              </div>
              <h3>Vision & Mission</h3>
              <p>To be the leading student organization that shapes future leaders and creates positive social impact through education, collaboration, and community service.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="section events-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Events</h2>
            <p className="section-subtitle">
              Join us in our exciting events and activities that bring together students, professionals, and community leaders.
            </p>
          </motion.div>

          <div className="events-grid">
            <motion.div 
              className="events-card upcoming"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="events-header">
                <FaCalendarAlt className="events-icon" />
                <h3>Upcoming Events</h3>
              </div>
              <div className="events-content">
                <div className="event-item">
                  <h4>Leadership Summit 2024</h4>
                  <p>Date: March 15-17, 2024</p>
                  <p>Location: Main Campus Auditorium</p>
                </div>
                <div className="event-item">
                  <h4>Innovation Workshop</h4>
                  <p>Date: March 25, 2024</p>
                  <p>Location: Innovation Lab</p>
                </div>
                <a href="#contact" className="btn btn-primary">Register Now</a>
              </div>
            </motion.div>

            <motion.div 
              className="events-card past"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="events-header">
                <FaTrophy className="events-icon" />
                <h3>Past Events</h3>
              </div>
              <div className="events-content">
                <div className="event-item">
                  <h4>Tech Fest 2023</h4>
                  <p>Successfully organized with 500+ participants</p>
                  <div className="event-photos">
                    <div className="photo-placeholder"></div>
                    <div className="photo-placeholder"></div>
                  </div>
                </div>
                <div className="event-item">
                  <h4>Community Service Day</h4>
                  <p>Impacted 1000+ lives through various initiatives</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section team-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Team</h2>
            <p className="section-subtitle">
              Meet the dedicated individuals who make Think India a success through their leadership and commitment.
            </p>
          </motion.div>

          <div className="team-grid">
            <motion.div 
              className="team-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3>Core Team</h3>
              <div className="team-members">
                <div className="team-member">
                  <div className="member-photo"></div>
                  <h4>Rahul Sharma</h4>
                  <p>President</p>
                </div>
                <div className="team-member">
                  <div className="member-photo"></div>
                  <h4>Priya Patel</h4>
                  <p>Vice President</p>
                </div>
                <div className="team-member">
                  <div className="member-photo"></div>
                  <h4>Amit Kumar</h4>
                  <p>Secretary</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="team-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>Coordinators</h3>
              <div className="team-members">
                <div className="team-member">
                  <div className="member-photo"></div>
                  <h4>Neha Singh</h4>
                  <p>Events Coordinator</p>
                </div>
                <div className="team-member">
                  <div className="member-photo"></div>
                  <h4>Vikram Mehta</h4>
                  <p>Technical Coordinator</p>
                </div>
                <div className="team-member">
                  <div className="member-photo"></div>
                  <h4>Anjali Desai</h4>
                  <p>Outreach Coordinator</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="team-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3>Volunteers</h3>
              <div className="team-members">
                <div className="team-member">
                  <div className="member-photo"></div>
                  <h4>Arjun Reddy</h4>
                  <p>Volunteer</p>
                </div>
                <div className="team-member">
                  <div className="member-photo"></div>
                  <h4>Zara Khan</h4>
                  <p>Volunteer</p>
                </div>
                <div className="team-member">
                  <div className="member-photo"></div>
                  <h4>Rohan Gupta</h4>
                  <p>Volunteer</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="section work-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Work</h2>
            <p className="section-subtitle">
              Discover the impact we've made through our various initiatives and collaborations.
            </p>
          </motion.div>

          <div className="work-grid">
            <motion.div 
              className="work-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3>Detailed Overview of Activities</h3>
              <ul>
                <li>Leadership Development Programs</li>
                <li>Technical Workshops & Hackathons</li>
                <li>Community Service Initiatives</li>
                <li>Industry Connect Programs</li>
                <li>Cultural & Social Events</li>
              </ul>
            </motion.div>

            <motion.div 
              className="work-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>Collaborations</h3>
              <ul>
                <li>Industry Partners: Tech Giants & Startups</li>
                <li>Educational Institutions</li>
                <li>Government Organizations</li>
                <li>NGOs & Social Enterprises</li>
                <li>International Student Organizations</li>
              </ul>
            </motion.div>

            <motion.div 
              className="work-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3>Impact & Achievements</h3>
              <ul>
                <li>5000+ Students Impacted</li>
                <li>50+ Successful Events Organized</li>
                <li>100+ Industry Connections</li>
                <li>25+ Awards & Recognitions</li>
                <li>10+ Community Projects Completed</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Contact Us</h2>
            <p className="section-subtitle">
              Get in touch with us to learn more about Think India and how you can get involved.
            </p>
          </motion.div>

          <div className="contact-grid">
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <p>info@thinkindia.org</p>
                  <p>contact@thinkindia.org</p>
                </div>
              </div>
              <div className="contact-item">
                <FaUsers className="contact-icon" />
                <div>
                  <h4>Phone</h4>
                  <p>+91 98765 43210</p>
                  <p>+91 87654 32109</p>
                </div>
              </div>
              <div className="contact-item">
                <FaHandshake className="contact-icon" />
                <div>
                  <h4>Social Media</h4>
                  <div className="social-links">
                    <a href="#" className="social-link">LinkedIn</a>
                    <a href="#" className="social-link">Twitter</a>
                    <a href="#" className="social-link">Instagram</a>
                    <a href="#" className="social-link">Facebook</a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="contact-map"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="map-placeholder">
                <h4>Google Map</h4>
                <p>Interactive map showing our location</p>
                <div className="map-content">
                  <div className="map-marker"></div>
                  <p>Think India Headquarters</p>
                  <p>Main Campus, University Area</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 