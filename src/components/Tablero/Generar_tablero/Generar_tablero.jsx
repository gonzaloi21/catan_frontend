import React, { useState, useEffect } from 'react';
import TableroEjemplo from '../TableroEjemplo';
import './Generar_tablero.css';

function GeneracionTablero() {

  
  const [generarTablero, setGenerarTablero] = useState(false);

  // función para generar un nuevo tablero aleatorio
  const generarNuevoTablero = () => {
    setGenerarTablero(true);
    <TableroEjemplo/>
  }

  // verifica el estado de generarTablero
  if (generarTablero) {
    // genera un nuevo tablero aleatorio
    // actualiza el estado de generarTablero a false para evitar la generación infinita de tableros
    setGenerarTablero(false);
  }

  return (
    <div className='elementos'>
        <h2>Existen miles de opciones de Tablero!</h2>
        <TableroEjemplo />
      <button className='boton-generar' onClick={generarNuevoTablero}>Generar nuevo tablero</button>
    </div>
  );
}

export default GeneracionTablero;
