import React, { useState } from 'react';

function App() {
  const [form, setForm] = useState({ nombre: '', email: '', descripcion: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulario enviado correctamente.');
    setForm({ nombre: '', email: '', descripcion: '' });
  }

  return (
    <div className="container">
      <h2>Registro de Profesionista</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" placeholder="Nombre completo" value={form.nombre} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Correo electrónico" value={form.email} onChange={handleChange} required />
        <textarea name="descripcion" placeholder="Describe tu actividad profesional" value={form.descripcion} onChange={handleChange} required></textarea>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default App;