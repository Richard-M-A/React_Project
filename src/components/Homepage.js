import React from 'react';
import Header from './Header';
import Hero from './Hero';
import FeaturedToys from './FeaturedToys';
import Testimonials from './Testimonials';
import Footer from './Footer';
import './Homepage.css';  

const Homepage = () => {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedToys />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Homepage;
