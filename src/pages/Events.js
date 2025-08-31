import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaUsers } from 'react-icons/fa';
import './Events.css';

const Events = () => {
  // Slideshow images for Our Events
  const slideshowImages = [
    '/photos/hcverma.jpg',
    '/events/satoliya.png',
    '/events/discoverhunt.png',
  ];
  const [slideIndex, setSlideIndex] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [slideshowImages.length]);
  const upcomingEvents = [
    {
      id: 1,
      title: "Leadership Summit 2024",
      date: "March 15-17, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "Main Campus Auditorium",
      description: "A three-day intensive leadership development program featuring workshops, keynote speakers, and networking opportunities.",
      participants: "200+",
  image: "/events/discoverhunt.png"
    },
    {
      id: 2,
      title: "Innovation Workshop",
      date: "March 25, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Innovation Lab",
      description: "Hands-on workshop focused on design thinking and innovation methodologies for solving real-world problems.",
      participants: "50",
  image: "/events/discoverhunt.png"
    },
    {
      id: 3,
      title: "Tech Fest 2024",
      date: "April 10-12, 2024",
      time: "10:00 AM - 8:00 PM",
      location: "Engineering Block",
      description: "Annual technology festival featuring hackathons, tech talks, and project showcases.",
      participants: "500+",
  image: "/events/discoverhunt.png"
    }
  ];

  const pastEvents = [
    {
      id: 1,
      title: " Discover India – The Puzzle Hunt",
      date: " February 7, 2025 ",
      location: "VLTC L-008, MNIT Jaipur ",
      description: "The event was structured in two phases. In the first phase, participants solved riddles that guided them to different locations within the venue where puzzle pieces were hidden. The collected pieces were assembled in the second phase to complete the India map, determining the winner. ",

      impact: "250+ people participated ",
  image: "/events/discoverhunt.png"
    },
    {
      id: 2,
      title: "Satoliya",
      date: "January 12, 2025",
      location: "University Grounds",
      description: "Satoliya 2025, held on January 12 at MNIT Jaipur by Think India MNIT, brought students together to relive childhood through the traditional game of Seven Stones. With 15+ teams competing, the event promoted teamwork, strategy, and fun.",
      impact: "15+ teams participated",
  image: "/events/satoliya.png"
    },
    
  { id: 3, 
    title: "Ace Your Career in Civil Services – A Power-Packed UPSC Seminar", 
    date: "April 8, 2025 ", 
    location: "APJ Abdul Kalam Hall, VLTC, MNIT Jaipur ", 
 description: "An impactful seminar 'Ace Your Career in Civil Services' organized by Think India MNIT, featuring Mr. Sunil Oberoi (Ex-IAS, Former Secretary, GoI) and Mr. Kapil Jain (Assistant Director, Vajiram & Ravi IAS). The event provided UPSC aspirants with real-life insights, preparation strategies, and motivational guidance for pursuing careers in civil services.",

    impact: "250+ students benefited", 
  image: "/events/civilservices.jpg.png" }
    
  ];

  return (
  <div className="events-page" style={{ background: 'linear-gradient(135deg, #0a0a1f  )', color: '#fff', minHeight: '100vh' }}>
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
      style={{ fontSize: "4rem", fontWeight: 600, marginBottom: 19 }}
    >
      Our Events
    </motion.h4>
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      style={{ fontSize: "1.2rem", color: "#d0d0d0", fontWeight: 500 }}
    >
      Join us in our exciting events and activities that bring together students,
      professionals, and community leaders.
    </motion.h2>
  </div>

  {/* Dots */}
  <div
    style={{
      position: "absolute",
      bottom: 20,
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
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
          borderRadius: "%",
          background: idx === slideIndex ? "#fbc02d" : "#fff",
          opacity: idx === slideIndex ? 1 : 0.5,
          border: idx === slideIndex ? "2px solid #fff" : "2px solid #fbc02d",
          transition: "all 0.3s",
        }}
      />
    ))}
  </div>
</section>


      {/* Upcoming Events Section */}
      <section className="section upcoming-events">
        <div className="container" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title" style={{ color: '#fbc02d', fontWeight: 700, fontSize: '2.2rem', textAlign: 'center', marginBottom: 8, letterSpacing: '-0.5px' }}>Upcoming Events</h2>
            <p className="section-subtitle" style={{ color: '#fff', textAlign: 'center', fontSize: '1.15rem', marginBottom: 32 }}>Don't miss out on these exciting opportunities to learn, network, and grow</p>
          </motion.div>

          <div className="events-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 36, marginTop: 24 }}>
            {upcomingEvents.map((event, index) => (
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
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="section past-events">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Past Events</h2>
            <p className="section-subtitle">Celebrating our successful events and their impact on the community</p>
          </motion.div>

          <div className="events-grid">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="event-card past"
              >
                <div className="event-image" style={{ position: 'relative', width: '100%', height: '320px', borderRadius: '18px 18px 0 0', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.10)' }}>
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.3s', filter: 'brightness(0.92)' }} 
                  />
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(180deg,rgba(0,0,0,0.18) 40%,rgba(0,0,0,0.45) 100%)', zIndex: 1 }}></div>
                  {/* Removed Completed badge */}
                  <div style={{ position: 'absolute', bottom: 18, left: 18, color: '#fff', zIndex: 2, fontWeight: 600, fontSize: '1.25rem', textShadow: '0 2px 8px rgba(0,0,0,0.25)' }}>{event.title}</div>
                </div>
                <div className="event-content" style={{ background: '#fff', borderRadius: '0 0 18px 18px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', padding: '24px 20px 18px 20px', marginTop: '-8px', position: 'relative', zIndex: 2 }}>
                  <div className="event-details" style={{ display: 'flex', flexWrap: 'wrap', gap: '18px 32px', marginBottom: '10px', color: '#333', fontSize: '1rem' }}>
                    <div className="event-detail" style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                      <FaCalendarAlt style={{ color: '#1976d2' }} />
                      <span>{event.date}</span>
                    </div>
                    <div className="event-detail" style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                      <FaMapMarkerAlt style={{ color: '#1976d2' }} />
                      <span>{event.location}</span>
                    </div>
                    <div className="event-detail" style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                      <FaUsers style={{ color: '#1976d2' }} />
                      <span>{event.impact}</span>
                    </div>
                  </div>
                  <p style={{ color: '#444', fontSize: '1.05rem', marginBottom: 0 }}>{event.description}</p>
                  {/* <button className="btn btn-secondary">View Gallery</button> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Calendar Section
      <section className="section event-calendar">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Event Calendar</h2>
            <p className="section-subtitle">Stay updated with our upcoming events and activities</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="calendar-placeholder"
          >
            <div className="calendar-content">
              <h3>Interactive Event Calendar</h3>
              <p>View all our upcoming events, workshops, and activities in one place.</p>
              <div className="calendar-grid">
                <div className="calendar-month">
                  <h4>March 2024</h4>
                  <div className="calendar-days">
                    <div className="calendar-day event-day">15-17</div>
                    <div className="calendar-day event-day">25</div>
                  </div>
                </div>
                <div className="calendar-month">
                  <h4>April 2024</h4>
                  <div className="calendar-days">
                    <div className="calendar-day event-day">10-12</div>
                  </div>
                </div>
              </div>
              <button className="btn btn-primary">View Full Calendar</button>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default Events; 