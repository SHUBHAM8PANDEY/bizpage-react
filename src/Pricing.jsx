import React from 'react';
import './Pricing.css';

const Pricing = () => {
  const plans = [
    {
      id: 1,
      name: "Free Plan",
      price: "0",
      icon: "bi bi-box",
      features: [
        { text: "Quam adipiscing vitae proin", active: true },
        { text: "Nec feugiat nisl pretium", active: true },
        { text: "Nulla at volutpat diam uteera", active: true },
        { text: "Pharetra massa massa ultricies", active: false },
        { text: "Massa ultricies mi quis hendrerit", active: false },
      ],
      featured: false
    },
    {
      id: 2,
      name: "Business Plan",
      price: "29",
      icon: "bi bi-rocket",
      features: [
        { text: "Quam adipiscing vitae proin", active: true },
        { text: "Nec feugiat nisl pretium", active: true },
        { text: "Nulla at volutpat diam uteera", active: true },
        { text: "Pharetra massa massa ultricies", active: true },
        { text: "Massa ultricies mi quis hendrerit", active: true },
      ],
      featured: true
    },
    {
      id: 3,
      name: "Developer Plan",
      price: "49",
      icon: "bi bi-send",
      features: [
        { text: "Quam adipiscing vitae proin", active: true },
        { text: "Nec feugiat nisl pretium", active: true },
        { text: "Nulla at volutpat diam uteera", active: true },
        { text: "Pharetra massa massa ultricies", active: true },
        { text: "Massa ultricies mi quis hendrerit", active: true },
      ],
      featured: false
    }
  ];

  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-container">
        
        <div className="section-header">
          <h2>Pricing</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <div key={plan.id} className={`pricing-item ${plan.featured ? 'featured' : ''}`}>
              <h3>{plan.name}</h3>
              <div className="price-icon">
                <i className={plan.icon}></i>
              </div>
              <h4><sup>$</sup>{plan.price}<span> / month</span></h4>
              
              <ul>
                {plan.features.map((feature, index) => (
                  <li key={index} className={feature.active ? '' : 'na'}>
                    <i className={`bi ${feature.active ? 'bi-check' : 'bi-x'}`}></i>
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
              
              <div className="buy-btn-wrapper">
                <a href="#" className="buy-btn">Buy Now</a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;