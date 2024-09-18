import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './ForecastingSection.css'; 
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ForecastingSection = () => {
  
  const data = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'], 
    datasets: [
      {
        label: 'Predicted Prices (in INR)',
        data: [4000, 4200, 4500, 4800], 
        fill: false,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.1, 
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: 'Price Forecast for Commodity (Next Year)',
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        title: {
          display: true,
          text: 'Price (in INR)',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Quarter',
        },
      },
    },
  };

  return (
    <section className="forecasting-section">
      
      <h2>Price Forecasting Powered by Data Science</h2>

      
      <p>
        Our price forecasting models leverage advanced ARIMA-based techniques, combining historical data with
        modern data science tools to provide predictive insights for key commodities. This helps in market planning and price stabilization efforts.
      </p>

      
      <div className="forecast-graph">
        <Line data={data} options={options} />
      </div>

      
      <div className="forecast-button">
        <a href="#see-future-prices" className="see-future-btn">See Future Prices</a>
      </div>
    </section>
  );
};

export default ForecastingSection;
