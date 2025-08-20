import React from 'react';
import './Youthfest.css';

const Youthfest = () => {
  return (
    <div className="youthfest-page section">
      <div className="container">
        <h2 className="section-title">YouthFest 2025</h2>
        <p className="section-subtitle">
          Celebrate the spirit of youth! Join us for an unforgettable festival packed with learning, fun, and inspiration.
        </p>
        <div className="youthfest-details">
          <div className="youthfest-card">
            <h3>Dates</h3>
            <p>January 12 - 14, 2025</p>
          </div>
          <div className="youthfest-card">
            <h3>Location</h3>
            <p>MNIT Jaipur Main Campus</p>
          </div>
          <div className="youthfest-card">
            <h3>Highlights</h3>
            <ul>
              <li>Workshops & Seminars by Industry Experts</li>
              <li>Technical & Cultural Competitions</li>
              <li>Live Performances & Concerts</li>
              <li>Networking with Youth Leaders</li>
              <li>Food Stalls & Fun Activities</li>
            </ul>
          </div>
        </div>
        <div className="youthfest-description">
          <p>
            YouthFest 2025 is the annual flagship event of Think India MNIT, bringing together students from across the country to celebrate innovation, leadership, and creativity. Whether you're a tech enthusiast, an artist, or just looking to have fun, there's something for everyone!
          </p>
          <p>
            Stay tuned for registration details, event schedules, and more. For any queries, contact us at <a href="mailto:youthfest@thinkindia.org">youthfest@thinkindia.org</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Youthfest;
