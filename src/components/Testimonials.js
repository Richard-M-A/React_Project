import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-grid">
        <div className="testimonial">
          <p>"Amazing toy store! My kids love it!"</p>
          <h3>- Jane Doe</h3>
        </div>
        <div className="testimonial">
          <p>"Great selection and fast delivery."</p>
          <h3>- John Smith</h3>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
