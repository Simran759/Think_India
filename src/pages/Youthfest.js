import React from 'react';
import './Youthfest.css';

const Youthfest = () => {
  // Slideshow images for all pages except Team and Contact
  const slideshowImages = [
    '/events/youthfest.png',
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
  return (
  <div className="youthfest-page section" style={{ background: 'radial-gradient(circle at top, #0a0a1f, #000000)', color: '#fff', minHeight: '100vh' }}>
      <div className="container">
        <h2 className="section-title">YouthFest 2025</h2>
        <p className="section-subtitle">
          Celebrate the spirit of youth! Join us for an unforgettable festival packed with learning, fun, and inspiration.
        </p>
        {/* Slideshow for Youthfest page */}
        <div style={{ width: '100%', maxWidth: 540, margin: '32px auto 0 auto', borderRadius: 18, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.18)' }}>
          <img
            src={slideshowImages[slideIndex]}
            alt={`Event Slide ${slideIndex + 1}`}
            style={{ width: '100%', height: 320, objectFit: 'cover', transition: 'opacity 0.7s', background: '#222' }}
          />
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 8 }}>
            {slideshowImages.map((_, idx) => (
              <span key={idx} style={{
                display: 'inline-block',
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: idx === slideIndex ? '#fbc02d' : '#888',
                opacity: idx === slideIndex ? 1 : 0.5
              }} />
            ))}
          </div>
        </div>
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
