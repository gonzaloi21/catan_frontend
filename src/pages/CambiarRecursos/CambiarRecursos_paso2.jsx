import Navbar from '../../components/Navbar/Navbar';
import { useParams } from 'react-router-dom';
import TablaEleccion from '../../components/CambiarMaterial/TablaEleccion';

function CambiarRecursos_paso2() {
    const volverAPaginaAnterior = () => {
        window.location.href = "/partidarapida";
      }
    let resource1  = useParams();
    resource1 = resource1.nombre
    console.log(resource1)

    return (
      <>
      <div className="cambiar-recursos">
        
      <h5 className='cambiar-recursos-titulo'>¡Cambia tus recursos!</h5>  
      
        <Navbar />
        <TablaEleccion resource1={resource1}/>
      
      </div>
      
      <button className="boton-volver" onClick={volverAPaginaAnterior}>Volver</button>

  
      </>
    )

}

export default CambiarRecursos_paso2