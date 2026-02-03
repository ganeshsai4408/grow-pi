import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/components/Navbar';
import Hero from './assets/components/Hero';
import Services from './assets/components/Services';
import Process from './assets/components/Process';
import Works from './assets/components/Work';
import Testimonials from './assets/components/Testimonials';
import Contact from './assets/components/Contact';
import CaseStudy1 from './assets/components/CaseStudy1';
import CaseStudy2 from './assets/components/CaseStudy2';

import './App.css';

// Home page component
const HomePage = () => (
  <>
    <Navbar />
    <Hero />
    <Services />
    <Process />
    <Works />
    <Testimonials />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/case-study/scrble" element={<CaseStudy1 />} />
          <Route path="/case-study/bl" element={<CaseStudy2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
