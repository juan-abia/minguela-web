import React from 'react';
import './Horarios.css';

const Horarios = () => {
  return (
    <section id="horarios" className="horarios-section">
      <h2>Horarios</h2>
      <div className="horarios-content">
        <p>Lunes a Viernes: 10:00 - 20:00</p>
        <p>Sábados: 10:00 - 14:00</p>
        <p>Domingos: Cerrado</p>
      </div>
    </section>
  );
};

export default Horarios; 