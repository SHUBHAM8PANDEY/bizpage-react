import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sara Wilsson",
      role: "Designer",
      image: "testimonial-1.jpg",
      quote: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa."
    },
    {
      id: 2,
      name: "Jena Karlis",
      role: "Store Owner",
      image: "testimonial-2.jpg",
      quote: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim."
    },
    {
      id: 3,
      name: "Matt Brandon",
      role: "Freelancer",
      image: "testimonial-3.jpg",
      quote: "Fugiat enim eram quae noster in sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid legam aliqua noster noster enim quae noster noster enim."
    },
    {
      id: 4,
      name: "John Larson",
      role: "Entrepreneur",
      image: "testimonial-4.jpg",
      quote: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2>Testimonials</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>

        <div className="testimonial-slider">
          {testimonials.map((item, index) => (
            <div key={item.id} className={`testimonial-item ${index === activeIdx ? 'active' : ''}`}>
              <img src={`/assets/${item.image}`} className="testimonial-img" alt={item.name} />
              <h3>{item.name}</h3>
              <h4>{item.role}</h4>
              <div className="stars">
                <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
              </div>
              <p>
                <i className="bi bi-quote quote-icon-left"></i>
                {item.quote}
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          ))}

          <div className="slider-dots">
            {testimonials.map((_, index) => (
              <span 
                key={index} 
                className={`dot ${index === activeIdx ? 'active-dot' : ''}`}
                onClick={() => setActiveIdx(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;