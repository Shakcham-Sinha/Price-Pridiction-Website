import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import DataVisualizationSection from './DataVisualizationSection';
import BufferStockSection from './BufferStockSection';
import ForecastingSection from './ForecastingSection';
import CallToActionSection from './CallToActionSection';
import TestimonialsSection from './TestimonialsSection';
import BlogNewsSection from './BlogNewsSection';
import ContactSupportSection from './ContactSupportSection';
import Footer from './Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <DataVisualizationSection />
      <BufferStockSection />
      <ForecastingSection />
      <CallToActionSection />
      <TestimonialsSection />
      <BlogNewsSection />
      <ContactSupportSection />
      <Footer />
    </div>
  )
}

export default App
