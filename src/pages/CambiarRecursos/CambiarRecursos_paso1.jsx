import { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Inventario from '../../components/CambiarMaterial/Inventario';

function CambiarRecursos_paso1() {
    const volverAPaginaAnterior = () => {
        window.location.href = "/partidarapida";
      }
    return (
      <>
      <div className="cambiar-recursos">
        
      <h5 className='cambiar-recursos-titulo'>¡Cambia tus recursos!</h5>  
      
        <Navbar />
        <Inventario />
      
      </div>
      <button className="boton-volver" onClick={volverAPaginaAnterior}>Volver</button>

  
      </>
    )

}

export default CambiarRecursos_paso1