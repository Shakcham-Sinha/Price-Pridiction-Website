
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './BufferStockSection.css'; 

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BufferStockSection = () => {
  const data = {
    labels: ['Potatos', 'Onions', 'Tomatos', 'Brinjals', 'Locky', 'Chillys'],
    datasets: [
      {
        label: 'Current Stock (in Metric Tons)',
        data: [2000, 3000, 1500, 2500, 1800, 5000],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
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
        text: 'Current Buffer Stock Levels',
      },
    },
  };

  return (
    <section className="buffer-stock-section">
      {/* Title */}
      <h2>Buffer Stock Management</h2>

      {/* Description */}
      <p>
        The Department of Consumer Affairs maintains buffer stock for key commodities like pulses and onions to
        ensure market stability. Strategic interventions are made to release stocks during periods of high volatility, ensuring stable prices for consumers.
      </p>

      {/* Bar Graph */}
      <div className="stock-bar-graph">
        <Bar data={data} options={options} />
      </div>

      {/* Learn More Button */}
      <div className="learn-more-button">
        <a href="#learn-more" className="learn-more-btn">Learn More About Buffer Stock</a>
      </div>
    </section>
  );
};

export default BufferStockSection;
