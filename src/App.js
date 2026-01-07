import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Team from './pages/Team';
import Work from './pages/Work';

import YouthfestHome from "./pages/youthfest/youthfestHome";
import Youthfest2024 from "./pages/youthfest/youthfest2024";
import Youthfestevent from "./pages/youthfest/events";


import './App.css';


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
     
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/work" element={<Work />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/youthfest" element={<Youthfest />} /> */}
          
          <Route path="/youthfest" element={<YouthfestHome />} />
          <Route path="/youthfest/2024" element={<Youthfest2024 />} />
          <Route path="/youthfest/event" element={<Youthfestevent />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;