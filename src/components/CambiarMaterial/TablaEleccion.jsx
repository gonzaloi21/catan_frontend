import React from 'react';
import './TablaEleccion.css';
import { useState, useEffect } from 'react';

function TablaEleccion(props) {
  const { resource1 } = props;

  const [listaRecursos, setListaRecursos] = useState([
    { id: 1, nombre: "wood", cantidad: null, imagen: "https://cdn-icons-png.flaticon.com/512/1254/1254533.png?w=740&t=st=1681842714~exp=1681843314~hmac=60e3db3a5ced15aa00465e14e4fc58572bee70e581f42c58c380060a5332bcbf" },
    { id: 2, nombre: "clay", cantidad: null, imagen: "https://cdn-icons-png.flaticon.com/512/332/332183.png?w=740&t=st=1681842837~exp=1681843437~hmac=a87a854e1c01692c583d7a66047245bc9a7de0050e7c62bb05c4293001be6fa8" },
    { id: 3, nombre: "wheat", cantidad: null, imagen: "https://cdn-icons-png.flaticon.com/512/244/244755.png?w=740&t=st=1681842970~exp=1681843570~hmac=4958b2f89480e8aa928f02df920c822cfe21abe83857a753fc0e7c8fcc0dfff1" }
  ]);

  const listaRecursosFiltrada = listaRecursos.filter(recurso => recurso.nombre !== resource1);

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

  const EnviarResources = async (resource2) => {
    console.log(resource1, resource2);

    const PORT = 3000;
    const response_game = await fetch(`https://catan-simple-backend.onrender.com/game`);
    const data_game = await response_game.json();
    const game_id = data_game.id;

    const game_id_codificado = encodeURIComponent(game_id);
    const resource1_codificado = encodeURIComponent(resource1);
    const resource2_codificado = encodeURIComponent(resource2);

    let url = `https://catan-simple-backend.onrender.com/players/change`;

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({ game_id: game_id_codificado, resource1: resource1_codificado, resource2: resource2_codificado }),
    })
    .then((response) => {
        window.location.href = "/partidarapida";
    })
    .catch((error) => {setDisplayValue("Error");});
}

  return (
    <table className='tabla-recursos'>
      <caption><h5>Elige qué recurso quieres!</h5></caption>
      <tbody>
        {listaRecursosFiltrada.map((recurso) => (
          <FilaTabla key={recurso.id} recurso={recurso} EnviarResources={EnviarResources} />
        ))}
      </tbody>
    </table>
  );
}

function FilaTabla(props) {
  const { nombre, cantidad, imagen } = props.recurso;

  const handleButtonClick = () => {
    props.EnviarResources(nombre);
  };

  return (
    <tr className='datos'>
      <td className='dato-image'>
        <img src={imagen} alt={nombre} />
      </td>
      <td className='dato-quantity'>{cantidad}</td>
      <td>
        <button onClick={handleButtonClick}>Quiero {nombre}!</button>
      </td>
    </tr>
  );
}

export default TablaEleccion;
