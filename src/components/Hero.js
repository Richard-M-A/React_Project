import React from 'react';
import './Hero.css';
import { useNavigate } from 'react-router-dom';

const Hero = () => {

    const navigate = useNavigate()

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to ToyStore</h1>
        <p>Explore the best toys for your little ones!</p>
        <button className="cta-button" onClick={()=>navigate('/store')} >Shop Now</button>
      </div>
    </section>
  );
};

export default Hero;
