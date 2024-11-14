import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">ToyStore</div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#featured">Featured Toys</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
