// BlogNewsSection.jsx
import React from 'react';
import './BlogNewsSection.css'; // Optional: For styling

const articles = [
  {
    title: 'Government Intervenes to Stabilize Onion Prices',
    description: 'Recent actions from the Department of Consumer Affairs have successfully stabilized rising onion prices amid seasonal shortages.',
    link: '#',
  },
  {
    title: 'Pulses Price Forecasts: What Traders Need to Know',
    description: 'ARIMA-based models predict potential price increases in pulses for the upcoming quarter. Learn what this means for the market.',
    link: '#',
  },
  {
    title: 'How Buffer Stocks Helped Control Inflation Last Year',
    description: 'A detailed report on how the strategic release of buffer stocks of key commodities played a critical role in controlling inflation.',
    link: '#',
  },
];

const BlogNewsSection = () => {
  return (
    <section className="blog-news-section">
      {/* Title */}
      <h2>Latest Market Updates & News</h2>

      {/* Articles Container */}
      <div className="articles-container">
        {articles.map((article, index) => (
          <div className="article-box" key={index}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.link} className="read-more-link">Read More</a>
          </div>
        ))}
      </div>

      {/* Read More Button */}
      <div className="read-more-button">
        <a href="#more-articles" className="read-more-btn">Read More</a>
      </div>
    </section>
  );
};

export default BlogNewsSection;
