import React from 'react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    { id: 1, name: "Walter White", role: "Chief Executive Officer", img: "team-1.jpg" },
    { id: 2, name: "Sarah Jhonson", role: "Product Manager", img: "team-2.jpg" },
    { id: 3, name: "William Anderson", role: "CTO", img: "team-3.jpg" },
    { id: 4, name: "Amanda Jepson", role: "Accountant", img: "team-4.jpg" }
  ];

  return (
    <section id="team" className="team-section">
      <div className="team-container">
        <div className="section-header">
          <h2>Team</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <div className="team-member" key={member.id}>
              <div className="member-img">
                <img src={`/assets/${member.img}`} alt={member.name} />
                
                {/* Saara data ab is overlay ke andar hai */}
                <div className="member-info-overlay">
                  <h4>{member.name}</h4>
                  <span>{member.role}</span>
                  <div className="social-links">
                    <a href="#"><i className="bi bi-twitter-x"></i></a>
                    <a href="#"><i className="bi bi-facebook"></i></a>
                    <a href="#"><i className="bi bi-instagram"></i></a>
                    <a href="#"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;