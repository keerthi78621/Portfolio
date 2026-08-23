import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import FullStack from './components/FullStack';
import AIData from './components/AIData';
import Projects from './components/Projects';
import CodingPractice from './components/CodingPractice';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <FullStack />
      <AIData />
      <Projects />
      <CodingPractice />
      <Certifications />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
