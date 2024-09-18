import React from "react";
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="Department of Consumer Affairs" />
      </div>

      <nav className="nav-menu">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#dashboard">Commodities Dashboard</a></li>
          <li><a href="#trends">Price Trends</a></li>
          <li><a href="#buffer-stock">Buffer Stock</a></li>
          <li><a href="#interventions">Market Interventions</a></li>
          <li><a href="#forecasting">Forecasting</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>

      <div className="cta">
        <a href="#latest-prices" className="cta-button">View Latest Prices</a>
      </div>
    </header>
  );
};

export default Header;
