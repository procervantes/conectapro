import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Bienvenido a ConectaPro</h1>
      <p>Conecta con profesionistas de confianza.</p>
      <Link to="/registro"><button>Registrarse como profesionista</button></Link>
    </div>
  )
}