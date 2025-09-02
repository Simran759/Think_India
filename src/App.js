import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Team from './pages/Team';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Youthfest from './pages/Youthfest';
// import ScrollToTop from './components/ScrollToTop';
import './App.css';
import ScrollToTop from './ScrollToTop';

// Create a wrapper component to use useLocation hook
function App() {
  const location = useLocation();

  // Disable browser's scroll restoration
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/work" element={<Work />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/youthfest" element={<Youthfest />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;