
import React from 'react';
import './CallToActionSection.css'; 

const CallToActionSection = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-box">
          <h3>Download Data Reports</h3>
          <p>
            Get detailed reports on historical price trends and market data. Ideal for researchers, policymakers, and
            analysts looking for comprehensive insights into essential commodity prices.
          </p>
          <a href="#download-reports" className="cta-btn download-btn">
            Download Reports
          </a>
        </div>

        <div className="cta-box">
          <h3>Subscribe for Weekly Price Alerts</h3>
          <p>
            Stay informed! Subscribe to receive weekly updates on price trends for essential commodities, ensuring you
            stay ahead of market movements. Perfect for consumers and traders.
          </p>
          <a href="#subscribe-alerts" className="cta-btn subscribe-btn">
            Subscribe Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
