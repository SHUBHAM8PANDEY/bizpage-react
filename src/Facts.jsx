import React from 'react';
import './Facts.css';

const Facts = () => {
  const stats = [
    { id: 1, number: "232", label: "Clients" },
    { id: 2, number: "521", label: "Projects" },
    { id: 3, number: "1453", label: "Hours Of Support" },
    { id: 4, number: "32", label: "Workers" }
  ];

  return (
    <section id="facts" className="facts-section">
      <div className="facts-container">
        <div className="facts-row">
          {stats.map((stat) => (
            <div className="fact-item" key={stat.id}>
              <div className="fact-box">
                <span className="fact-number">{stat.number}</span>
                <p className="fact-label">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facts;