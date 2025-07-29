import React from 'react'

export default function Register() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Registro de Profesionistas</h2>
      <form>
        <label>Nombre:</label><br />
        <input type="text" /><br /><br />
        <label>Ocupación:</label><br />
        <input type="text" /><br /><br />
        <button type="submit">Registrar</button>
      </form>
    </div>
  )
}