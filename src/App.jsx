
import React from 'react';
import { motion } from 'framer-motion';

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        🛠️ ConectaPro – Encuentra servicios cerca de ti
      </motion.h1>
      <ul>
        <li>🔧 Plomeros</li>
        <li>🎨 Pintores</li>
        <li>🖌️ Dibujantes</li>
      </ul>
      <p>Pronto podrás buscar y contactar profesionales directamente.</p>
    </div>
  );
}

export default App;
        