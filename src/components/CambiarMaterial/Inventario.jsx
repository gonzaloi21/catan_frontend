import React from 'react';
import './Inventario.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Inventario() {

  const [listaRecursos, setListaRecursos] = useState([
      { id: 1, nombre: "wood", cantidad: null, imagen: "https://cdn-icons-png.flaticon.com/512/1254/1254533.png?w=740&t=st=1681842714~exp=1681843314~hmac=60e3db3a5ced15aa00465e14e4fc58572bee70e581f42c58c380060a5332bcbf" },
      { id: 2, nombre: "clay", cantidad: null, imagen: "https://cdn-icons-png.flaticon.com/512/332/332183.png?w=740&t=st=1681842837~exp=1681843437~hmac=a87a854e1c01692c583d7a66047245bc9a7de0050e7c62bb05c4293001be6fa8" },
      { id: 3, nombre: "wheat", cantidad: null, imagen: "https://cdn-icons-png.flaticon.com/512/244/244755.png?w=740&t=st=1681842970~exp=1681843570~hmac=4958b2f89480e8aa928f02df920c822cfe21abe83857a753fc0e7c8fcc0dfff1" }
    ]);

  useEffect(() => {
    const obtenerListaRecursos = async () => {
      try {
        const PORT = 3000;

        const response_game = await fetch(`https://catan-simple-backend.onrender.com/game`);
        const data_game = await response_game.json();
        const game_id = data_game.id;


        const recursos = await fetch(`https://catan-simple-backend.onrender.com/players/resources/${game_id}`);
        const data_recurso = await recursos.json();

        const actualizarRecursos = () => {
            setListaRecursos(prevRecursos => {
              return prevRecursos.map(recurso => {
                if (data_recurso.hasOwnProperty(recurso.nombre)) {
                  return {
                    ...recurso,
                    cantidad: data_recurso[recurso.nombre]
                  };
                }
                return recurso;
              });
            });
          };;
        actualizarRecursos();
      } catch (error) {
        console.log(error);
      }
    };
    obtenerListaRecursos();
  }, []);


  return (
    <table className='tabla-recursos'>
      <caption><h5>Puedes cambiar 3 recursos del mismo tipo por 1 a elección</h5></caption>
      <tbody>
        {listaRecursos.map((recurso) => (
          <FilaTabla key={recurso.id} recurso={recurso} />
        ))}
      </tbody>
    </table>
  );
}

function FilaTabla(props) {
    const { nombre, cantidad, imagen } = props.recurso;
    
    return (
      <tr className='datos'>
        <td className='dato-image'>
          <img src={imagen} alt={nombre} />
        </td>
        <td className='dato-quantity'>{cantidad}</td>
        <td className='dato-button'>
          {cantidad >= 3 ? (
            <Link to={`/cambiar_recurso_paso2/${nombre}`} className="boton-cambiar-recursos">
              Cambiar
            </Link> 
          ) : (
            <button disabled>Necesitas 3 {nombre} para cambiar</button>
          )}
        </td>
      </tr>
    );
  }

export default Inventario;
