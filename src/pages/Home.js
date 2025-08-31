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
  <div className="home"  style={{ background: 'linear-gradient(135deg, #0a0a1f 60%, #232a36 100%)', color: '#fff', minHeight: '100vh' }}>
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
              Think India MNIT Jaipur
            </h1>
            <p className="hero-subtitle">
              Empowering students to think, innovate, and lead. Building a brighter future for India through education, collaboration, and community service.
            </p>
            <div className="hero-buttons">
              <a href="/youthfest" className="btn btn-highlight">🎉 Explore YouthFest</a>
            </div>
          </motion.div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* About MNIT Jaipur Section */}
      <section id="about-mnit" className="section about-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">About MNIT Jaipur</h2>
            <div className="about-grid">
              <div className="about-card">
                <div className="about-icon" style={{background: 'linear-gradient(135deg, #3f51b5, #2196f3)'}}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7v2c0 5.25 3.75 10.74 10 13 6.25-2.26 10-7.75 10-13V7l-10-5z" fill="#fff"/>
                  </svg>
                </div>
                <h3>Malaviya National Institute of Technology (MNIT) Jaipur</h3>
                <p>MNIT Jaipur is one of India's premier engineering institutions, known for its academic excellence, vibrant campus life, and commitment to innovation and research. MNIT provides a nurturing environment for students to grow, collaborate, and lead in various fields.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Think India Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">About Think India</h2>
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

          {/* Centered Timeline Layout: Upcoming left, Previous right */}
          <div className="timeline-flex-fix" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginTop: 40, position: 'relative', minHeight: 400 }}>
            {/* Upcoming Events (Left) */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 32 }}>
              <div style={{ fontWeight: 700, fontSize: '1.2rem', color: '#1976d2', marginBottom: 16, alignSelf: 'flex-end' }}>Upcoming Events</div>
              {/* Leadership Summit 2024 */}
              <motion.div className="timeline-event" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }} viewport={{ once: true }} style={{ width: 300, background: '#f7faff', borderRadius: 18, boxShadow: '0 2px 12px rgba(0,0,0,0.07)', padding: 20, marginBottom: 0, position: 'relative' }}>
                <div style={{ color: '#1976d2', fontWeight: 700, fontSize: '1.1rem', marginBottom: 6 }}>Leadership Summit 2024</div>
                <div style={{ color: '#444', fontSize: '0.98rem', marginBottom: 4 }}>15-17 March 2024, Main Campus Auditorium</div>
                <div style={{ color: '#555', fontSize: '0.97rem', marginBottom: 8 }}>A three-day summit for leadership development, workshops, and networking.</div>
                <a href="#contact" className="btn btn-primary" style={{ width: '100%' }}>Register Now</a>
              </motion.div>
              {/* Innovation Workshop */}
              <motion.div className="timeline-event" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true }} style={{ width: 300, background: '#f7faff', borderRadius: 18, boxShadow: '0 2px 12px rgba(0,0,0,0.07)', padding: 20, marginBottom: 0, position: 'relative' }}>
                <div style={{ color: '#1976d2', fontWeight: 700, fontSize: '1.1rem', marginBottom: 6 }}>Innovation Workshop</div>
                <div style={{ color: '#444', fontSize: '0.98rem', marginBottom: 4 }}>25 March 2024, Innovation Lab</div>
                <div style={{ color: '#555', fontSize: '0.97rem', marginBottom: 8 }}>Hands-on workshop on design thinking and innovation for real-world problems.</div>
                <a href="#contact" className="btn btn-primary" style={{ width: '100%' }}>Register Now</a>
              </motion.div>
            </div>
            {/* Center Line */}
            <div className="timeline-center-line" style={{ width: 4, background: '#1976d2', height: '100%', minHeight: 340, margin: '0 32px', borderRadius: 2 }}></div>
            {/* Previous Events (Right) */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 32 }}>
              <div style={{ fontWeight: 700, fontSize: '1.2rem', color: '#fbc02d', marginBottom: 16, alignSelf: 'flex-start' }}>Past Events</div>
              {/* Ganesh Chaturthi 2025 */}
              <motion.div className="timeline-event" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }} viewport={{ once: true }} style={{ width: 300, background: '#fff', borderRadius: 18, boxShadow: '0 2px 12px rgba(0,0,0,0.07)', padding: 20, marginBottom: 0, position: 'relative' }}>
                <div style={{ color: '#fbc02d', fontWeight: 700, fontSize: '1.1rem', marginBottom: 6 }}>Ganesh Chaturthi 2025</div>
                <div style={{ color: '#444', fontSize: '0.98rem', marginBottom: 4 }}>26-27 August 2025, OAT, MNIT Jaipur</div>
                <img src="/events/Ganesh_Chaturthi.JPG" alt="Ganesh Chaturthi 2025" style={{ width: '100%', maxHeight: '120px', objectFit: 'cover', borderRadius: 8, margin: '10px 0' }} />
                <div style={{ color: '#555', fontSize: '0.97rem' }}>Students celebrated Ganesh Chaturthi with rituals, music, and cultural performances, fostering unity and devotion on campus.</div>
              </motion.div>
              {/* Youthfest 2023 */}
              <motion.div className="timeline-event" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.4 }} viewport={{ once: true }} style={{ width: 300, background: '#fff', borderRadius: 18, boxShadow: '0 2px 12px rgba(0,0,0,0.07)', padding: 20, marginBottom: 0, position: 'relative' }}>
                <div style={{ color: '#fbc02d', fontWeight: 700, fontSize: '1.1rem', marginBottom: 6 }}>Youthfest 2023</div>
                <div style={{ color: '#444', fontSize: '0.98rem', marginBottom: 4 }}>12-15 January 2023, MNIT Jaipur</div>
                <img src="/events/youthfest.png" alt="Youthfest 2023" style={{ width: '100%', maxHeight: '120px', objectFit: 'cover', borderRadius: 8, margin: '10px 0' }} />
                <div style={{ color: '#555', fontSize: '0.97rem', marginBottom: '10px' }}>Youthfest 2023 at MNIT Jaipur was a four-day festival featuring Lohri Night, Makar Sankranti, Vivekananda Jayanti, and traditional childhood games. The event brought students together for cultural celebrations, inspiring talks, and fun activities, creating lasting memories and fostering unity on campus.</div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <a href="/youthfest" className="btn btn-primary" style={{ marginTop: '6px' }}>See More Youthfest Highlights</a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section
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
      </section> */}

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

      {/* Contact Section
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
      </section> */}
    </div>
  );
};

export default Home; 