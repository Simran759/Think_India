import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaTrophy, FaHandshake, FaUsers, FaChartLine, FaHeart } from 'react-icons/fa';
import './About.css';

const About = () => {
   const slideshowImages = [
      '/photos/iit_kanpur_workshop.png',
      // '/photos/roorkee.jpg',
      '/photos/convention.jpg',
    ];
    const [slideIndex, setSlideIndex] = React.useState(0);
    React.useEffect(() => {
      const interval = setInterval(() => {
        setSlideIndex((prev) => (prev + 1) % slideshowImages.length);
      }, 2500);
      return () => clearInterval(interval);
    }, [slideshowImages.length]);
  return (
  <div className="about-page" style={{ backgroundColor: '#0a0a1f', color: '#fff', minHeight: '100vh' }}>

      {/* Hero Section */}
  <section style={{ position: "relative", width: "100%", height: "730px", overflow: "hidden" }}>
    {/* Slide background */}
    <motion.div
      key={slideIndex} // important for fade animation
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `url(${slideshowImages[slideIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "brightness(0.8)",
      }}
    />
  
    {/* Overlay */}
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(180deg, rgba(0,0,0,0.4), rgba(0,0,0,0.8))",
        zIndex: 1,
      }}
    />
    {/* Hero Text */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          zIndex: 2,
          color: "#fff",
          padding: "0 20px",
          maxWidth: 700,
        }}
      >
          <motion.h4
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: window.innerWidth <= 500 ? "2.2rem" : "3.2rem",
              fontWeight: 600,
              marginBottom: 8,
              whiteSpace: "nowrap",
              // lineHeight: 1.1,
            }}
          >
            About Think India
          </motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ fontSize: "1.2rem", color: "#d0d0d0", fontWeight: 500 }}
        >
          Empowering the next generation of leaders through innovation, collaboration, and social responsibility.
        </motion.h2>
      </div>
    
      {/* Dots */}
      <div
        style={{
          position: "absolute",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          display: "inline-block",
          gap: 12,
          zIndex: 2,
        }}
      >
        {slideshowImages.map((_, idx) => (
          <span
            key={idx}
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%", // <-- Make dot a circle
              background: idx === slideIndex ? "#fbc02d" : "#fff",
              opacity: idx === slideIndex ? 1 : 0.5,
              border: idx === slideIndex ? "2px solid #fff" : "2px solid #fbc02d",
              transition: "all 0.3s",
              display: "inline-block", // Ensure it's inline-block
              margin: "0 5px", // Optional: add spacing between dots
            }}
          />
        ))}
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
              <ul style={{ paddingLeft: 18, margin: 0, color: "rgb(137, 132, 132)", textAlign: 'left' }}>
                  <li>To provide students with exposure through internships, workshops, and social initiatives.</li>
                  <li>To nurture a culture of critical thinking, dialogue, and collaboration on campus.</li>
                  <li>To align student potential with the broader vision of nation-building and global leadership.</li>
                </ul>
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
              <p>
                Our vision is to nurture leaders at MNIT Jaipur who are innovative, socially responsible, and committed to a self-reliant, progressive Bharat. We empower students to think critically, act ethically, and collaborate for positive change, inspiring them to become changemakers who contribute to society and the nation’s future.
              </p>
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
              <p>Cultivating ethical leaders who inspire change.</p>
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
              <p>Cultivating ethical leaders who inspire change.</p>
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
              <p>Building strong partnerships and teamwork.</p>
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
              <p>– Serving communities with empathy and impact.</p>
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
              <p>Striving for continuous improvement and high standards.</p>
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
              <p>Acting with honesty, transparency, and ethics.</p>
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
              <p>Build leadership skills through workshops, training, and hands-on experiences.</p>
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
              <p>Drive initiatives that promote responsibility and service.</p>
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
              <p>Connect students with industry leaders, alumni, and peers.</p>
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
              <p>Connect students with industry leaders, alumni, and peers.</p>
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
              <p>Foster diversity and understanding through cultural and international collaborations.</p>
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
              <p>Provide technical and soft skill development through training and practice.</p>
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
                <p>Think India MNIT was founded with a vision to empower students and create positive social impact.</p>
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
                <h3>First Milestone</h3>
                <p>Organized the first Leadership Summit with 200+ participants, kickstarting our journey.</p>
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
                <p>Grew across multiple campuses, partnering with educational institutions and industry leaders.</p>
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
                <p>Earned awards for contributions to student development and community service.</p>
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
                <p>Expanding globally with international collaborations and digital initiatives.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;