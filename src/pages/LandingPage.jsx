
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Bienvenido a ConectaPro</h1>
      <p>Encuentra profesionistas confiables como plomeros, electricistas, diseñadores y más.</p>
      <Link to="/registro">
        <button style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
          Registra tu servicio
        </button>
      </Link>
    </div>
  );
};

export default LandingPage;
