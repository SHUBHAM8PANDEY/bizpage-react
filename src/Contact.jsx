import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        
        <div className="section-header">
          <h2>Contact</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>

        <div className="contact-info-grid">
          <div className="info-item">
            <i className="bi bi-geo-alt"></i>
            <h3>Address</h3>
            <p>A108 Adam Street, New York, NY 535022</p>
          </div>

          <div className="info-item">
            <i className="bi bi-telephone"></i>
            <h3>Call Us</h3>
            <p>+1 5589 55488 55</p>
          </div>

          <div className="info-item">
            <i className="bi bi-envelope"></i>
            <h3>Email Us</h3>
            <p>info@example.com</p>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
            </div>
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Message" rows="6" required></textarea>
            <div className="text-center">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;