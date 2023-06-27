import React from 'react';
import ImageSlider from './ImageSlider';
import './Imagenes.css'

const imagenes = [
'../../imagenes_construir/img_0.jpg',
'../../imagenes_construir/img_1.jpg',
'../../imagenes_construir/img_2.jpg',
'../../imagenes_construir/img_3.jpg',
'../../imagenes_construir/img_4.jpg'];

function Imagenes() {
  return (
    <div className='simulacion'>
      <h3 className='titulo-simulacion'>Simulación de un jugador Construyendo Aldeas</h3>
      <ImageSlider images={imagenes} />
    </div>
  );
}

export default Imagenes;
