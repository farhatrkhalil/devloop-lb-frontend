import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LatestEvents from './components/LatestEvents';
import StatsSection from './components/StatsSection';
import AcademiesSection from './components/AcademiesSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <LatestEvents />
      <StatsSection />
      <AcademiesSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;