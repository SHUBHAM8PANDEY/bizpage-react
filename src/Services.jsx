import React from 'react';
import './Services.css';

const Services = () => {
  const serviceData = [
    { id: 1, icon: "bi bi-briefcase", title: "Lorem Ipsum", desc: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident" },
    { id: 2, icon: "bi bi-card-checklist", title: "Dolor Sitema", desc: "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata" },
    { id: 3, icon: "bi bi-bar-chart", title: "Sed ut perspiciatis", desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur" },
    { id: 4, icon: "bi bi-binoculars", title: "Magni Dolores", desc: "Excepteur sint occaecat cupidatat non provident, sunt in culpa qui officia deserunt mollit anim id est laborum" },
    { id: 5, icon: "bi bi-brightness-high", title: "Nemo Enim", desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque" },
    { id: 6, icon: "bi bi-calendar4-week", title: "Eiusmod Tempor", desc: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi" }
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        
        <div className="section-header">
          <h2>Services</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>

        <div className="services-grid">
          {serviceData.map((service) => (
            <div className="service-box" key={service.id}>
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <div className="service-content">
                <h4 className="title"><a href="/">{service.title}</a></h4>
                <p className="description">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;