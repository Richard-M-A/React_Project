import React from 'react';
import './FeaturedToys.css';
import toy1 from '../images/toy1.webp';  // Import image paths correctly
import toy2 from '../images/toy2.webp';
import toy3 from '../images/toy3.webp';

const FeaturedToys = () => {
  const toys = [
    { name: 'Action Figure', price: '$25', image: toy1 },  // Remove curly braces around image
    { name: 'Teddy Bear', price: '$15', image: toy2 },
    { name: 'Lego Set', price: '$35', image: toy3 },
  ];

  return (
    <section className="featured-toys" id="featured">
      <h2>Featured Toys</h2>
      <div className="toys-grid">
        {toys.map((toy, index) => (
          <div key={index} className="toy-card">
            <img src={toy.image} alt={toy.name} />
            <h3>{toy.name}</h3>
            <p>{toy.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedToys