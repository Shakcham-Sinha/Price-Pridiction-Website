
import React, { useState } from 'react';
import './DataVisualizationSection.css';
import Slider from 'react-slick';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DataVisualizationSection = () => {
  const [selectedCommodity, setSelectedCommodity] = useState('Onions');
  const commodityData = {
    Onions: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      data: [100, 200, 150, 300, 250, 400],
    },
    Potatos: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      data: [120, 220, 180, 250, 270, 350],
    },
    Tomatos: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      data: [130, 210, 160, 280, 240, 310],
    },
  };

  const chartData = {
    labels: commodityData[selectedCommodity].labels,
    datasets: [
      {
        label: `${selectedCommodity} Price Trends`,
        data: commodityData[selectedCommodity].data,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section className="data-visualization-section">
      <h2>Real-Time Data at Your Fingertips</h2>
      
      
      <div className="commodity-selector">
        <select onChange={(e) => setSelectedCommodity(e.target.value)} value={selectedCommodity}>
          <option value="Onions">Onions</option>
          <option value="Potatos">Potatos</option>
          <option value="Tomatos">Tomatos</option>
        </select>
      </div>

      
      <div className="slider-container">
        <Slider {...sliderSettings}>
          <div>
            <Line data={chartData} options={chartOptions} />
          </div>
        </Slider>
      </div>

      
      <div className="dashboard-button">
        <a href="#full-dashboard" className="view-dashboard-btn">View Full Dashboard</a>
      </div>
    </section>
  );
};

export default DataVisualizationSection;
