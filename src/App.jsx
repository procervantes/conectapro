import React from 'react';
import { motion } from 'framer-motion';

function App() {
  return (
    <div style={{ textAlign: 'center', paddingTop: '50px' }}>
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        ¡Bienvenido a ConectaPro!
      </motion.h1>
    </div>
  );
}

export default App;
