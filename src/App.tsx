import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LatestEvents from './components/LatestEvents';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <LatestEvents />
    </div>
  );
}

export default App;