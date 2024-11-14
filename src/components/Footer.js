import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 ToyStore. All Rights Reserved.</p>
      <div className="footer-links">
        <a href="#privacy-policy">Privacy Policy</a>
        <a href="#terms-conditions">Terms & Conditions</a>
        <a href="#contact">Contact Us</a>
      </div>
    </footer>
  );
};

export default Footer;
