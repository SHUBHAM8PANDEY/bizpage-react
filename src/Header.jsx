import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`main-header ${isScrolled ? 'header-scrolled' : 'header-transparent'}`}>
      <div className="header-container">
        <div className="header-logo">
          <h1><a href="/">Biz<span>Page</span></a></h1>
        </div>

        {/* Hamburger Icon for Mobile */}
        <i 
          className={`mobile-nav-toggle bi ${isMobileMenuOpen ? 'bi-x' : 'bi-list'}`} 
          onClick={toggleMobileMenu}
        ></i>

        {/* Navigation Menu */}
        <nav className={`header-nav ${isMobileMenuOpen ? 'nav-mobile-active' : ''}`}>
          <ul>
            <li><a href="#hero" onClick={() => setIsMobileMenuOpen(false)}>HOME</a></li>
            <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>ABOUT</a></li>
            <li><a href="#services" onClick={() => setIsMobileMenuOpen(false)}>SERVICES</a></li>
            <li><a href="#portfolio" onClick={() => setIsMobileMenuOpen(false)}>PORTFOLIO</a></li>
            <li><a href="#team" onClick={() => setIsMobileMenuOpen(false)}>TEAM</a></li>
            <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>CONTACT</a></li>
          </ul>
        </nav>
      </div>
      {/* Overlay jab menu khula ho */}
      {isMobileMenuOpen && <div className="header-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>}
    </header>
  );
};

export default Header;