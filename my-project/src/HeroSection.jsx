import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <img src="/Images/cabbage.jpg" alt="Market Background" />
      </div>
      <div className="hero-content">
        <h1>Real-Time Insights into Essential Commodity Prices Across India</h1>
        <p className="sub-headline">
          Monitor, Analyze, and Stabilize the Prices of 22 Key Food Commodities
        </p>
        <div className="search-bar">
          <input type="text" placeholder="Search commodity or region..." />
          <button>Search</button>
        </div>
        <a href="#dashboard" className="hero-cta">
          Explore Dashboard
        </a>
        <p className="key-statistic">
          550 Price Reporting Centers Across the Country
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
