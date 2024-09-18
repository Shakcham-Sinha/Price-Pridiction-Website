
import React from 'react';
import './FeaturesSection.css'; 
import { FaChartLine, FaHistory, FaBalanceScale, FaChartBar } from 'react-icons/fa'; // Icons

const FeaturesSection = () => {
  return (
    <section className="features-section">
      
      <h2>Our Core Features</h2>

      
      <div className="features-grid">
        
        <div className="feature-box">
          <FaChartLine className="feature-icon" />
          <h3>Real-Time Price Monitoring</h3>
          <p>Live price updates from 550 centers across the country.</p>
        </div>

        
        <div className="feature-box">
          <FaHistory className="feature-icon" />
          <h3>Interactive Trends Analysis</h3>
          <p>View historical and emerging price trends with real-time data.</p>
        </div>

        
        <div className="feature-box">
          <FaBalanceScale className="feature-icon" />
          <h3>Strategic Market Interventions</h3>
          <p>Timely actions taken to stabilize volatile market prices.</p>
        </div>

        
        <div className="feature-box">
          <FaChartBar className="feature-icon" />
          <h3>Price Forecasting</h3>
          <p>ARIMA-based economic models for predictive insights into future prices.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
