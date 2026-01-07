// import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaUsers } from 'react-icons/fa';
import '../Events.css';
import Navbar from '../../components/youthfestNavbar';
const Events = () => {
  // Slideshow images for Our Events
  
  
  
  const Events = [
  //       {
  //     id: 1,
  //     title: "Holi Donation Drive",
  //     date: "March 2025",
  //     time: "9:00 AM - 6:00 PM",
  //     location: "College Main Gate, OAT, Hostel Lobbies",
  //     description: "A meaningful initiative to collect clothes, books, food items, and stationery, spreading light and hope beyond campus walls.",
  //     participants: "200+",
  // image: "/events/Donation_drive.jpg"
  //   },
  
  ];

  return (
  <div className="events-page" style={{ background: 'linear-gradient(135deg, #0a0a1f  )', color: '#fff', minHeight: '100vh' }}>
   <Navbar/>



      {/* Upcoming Events Section */}
      <section className="section upcoming-events">
        <div className="container" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title" style={{ color: '#C19A6B', fontWeight: 700, fontSize: '2.2rem', textAlign: 'center', marginBottom: 8, letterSpacing: '-0.5px' }}>Events</h2>
            <p className="section-subtitle" style={{ color: '#232a36', textAlign: 'center', fontSize: '1.15rem', marginBottom: 32 }}>Don't miss out on these exciting opportunities to learn, network, and grow</p>
          </motion.div>

          <div className="events-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 36, marginTop: 24 }}>
          {Events.length === 0 ? (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="coming-soon-wrapper"
  >
    <div className="coming-soon-card">
      {/* <span className="soon-badge">UPCOMING</span> */}
      <h2>Coming Soon...</h2>
      <p>
        We’re curating meaningful experiences for you.
        Stay tuned — exciting events are on the way.
      </p>
    </div>
  </motion.div>
) : (
  <div
    className="events-grid"
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
      gap: 36,
      marginTop: 24,
    }}
  >
   
            {Events.map((event, index) => (
             <motion.div
  key={event.id}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: index * 0.1 }}
  viewport={{ once: true }}
  className="event-card upcoming"
>
  <div
    className="event-image"
    style={{
      position: 'relative',
      width: '100%',
      height: '320px',
      borderRadius: '18px 18px 0 0',
      overflow: 'hidden',
      boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
    }}
  >
    <img
      src={event.image}
      alt={event.title}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
        transition: 'transform 0.3s',
        filter: 'brightness(0.92)',
      }}
    />
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background:
          'linear-gradient(180deg,rgba(0,0,0,0.18) 40%,rgba(0,0,0,0.45) 100%)',
        zIndex: 1,
      }}
    ></div>
    <div
      style={{
        position: 'absolute',
        bottom: 18,
        left: 18,
        color: '#fff',
        zIndex: 2,
        fontWeight: 600,
        fontSize: '1.25rem',
        textShadow: '0 2px 8px rgba(0,0,0,0.25)',
      }}
    >
      {event.title}
    </div>
  </div>

  <div
    className="event-content"
    style={{
      background: '#fff',
      borderRadius: '0 0 18px 18px',
      boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
      padding: '24px 20px 18px 20px',
      marginTop: '-8px',
      position: 'relative',
      zIndex: 2,
    }}
  >
    <div
      className="event-details"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '18px 32px',
        marginBottom: '10px',
        color: '#333',
        fontSize: '1rem',
      }}
    >
      <div className="event-detail" style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
        <FaCalendarAlt style={{ color: '#1976d2' }} />
        <span>{event.date}</span>
      </div>
      <div className="event-detail" style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
        <FaClock style={{ color: '#1976d2' }} />
        <span>{event.time}</span>
      </div>
      <div className="event-detail" style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
        <FaMapMarkerAlt style={{ color: '#1976d2' }} />
        <span>{event.location}</span>
      </div>
      <div className="event-detail" style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
        <FaUsers style={{ color: '#1976d2' }} />
        <span>{event.participants} participants</span>
      </div>
    </div>
    <p style={{ color: '#444', fontSize: '1.05rem', marginBottom: 0 }}>
      {event.description}
    </p>
  </div>
</motion.div>

            ))}
          </div>)}
        </div>
        </div>
      </section>

    </div>
  );
};

export default Events; 
