
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // Import social media icons
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-container">

          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#dashboard">Commodities Dashboard</a></li>
              <li><a href="#price-trends">Price Trends</a></li>
              <li><a href="#forecasting">Forecasting</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          
          <div className="footer-section">
            <h4>Contact Information</h4>
            <ul>
              <li><strong>Address:</strong> SIT, Sambalpur, Odisha</li>
              <li><strong>Email:</strong> support@consumeraffairs.gov.in</li>
              <li><strong>Phone:</strong> +91-123-456-7890</li>
            </ul>
          </div>

          
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-media-links">
              <a href="https://www.facebook.com" aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://www.twitter.com" aria-label="Twitter"><FaTwitter /></a>
              <a href="https://www.linkedin.com" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="https://www.instagram.com" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>

          
          <div className="footer-section">
            <h4>Subscribe to Our Newsletter</h4>
            <p>Stay updated with the latest price trends and market insights.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-legal">
            <ul>
              <li><a href="#privacy-policy">Privacy Policy</a></li>
              <li><a href="#terms-of-service">Terms of Service</a></li>
              <li><a href="#disclaimer">Disclaimer</a></li>
            </ul>
          </div>
          <p>© 2024 Department of Consumer Affairs, Government of India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
