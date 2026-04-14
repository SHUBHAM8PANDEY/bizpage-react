import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Scroll to top button visibility logic
  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-grid">
            
            {/* Column 1: Info */}
            <div className="footer-info">
              <h3>BizPage</h3>
              <p>A108 Adam Street<br />New York, NY 535022<br /><br />
                <strong>Phone:</strong> +1 5589 55488 55<br />
                <strong>Email:</strong> info@example.com<br />
              </p>
              <div className="social-links">
                <a href="#"><i className="bi bi-twitter-x"></i></a>
                <a href="#"><i className="bi bi-facebook"></i></a>
                <a href="#"><i className="bi bi-instagram"></i></a>
                <a href="#"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>

            {/* Column 2: Useful Links */}
            <div className="footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i className="bi bi-chevron-right"></i> <a href="#">Home</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#">About us</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#">Services</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#">Terms of service</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#">Privacy policy</a></li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div className="footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><i className="bi bi-chevron-right"></i> <a href="#">Web Design</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#">Web Development</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#">Product Management</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#">Marketing</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#">Graphic Design</a></li>
              </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div className="footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
              <form>
                <input type="email" name="email" /><input type="submit" value="Subscribe" />
              </form>
            </div>

          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">
          &copy; Copyright <strong>BizPage</strong>. All Rights Reserved
        </div>
        <div className="credits">
          Designed by <span className="green-text">BootstrapMade</span> Distributed by <span className="green-text">ThemeWagon</span>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button 
        className={`back-to-top ${showScroll ? 'active' : ''}`} 
        onClick={scrollTop}
      >
        <i className="bi bi-arrow-up-short"></i>
      </button>
    </footer>
  );
};

export default Footer;