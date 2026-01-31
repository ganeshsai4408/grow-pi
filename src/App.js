import React from 'react';
import Navbar from './assets/components/Navbar';
import Hero from './assets/components/Hero';
import Services from './assets/components/Services';
import Process from './assets/components/Process';
import Works from './assets/components/Work';
import Testimonials from './assets/components/Testimonials';
import CTA from './assets/components/CTA';
import Contact from './assets/components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Works/>
      <Testimonials />
      
      <Contact />

    </div>
  );
}

export default App;