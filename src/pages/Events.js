import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaUsers } from 'react-icons/fa';
import './Events.css';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Leadership Summit 2024",
      date: "March 15-17, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "Main Campus Auditorium",
      description: "A three-day intensive leadership development program featuring workshops, keynote speakers, and networking opportunities.",
      participants: "200+",
      image: "https://via.placeholder.com/400x250/FF6B35/FFFFFF?text=Leadership+Summit"
    },
    {
      id: 2,
      title: "Innovation Workshop",
      date: "March 25, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Innovation Lab",
      description: "Hands-on workshop focused on design thinking and innovation methodologies for solving real-world problems.",
      participants: "50",
      image: "https://via.placeholder.com/400x250/FF8C42/FFFFFF?text=Innovation+Workshop"
    },
    {
      id: 3,
      title: "Tech Fest 2024",
      date: "April 10-12, 2024",
      time: "10:00 AM - 8:00 PM",
      location: "Engineering Block",
      description: "Annual technology festival featuring hackathons, tech talks, and project showcases.",
      participants: "500+",
      image: "https://via.placeholder.com/400x250/FFD93D/000000?text=Tech+Fest"
    }
  ];

  const pastEvents = [
    {
      id: 1,
      title: "Community Service Day",
      date: "December 15, 2023",
      location: "Local Community Centers",
      description: "Successfully organized community service activities impacting 1000+ lives through various initiatives.",
      impact: "1000+ lives impacted",
      image: "https://via.placeholder.com/400x250/FF6B35/FFFFFF?text=Community+Service"
    },
    {
      id: 2,
      title: "Career Fair 2023",
      date: "November 20, 2023",
      location: "University Grounds",
      description: "Connected 300+ students with 50+ companies for internship and job opportunities.",
      impact: "300+ students placed",
      image: "https://via.placeholder.com/400x250/FF8C42/FFFFFF?text=Career+Fair"
    },
    {
      id: 3,
      title: "Cultural Fest",
      date: "October 5-7, 2023",
      location: "Cultural Center",
      description: "Three-day cultural celebration showcasing diverse talents and promoting cultural exchange.",
      impact: "800+ participants",
      image: "https://via.placeholder.com/400x250/FFD93D/000000?text=Cultural+Fest"
    }
  ];

  return (
    <div className="events-page">
      {/* Hero Section */}
      <section className="events-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="events-hero-content"
          >
            <h1>Our Events</h1>
            <p>Join us in our exciting events and activities that bring together students, professionals, and community leaders.</p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="section upcoming-events">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Upcoming Events</h2>
            <p className="section-subtitle">Don't miss out on these exciting opportunities to learn, network, and grow</p>
          </motion.div>

          <div className="events-grid">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="event-card"
              >
                <div className="event-image">
                  <img src={event.image} alt={event.title} />
                  <div className="event-badge">Upcoming</div>
                </div>
                <div className="event-content">
                  <h3>{event.title}</h3>
                  <div className="event-details">
                    <div className="event-detail">
                      <FaCalendarAlt />
                      <span>{event.date}</span>
                    </div>
                    <div className="event-detail">
                      <FaClock />
                      <span>{event.time}</span>
                    </div>
                    <div className="event-detail">
                      <FaMapMarkerAlt />
                      <span>{event.location}</span>
                    </div>
                    <div className="event-detail">
                      <FaUsers />
                      <span>{event.participants} participants</span>
                    </div>
                  </div>
                  <p>{event.description}</p>
                  <button className="btn btn-primary">Register Now</button>
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
                <div className="event-image">
                  <img src={event.image} alt={event.title} />
                  <div className="event-badge completed">Completed</div>
                </div>
                <div className="event-content">
                  <h3>{event.title}</h3>
                  <div className="event-details">
                    <div className="event-detail">
                      <FaCalendarAlt />
                      <span>{event.date}</span>
                    </div>
                    <div className="event-detail">
                      <FaMapMarkerAlt />
                      <span>{event.location}</span>
                    </div>
                    <div className="event-detail">
                      <FaUsers />
                      <span>{event.impact}</span>
                    </div>
                  </div>
                  <p>{event.description}</p>
                  <button className="btn btn-secondary">View Gallery</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Calendar Section */}
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
      </section>
    </div>
  );
};

export default Events; 