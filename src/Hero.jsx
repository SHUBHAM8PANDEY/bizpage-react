import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "At vero eos et accusamus",
      description: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
      bgImage: "hero1.jpg" // public/assets/hero1.jpg
    },
    {
      id: 2,
      title: "Temporibus autem quibusdam",
      description: "Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut.",
      bgImage: "hero2.jpg"
    },
    {
      id: 3,
      title: "Nam libero tempore cum soluta",
      description: "Eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus omnis voluptas assumenda.",
      bgImage: "hero3.jpg"
    },
    {
      id: 4,
      title: "Omnis voluptas assumenda est",
      description: "Accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
      bgImage: "hero4.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000); // Thoda slow transition ke liye time badhaya hai
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            // Unique key for triggering animation on each slide change
            key={index === currentSlide ? `active-slide-${index}` : index}
            className={`hero-slide-item ${index === currentSlide ? 'active' : ''}`}
            style={{ '--bg-image': `url(/assets/${slide.bgImage})` }} 
          >
            <div className="hero-content-fixed">
              {/* Animations applied here */}
              <h2 className="animate-text-down">{slide.title}</h2>
              <p className="animate-text-up">{slide.description}</p>
              <a href="#about" className="btn-get-started animate-button">Get Started</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;