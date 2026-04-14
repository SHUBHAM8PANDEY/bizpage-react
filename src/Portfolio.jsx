import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const portfolioData = [
    { id: 1, category: 'app', img: 'portfolio-1.jpg', title: 'App 1' },
    { id: 2, category: 'product', img: 'portfolio-2.jpg', title: 'Product 1' },
    { id: 3, category: 'branding', img: 'portfolio-3.jpg', title: 'Branding 1' },
    { id: 4, category: 'books', img: 'portfolio-4.jpg', title: 'Book 1' },
    { id: 5, category: 'app', img: 'portfolio-5.jpg', title: 'App 2' },
    { id: 6, category: 'product', img: 'portfolio-6.jpg', title: 'Product 2' },
    { id: 7, category: 'branding', img: 'portfolio-7.jpg', title: 'Branding 2' },
    { id: 8, category: 'books', img: 'portfolio-8.jpg', title: 'Book 2' },
    { id: 9, category: 'app', img: 'portfolio-9.jpg', title: 'App 3' },
     { id: 10, category: 'branding', img: 'portfolio-10.jpg', title: 'Branding 2' },
    { id: 11, category: 'books', img: 'portfolio-11.jpg', title: 'Book 2' },
    { id: 12, category: 'app', img: 'portfolio-12.jpg', title: 'App 3' },
  ];

  const filteredItems = filter === 'all' 
    ? portfolioData 
    : portfolioData.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        
        <div className="section-header">
          <h2>Portfolio</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>

        <ul className="portfolio-filters">
          <li className={filter === 'all' ? 'filter-active' : ''} onClick={() => setFilter('all')}>All</li>
          <li className={filter === 'app' ? 'filter-active' : ''} onClick={() => setFilter('app')}>App</li>
          <li className={filter === 'product' ? 'filter-active' : ''} onClick={() => setFilter('product')}>Product</li>
          <li className={filter === 'branding' ? 'filter-active' : ''} onClick={() => setFilter('branding')}>Branding</li>
          <li className={filter === 'books' ? 'filter-active' : ''} onClick={() => setFilter('books')}>Books</li>
        </ul>

        <div className="portfolio-grid">
          {filteredItems.map((item) => (
            <div className="portfolio-item" key={item.id}>
              <div className="portfolio-wrap">
                <img src={`/assets/${item.img}`} alt={item.title} />
                <div className="portfolio-info">
                  <h4>{item.title}</h4>
                  <p>{item.category.toUpperCase()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;