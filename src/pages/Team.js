import React from 'react';
import { motion } from 'framer-motion';
import LightRays from '../components/Backgrounds/LightRays/LightRays';
import ProfileCard from '../components/Components/ProfileCard/ProfileCard';
import './Team.css';
import {   instagramUrl, linkedinUrl } from 'react-icons/fa';

const Team = () => {
  const Faculty = [
    { id: 1, name: "Rahul Sharma", position: "President", image: "/events/satoliya.png", linkedinUrl: "https://linkedin.com/in/yourhandle",  instagramUrl:"https://instagram.com/yourhandle" },
    { id: 2, name: "Priya Patel", position: "Vice President", image: "/events/satoliya.png", linkedinUrl: "https://linkedin.com/in/yourhandle",  instagramUrl:"https://instagram.com/yourhandle" },
    { id: 3, name: "Amit Kumar", position: "Secretary", image: "/events/satoliya.png",linkedinUrl:"https://linkedin.com/in/yourhandle",  instagramUrl:"https://instagram.com/yourhandle" }
  ];

  const Advisors = [
    { id: 1, name: "Neha Singh", position: "Events Coordinator", image:"/events/satoliya.png",  linkedinUrl:"https://linkedin.com/in/yourhandle" ,  instagramUrl:"https://instagram.com/yourhandle"},
    { id: 2, name: "Vikram Mehta", position: "Technical Coordinator", image: "/events/satoliya.png",  linkedinUrl: "https://linkedin.com/in/yourhandle" ,  instagramUrl:"https://instagram.com/yourhandle"},
    { id: 3, name: "Anjali Desai", position: "Outreach Coordinator", image: "/events/satoliya.png",  linkedinUrl: "https://linkedin.com/in/yourhandle",  instagramUrl:"https://instagram.com/yourhandle" }
  ];

  const CoreTeam = [
    { id: 1, name: "Simran", position: "Technical", image: "/team_member_pic/simran.jpg", linkedinUrl: "https://linkedin.com/in/yourhandle",  instagramUrl:"https://instagram.com/yourhandle" },
    { id: 2, name: "Zara Khan", position: "Volunteer", image: "/events/satoliya.png",  linkedinUrl:"https://linkedin.com/in/yourhandle",  instagramUrl:"https://instagram.com/yourhandle" },
    { id: 3, name: "Rohan Gupta", position: "Volunteer", image: "/events/satoliya.png",  linkedinUrl: "https://linkedin.com/in/yourhandle",  instagramUrl:"https://instagram.com/yourhandle" }
  ];

  const TeamMember = ({ member, delay }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      style={{ zIndex: 1 }}
    >
      <ProfileCard
        avatarUrl={member.image}
        name={member.name}
        title={member.position}
        // handle={member.name.replace(/\s+/g, '').toLowerCase()}
        // status={member.bio}
        id={member.id}
          linkedinUrl={member.linkedinUrl}
  instagramUrl={member.instagramUrl}
        contactText="Contact"
        showUserInfo={true}
        onContactClick={() => window.open(`mailto:${member.email}`)}
      />
    </motion.div>
  );

  return (
    <div className="w-full min-h-screen relative flex flex-col items-center"
      style={{ background: 'radial-gradient(circle at top, #0a0a1f)', paddingTop: '90px' }}>
      
      {/* Spotlight LightRays Background */}
      <div style={{ position: 'fixed', inset: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="rgba(255,255,255,0.6)"
          raysSpeed={1.2}
          lightSpread={0.3}   // narrower spread = spotlight
          rayLength={1.5}
          followMouse={false} // fixed spotlight effect
          mouseInfluence={0}
          noiseAmount={0.05}
          distortion={0.02}
        />
      </div>

      {/* Hero Section */}
      <section className="team-hero"
        style={{ background: 'transparent', position: 'relative', zIndex: 2, textAlign: 'center', minHeight: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 24, paddingBottom: 12 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={{ color: '#ffffff', textShadow: '0 2px 18px rgba(255,255,255,0.5)', fontSize: '3rem', fontWeight: 800, letterSpacing: '0.04em',marginTop: 10, marginBottom: 8 }}>Our Team</h1>
          <p style={{ color: '#d0d0d0', fontSize: '1.2rem', fontWeight: 500, marginTop: 0, marginBottom: 0 }}>Meet the dedicated individuals who make Think India a success.</p>
        </motion.div>
      </section>

      {/* Core Team */}
      <section className="section core-team" style={{ position: 'relative', zIndex: 2, marginTop: '-12px' }}>
        <div className="container text-center">
          <h2 style={{ color: '#fff', marginBottom: 12, marginTop: 0, fontSize: '2rem' }}>Faculty Advisors</h2>
          <div className="team-grid">
            {Faculty.map((m, i) => <TeamMember key={m.id} member={m} delay={i * 0.1} />)}
          </div>
        </div>
      </section>

      {/* Coordinators */}
      <section className="section coordinators" style={{ position: 'relative', zIndex: 2 }}>
        <div className="container text-center">
          <h2 style={{ color: '#fff' }}>Advisors</h2>
          <div className="team-grid">
            {Advisors.map((m, i) => <TeamMember key={m.id} member={m} delay={i * 0.1} />)}
          </div>
        </div>
      </section>

      {/* Volunteers */}
      <section className="section volunteers" style={{ position: 'relative', zIndex: 2 }}>
        <div className="container text-center">
          <h2 style={{ color: '#fff' }}>CoreTeam</h2>
          <div className="team-grid">
            {CoreTeam.map((m, i) => <TeamMember key={m.id} member={m} delay={i * 0.1} />)}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Team;
