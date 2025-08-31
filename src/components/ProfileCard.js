import * as React from "react";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

// Pixel-perfect Profile Card based on reactbits.dev
const ProfileCard = ({
  name,
  position,
  image,
  bio,
  linkedin,
  twitter,
  email,
  handle,
  status,
  contactText = "Contact Me"
}) => (
  <div
    style={{
      background: "linear-gradient(135deg, #fafdff 0%, #eaf1ff 100%)",
      borderRadius: 24,
      boxShadow: "0 8px 32px rgba(25, 118, 210, 0.08)",
      padding: 28,
      maxWidth: 340,
      margin: "auto",
      textAlign: "center",
      position: "relative",
      zIndex: 1,
      border: "1.5px solid #e0ebff"
    }}
  >
    <div
      style={{
        width: 112,
        height: 112,
        margin: "0 auto 18px",
        borderRadius: "50%",
        overflow: "hidden",
        boxShadow: "0 2px 12px rgba(25,118,210,0.10)",
        border: "3px solid #fff"
      }}
    >
      <img
        src={image}
        alt={name}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
    <div style={{ marginBottom: 6, fontWeight: 700, fontSize: 20, color: "#1976d2" }}>{name}</div>
    <div style={{ color: "#fbc02d", fontWeight: 600, marginBottom: 8, fontSize: 15 }}>{position}</div>
    {handle && (
      <div style={{ color: "#888", fontSize: 14, marginBottom: 4 }}>@{handle}</div>
    )}
    {status && (
      <div style={{ color: "#43a047", fontSize: 13, marginBottom: 8 }}>{status}</div>
    )}
    <div style={{ color: "#444", fontSize: "1rem", marginBottom: 14 }}>{bio}</div>
    <div style={{ display: "flex", justifyContent: "center", gap: 18, marginBottom: 16 }}>
      {linkedin && (
        <a href={linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "#1976d2", fontSize: 22 }}>
          <FaLinkedin />
        </a>
      )}
      {twitter && (
        <a href={twitter} target="_blank" rel="noopener noreferrer" style={{ color: "#1976d2", fontSize: 22 }}>
          <FaTwitter />
        </a>
      )}
      {email && (
        <a href={`mailto:${email}`} style={{ color: "#1976d2", fontSize: 22 }}>
          <FaEnvelope />
        </a>
      )}
    </div>
    <button
      style={{
        background: "linear-gradient(90deg, #1976d2 0%, #fbc02d 100%)",
        color: "#fff",
        border: "none",
        borderRadius: 12,
        padding: "10px 28px",
        fontWeight: 600,
        fontSize: 15,
        cursor: "pointer",
        marginTop: 4,
        boxShadow: "0 2px 8px rgba(25,118,210,0.10)",
        transition: "background 0.2s"
      }}
      onClick={() => email && window.open(`mailto:${email}`)}
    >
      {contactText}
    </button>
  </div>
);

export default ProfileCard;
