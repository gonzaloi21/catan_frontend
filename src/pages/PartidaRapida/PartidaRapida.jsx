import { useState } from 'react';
import Tablero_completo from '../../components/Tablero/Tablero_completo/Tablero_completo';
import './PartidaRapida.css'

function PartidaRapida() {
    const volverAPaginaAnterior = () => {
        window.history.back();
      }


    return (
      <>
      <div className="partida-rapida">

      <h5 className='partida-rapida-titulo'>¡Que gane el mejor!</h5>
        <Tablero_completo />
      </div>
      <a className="boton-volver" href="/paginaprincipal"> Volver</a>
      </>
    )

}

export default PartidaRapida