import { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './PaginaPrincipal.css'
import TablaCampeones from '../../components/Campeones/Campeones'

function PaginaPrincipal() {
  const [count, setCount] = useState(0)


  return (
    <>
    <Navbar />
    <div className="PaginaPrincipal">
    <h5 className='pagina_principal_titulo'>Catán 2.0</h5>  
    <h2>El juego del cual te enamoraste ahora en versión digital</h2>
      <div className="resumen_juego"> 
      <p> Juega compitiendo por quien domina la <b>Tierra Media</b>, <span>intercambiando materiales, construyendo aldeas y ampliando tu reino.</span> </p> 
      <p> Deberás dar todo lo que tienes si quieres algún día considerarte <b>REY DEL MUNDO</b></p>
      </div>
    <h2>Nuestro Salón de la Fama</h2>
    <p> Algún día tu tambien puedes pertenecer a esta lista...</p>
    <TablaCampeones />

    <h2>¿Listo para jugar?</h2>
    <a className="boton-partida-rapida" href="/partidarapida"> Iniciar Partida Rapida</a>
    </div>

    </>
  )
}

export default PaginaPrincipal

