import React from 'react';
import './FeaturedServices.css';

const FeaturedServices = () => {
  const features = [
    {
      id: 1,
      icon: "bi bi-briefcase",
      title: "Lorem Ipsum",
      description: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"
    },
    {
      id: 2,
      icon: "bi bi-card-checklist",
      title: "Dolor Sitema",
      description: "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata"
    },
    {
      id: 3,
      icon: "bi bi-bar-chart",
      title: "Sed ut perspiciatis",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
    }
  ];

  return (
    <section id="featured-services" className="featured-services">
      <div className="container">
        <div className="row">
          {features.map((item) => (
            <div className="col-lg-4 col-md-6 box" key={item.id}>
              <div className="icon-wrapper">
                <i className={item.icon}></i>
              </div>
              <div className="content">
                <h4 className="title"><a href="/">{item.title}</a></h4>
                <p className="description">{item.description}</p>
                <a href="/" className="read-more">Learn More <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;