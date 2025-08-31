// src/components/Components/ProfileCard/ProfileCard.jsx
import React from "react";
import { motion } from "framer-motion";
import "./ProfileCard.css";

const ProfileCard = ({
  avatarUrl,
  name,
  title,
  handle,
  status,
  contactText,
  onContactClick,
}) => {
  // Animation for 3D tilt and scale on hover
  const [isHovered, setIsHovered] = React.useState(false);
  const [rotate, setRotate] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10; // max 10deg
    const rotateY = ((x - centerX) / centerX) * 10;
    setRotate({ x: -rotateX, y: rotateY });
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      className="profile-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)" }}
      style={{
        transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: isHovered ? 'transform 0.15s cubic-bezier(.17,.67,.83,.67)' : 'transform 0.4s cubic-bezier(.17,.67,.83,.67)',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      {/* Header */}
      <div className="profile-header">
        <h2>{name}</h2>
        <p>{title}</p>
      </div>

      {/* Avatar */}
      <div className="profile-avatar">
        <img src={avatarUrl} alt={name} />
      </div>

      {/* Footer */}
      <div className="profile-footer">
        <div className="profile-user">
          <img src={avatarUrl} alt={name} />
          <div>
            <p className="handle">@{handle}</p>
            <p className="status">{status}</p>
          </div>
        </div>
        <button className="contact-btn" onClick={onContactClick}>
          {contactText}
        </button>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
