import React from 'react';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section id="call-to-action" className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <h3>Call To Action</h3>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <a className="cta-btn" href="#contact">Call To Action</a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;