import Navbar from '../../components/Navbar/Navbar'
import React from "react";
import './Acerca_del_equipo.css';
import IntegrantesEquipo from '../../components/IntegrantesEquipo/IntegrantesEquipo';

function Acerca_del_equipo() {
    return (
        <>
        <Navbar />
        <div className="acerca_equipo">
        <h5 className='acerca_equipo_titulo'>Acerca del equipo</h5>
            <div className="integrantes">
                <IntegrantesEquipo nombre="Gonzalo Irarrázaval" descripcion="Estudiante de Ingeniería UC, perteneciente al mayor de TI. Me encantar conocer de lugares y experiencias nuevas. Mi motivación para este proyecto es profundizar mis conociemientos y hacer el catán mas entretenido." foto="../../../integrante1.jpg" github="https://github.com/gonzaloi21" />
            </div>
            <div className="integrantes">
                <IntegrantesEquipo nombre="Sebastián López" descripcion="Soy estudiante de Ingeniería UC, y pertenezco al major de software. Me gusta hacer deporte y estar con amigos, y mi objetivo para este proyecto es armar un juego entretenido que me den ganas de jugar." foto="../../../integrante2.jpg" github="https://github.com/sebalopeza" />
            </div>
        </div>
        </>
    );
    }

export default Acerca_del_equipo;