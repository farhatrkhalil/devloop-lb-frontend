import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LatestEvents from "./components/LatestEvents";
import StatsSection from "./components/StatsSection";
import AcademiesSection from "./components/AcademiesSection";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import SubmitEvent from "./pages/SubmitEvent";
import Events from "./pages/Events";
import Academies from "./pages/Academies";
import "./App.css";

// Home page component
const Home: React.FC = () => {
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
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/submit-event" element={<SubmitEvent />} />
        <Route path="/events" element={<Events />} />
        <Route path="/academies" element={<Academies />} />
      </Routes>
    </Router>
  );
}

export default App;
