import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <a href="https://booksy.com/" target="_blank" rel="noopener noreferrer" className="btn-primary">
          Reservar
        </a>
      </div>
      <a href="#horarios" className="scroll-down">
        Horarios
        <span className="arrow"></span>
      </a>
    </section>
  );
};

export default Hero; 