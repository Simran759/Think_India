import React from "react";
import { motion } from "framer-motion";

import "./youthfest.css";
import Navbar from "../../components/youthfestNavbar";






const YouthfestHome = () => {


  return (
    
  <div className="home"  style={{ background: 'linear-gradient(135deg, #0a0a1f 60%, #232a36 100%)', color: '#fff', minHeight: '100vh' }}>
      {/* Welcome Section */}
       <Navbar />
      

      {/* About MNIT Jaipur Section */}
      <section id="about-mnit" className="section about-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">About Youthfest</h2>
            <div className="about-grid">
              <div className="about-card">
                <div className="about-icon" style={{background: 'linear-gradient(135deg, #3f51b5, #2196f3)'}}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7v2c0 5.25 3.75 10.74 10 13 6.25-2.26 10-7.75 10-13V7l-10-5z" fill="#fff"/>
                  </svg>
                </div>
                {/* <h3>Malaviya National Institute of Technology (MNIT) Jaipur</h3> */}
                <p> Youthfest is the flagship youth and cultural festival organized by
              <strong> Think India MNIT Jaipur</strong>. It is celebrated to
              awaken the spirit of youth by connecting tradition, culture,
              leadership, and national values on a single platform.</p>
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
            <h2 className="section-title">Why Youthfest is Celebrated?</h2>
          </motion.div>

          <div className="about-grid">
            <motion.div 
              className="about-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              
              <p> To celebrate <strong>India’s cultural heritage</strong> through
                festivals, art, music, and traditions.</p>
            </motion.div>

            <motion.div 
              className="about-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              
              <p>To bring students from diverse backgrounds together under shared
                values.</p>
            </motion.div>
            <motion.div 
              className="about-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              
              <p> To balance academic life with cultural, spiritual, and social
                engagement.</p>
            </motion.div>
          </div>
        </div>
        </section>
    </div>
  );
};

export default YouthfestHome; 