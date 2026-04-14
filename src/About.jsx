import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        
        {/* --- YEH TOP PE RAHEGA --- */}
        <div className="section-header">
          <h2>About Us</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>

        {/* --- ISKE ANDAR TEXT AUR IMAGES SIDE-BY-SIDE HONGE --- */}
        <div className="about-row">
          
          {/* Left Content */}
          <div className="about-content">
            <span className="subtitle">WHO WE ARE</span>
            <h3>Unleashing Potential with Creative Strategy</h3>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            
            <ul className="about-list">
              <li>
                <i className="bi bi-check-circle"></i>
                <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
              </li>
              <li>
                <i className="bi bi-check-circle"></i>
                <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span>
              </li>
              <li>
                <i className="bi bi-check-circle"></i>
                <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</span>
              </li>
            </ul>

            <button className="read-more-btn">
              Read More <i className="bi bi-arrow-right"></i>
            </button>
          </div>

          {/* Right Images Grid */}
          <div className="about-images">
            <div className="img-main">
              <img src="/assets/about-1.jpg" alt="Team" />
            </div>
            <div className="img-side-grid">
              <img src="/assets/about-2.jpg" alt="Meeting" />
              <img src="/assets/about-3.jpg" alt="Handshake" />
            </div>
          </div>

        </div> {/* about-row ends here */}
      </div>
    </section>
  );
};

export default About;