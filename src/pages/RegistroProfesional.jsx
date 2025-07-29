
import React from 'react';

const RegistroProfesional = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h2>Formulario de Registro para Profesionistas</h2>
      <form>
        <label>Nombre completo:</label><br />
        <input type="text" name="nombre" /><br /><br />
        <label>Servicio que ofreces:</label><br />
        <input type="text" name="servicio" /><br /><br />
        <label>Correo electrónico:</label><br />
        <input type="email" name="correo" /><br /><br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default RegistroProfesional;
