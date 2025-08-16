import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Team.css';

const Team = () => {
  const coreTeam = [
    {
      id: 1,
      name: "Rahul Sharma",
      position: "President",
      image: "https://via.placeholder.com/300x300/FF6B35/FFFFFF?text=Rahul",
      bio: "Leading Think India with vision and dedication, Rahul brings 3+ years of experience in student leadership and community development.",
      linkedin: "#",
      twitter: "#",
      email: "rahul@thinkindia.org"
    },
    {
      id: 2,
      name: "Priya Patel",
      position: "Vice President",
      image: "https://via.placeholder.com/300x300/FF8C42/FFFFFF?text=Priya",
      bio: "Priya oversees operations and strategic planning, ensuring smooth execution of all Think India initiatives and programs.",
      linkedin: "#",
      twitter: "#",
      email: "priya@thinkindia.org"
    },
    {
      id: 3,
      name: "Amit Kumar",
      position: "Secretary",
      image: "https://via.placeholder.com/300x300/FFD93D/000000?text=Amit",
      bio: "Amit manages communications and documentation, maintaining strong relationships with stakeholders and partners.",
      linkedin: "#",
      twitter: "#",
      email: "amit@thinkindia.org"
    }
  ];

  const coordinators = [
    {
      id: 1,
      name: "Neha Singh",
      position: "Events Coordinator",
      image: "https://via.placeholder.com/300x300/FF6B35/FFFFFF?text=Neha",
      bio: "Neha specializes in event planning and execution, ensuring memorable experiences for all participants.",
      linkedin: "#",
      twitter: "#",
      email: "neha@thinkindia.org"
    },
    {
      id: 2,
      name: "Vikram Mehta",
      position: "Technical Coordinator",
      image: "https://via.placeholder.com/300x300/FF8C42/FFFFFF?text=Vikram",
      bio: "Vikram leads technical initiatives and digital transformation projects for Think India.",
      linkedin: "#",
      twitter: "#",
      email: "vikram@thinkindia.org"
    },
    {
      id: 3,
      name: "Anjali Desai",
      position: "Outreach Coordinator",
      image: "https://via.placeholder.com/300x300/FFD93D/000000?text=Anjali",
      bio: "Anjali manages partnerships and community outreach, expanding Think India's network and impact.",
      linkedin: "#",
      twitter: "#",
      email: "anjali@thinkindia.org"
    }
  ];

  const volunteers = [
    {
      id: 1,
      name: "Arjun Reddy",
      position: "Volunteer",
      image: "https://via.placeholder.com/300x300/FF6B35/FFFFFF?text=Arjun",
      bio: "Arjun actively participates in community service and event organization.",
      linkedin: "#",
      twitter: "#",
      email: "arjun@thinkindia.org"
    },
    {
      id: 2,
      name: "Zara Khan",
      position: "Volunteer",
      image: "https://via.placeholder.com/300x300/FF8C42/FFFFFF?text=Zara",
      bio: "Zara contributes to social media management and content creation.",
      linkedin: "#",
      twitter: "#",
      email: "zara@thinkindia.org"
    },
    {
      id: 3,
      name: "Rohan Gupta",
      position: "Volunteer",
      image: "https://via.placeholder.com/300x300/FFD93D/000000?text=Rohan",
      bio: "Rohan supports technical projects and workshop coordination.",
      linkedin: "#",
      twitter: "#",
      email: "rohan@thinkindia.org"
    }
  ];

  const TeamMember = ({ member, delay }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="team-member-card"
    >
      <div className="member-image">
        <img src={member.image} alt={member.name} />
        <div className="member-overlay">
          <div className="social-links">
            <a href={member.linkedin} className="social-link">
              <FaLinkedin />
            </a>
            <a href={member.twitter} className="social-link">
              <FaTwitter />
            </a>
            <a href={`mailto:${member.email}`} className="social-link">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
      <div className="member-info">
        <h3>{member.name}</h3>
        <p className="position">{member.position}</p>
        <p className="bio">{member.bio}</p>
      </div>
    </motion.div>
  );

  return (
    <div className="team-page">
      {/* Hero Section */}
      <section className="team-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="team-hero-content"
          >
            <h1>Our Team</h1>
            <p>Meet the dedicated individuals who make Think India a success through their leadership and commitment.</p>
          </motion.div>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="section core-team">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Core Team</h2>
            <p className="section-subtitle">The leadership team that drives Think India's vision and mission</p>
          </motion.div>

          <div className="team-grid">
            {coreTeam.map((member, index) => (
              <TeamMember key={member.id} member={member} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Coordinators Section */}
      <section className="section coordinators">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Coordinators</h2>
            <p className="section-subtitle">Specialized coordinators managing different aspects of our organization</p>
          </motion.div>

          <div className="team-grid">
            {coordinators.map((member, index) => (
              <TeamMember key={member.id} member={member} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Volunteers Section */}
      <section className="section volunteers">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Volunteers</h2>
            <p className="section-subtitle">Our dedicated volunteers who contribute their time and skills</p>
          </motion.div>

          <div className="team-grid">
            {volunteers.map((member, index) => (
              <TeamMember key={member.id} member={member} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="section join-team">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="join-team-content"
          >
            <h2>Join Our Team</h2>
            <p>Interested in becoming part of Think India? We're always looking for passionate individuals who want to make a difference.</p>
            <div className="join-buttons">
              <button className="btn btn-primary">Apply Now</button>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team; 