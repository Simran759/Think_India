import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaTrophy, FaHandshake, FaUsers, FaChartLine, FaHeart } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="about-hero-content"
          >
            <h1>About Think India</h1>
            <p>Empowering the next generation of leaders through innovation, collaboration, and social responsibility.</p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section mission-vision">
        <div className="container">
          <div className="mission-vision-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mission-card"
            >
              <div className="card-icon">
                <FaLightbulb />
              </div>
              <h2>Our Mission</h2>
              <p>To inspire and empower students to become proactive leaders who contribute positively to society through innovative thinking and collaborative action. We strive to create a platform where young minds can develop their potential, connect with like-minded individuals, and make a meaningful impact on their communities.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="vision-card"
            >
              <div className="card-icon">
                <FaTrophy />
              </div>
              <h2>Our Vision</h2>
              <p>To be the leading student organization that shapes future leaders and creates positive social impact through education, collaboration, and community service. We envision a world where every student has the opportunity to develop their leadership potential and contribute to building a better society.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section core-values">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">The principles that guide everything we do at Think India</p>
          </motion.div>

          <div className="values-grid">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="value-card"
            >
              <div className="value-icon">
                <FaUsers />
              </div>
              <h3>Leadership</h3>
              <p>We believe in developing strong, ethical leaders who can inspire and guide others towards positive change.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="value-card"
            >
              <div className="value-icon">
                <FaLightbulb />
              </div>
              <h3>Innovation</h3>
              <p>We encourage creative thinking and innovative solutions to address complex challenges in our society.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="value-card"
            >
              <div className="value-icon">
                <FaHandshake />
              </div>
              <h3>Collaboration</h3>
              <p>We foster partnerships and teamwork, believing that collective effort leads to greater impact and success.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="value-card"
            >
              <div className="value-icon">
                <FaHeart />
              </div>
              <h3>Social Responsibility</h3>
              <p>We are committed to making a positive difference in our communities through service and ethical practices.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="value-card"
            >
              <div className="value-icon">
                <FaChartLine />
              </div>
              <h3>Excellence</h3>
              <p>We strive for excellence in everything we do, maintaining high standards and continuous improvement.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="value-card"
            >
              <div className="value-icon">
                <FaTrophy />
              </div>
              <h3>Integrity</h3>
              <p>We conduct ourselves with honesty, transparency, and ethical behavior in all our interactions and activities.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="section goals-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Goals</h2>
            <p className="section-subtitle">What we aim to achieve through our initiatives and programs</p>
          </motion.div>

          <div className="goals-grid">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="goal-item"
            >
              <div className="goal-number">01</div>
              <h3>Leadership Development</h3>
              <p>Develop leadership skills and qualities in students through workshops, training programs, and hands-on experiences.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="goal-item"
            >
              <div className="goal-number">02</div>
              <h3>Social Awareness</h3>
              <p>Promote social awareness and responsibility through community service projects and educational initiatives.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="goal-item"
            >
              <div className="goal-number">03</div>
              <h3>Networking Opportunities</h3>
              <p>Create networking opportunities with industry professionals, alumni, and other student organizations.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="goal-item"
            >
              <div className="goal-number">04</div>
              <h3>Innovation & Entrepreneurship</h3>
              <p>Foster a culture of innovation and entrepreneurship through hackathons, startup competitions, and mentorship programs.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="goal-item"
            >
              <div className="goal-number">05</div>
              <h3>Cultural Exchange</h3>
              <p>Promote cultural exchange and diversity through events, workshops, and collaborative projects with international organizations.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="goal-item"
            >
              <div className="goal-number">06</div>
              <h3>Skill Enhancement</h3>
              <p>Enhance technical and soft skills through workshops, training sessions, and practical learning experiences.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="section history-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle">The story of how Think India has grown and evolved over the years</p>
          </motion.div>

          <div className="timeline">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="timeline-item"
            >
              <div className="timeline-content">
                <div className="timeline-year">2020</div>
                <h3>Foundation</h3>
                <p>Think India was founded with a vision to empower students and create positive social impact through leadership development.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="timeline-item"
            >
              <div className="timeline-content">
                <div className="timeline-year">2021</div>
                <h3>First Major Event</h3>
                <p>Successfully organized our first leadership summit with 200+ participants, marking the beginning of our impactful journey.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="timeline-item"
            >
              <div className="timeline-content">
                <div className="timeline-year">2022</div>
                <h3>Expansion</h3>
                <p>Expanded to multiple campuses and established partnerships with industry leaders and educational institutions.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="timeline-item"
            >
              <div className="timeline-content">
                <div className="timeline-year">2023</div>
                <h3>Recognition</h3>
                <p>Received multiple awards and recognitions for our contributions to student development and community service.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="timeline-item"
            >
              <div className="timeline-content">
                <div className="timeline-year">2024</div>
                <h3>Future Forward</h3>
                <p>Continuing to innovate and expand our reach, with plans for international collaborations and digital transformation.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 