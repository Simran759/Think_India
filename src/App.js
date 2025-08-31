import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Team from './pages/Team';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Youthfest from './pages/Youthfest';
import './App.css';

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App; 