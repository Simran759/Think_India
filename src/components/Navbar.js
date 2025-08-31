import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };
    const handleResize = () => {
      if (window.innerWidth > 768) setIsOpen(false);
    };
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest('.navbar-menu') && !e.target.closest('.navbar-toggle')) {
        setIsOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/events', label: 'Events' },
    { path: '/team', label: 'Our Team' },
    { path: '/work', label: 'Our Work' },
    // { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '44px',
              width: '44px',
              borderRadius: '50%',
              overflow: 'hidden',
              background: '#fff',
              boxShadow: '0 2px 12px 2px rgba(0,0,0,0.18)',
              border: '3px solid #1976d2',
              marginRight: '6px',
              outline: '2px solid #fff',
              outlineOffset: '-2px'
            }}>
              <img src="/logoti.jpg" alt="Think India Logo" style={{ height: '40px', width: '40px', objectFit: 'cover', borderRadius: '50%', background: '#fff' }} />
            </span>
            <span className="logo-text">Think India</span>
            <div className="logo-accent"></div>
          </div>
        </Link>

  <div className={`navbar-menu${isOpen ? ' active' : ''}`} style={{ marginLeft: 'auto', zIndex: 2000 }}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 