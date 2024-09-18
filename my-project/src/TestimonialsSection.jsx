
import React from 'react';
import './TestimonialsSection.css';

const testimonials = [
  {
    name: 'Amartya Sen',
    quote: 'The department’s market interventions have significantly reduced price volatility in critical food commodities, ensuring stability for both consumers and producers.',
    image: 'Images/licensed-image.jpg',
    title: 'Indian economist and philosopher',
  },
  {
    name: 'Raghuram Rajan',
    quote: 'Using ARIMA-based forecasting models has allowed for more accurate price predictions, giving traders and policymakers a reliable tool for decision-making.',
    image: 'Images/Raghuram.jpg',
    title: 'Former Governor of the Reserve Bank of India',
  },
  {
    name: 'Abhijit Banerjee',
    quote: 'The buffer stock policy has been a game-changer in controlling inflationary pressures during seasonal shortages. A highly effective tool for market stabilization.',
    image: 'Images/abhijit.jpg',
    title: 'Indian-American economist',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      
      <h2>What Experts Say</h2>

      
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-box" key={index}>
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <p className="testimonial-quote">“{testimonial.quote}”</p>
            <h4 className="testimonial-name">{testimonial.name}</h4>
            <p className="testimonial-title">{testimonial.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
