import React from 'react';
import './Campeones.css';
import { useState, useEffect } from 'react'; // Importamos el hook useEffect

function TablaCampeones() {

  const [listaCampeones, setListaCampeones] = useState([]);

  useEffect(() => {
    const obtenerListaCampeones = async () => {
      try {
        const PORT = 3000;

        const campeones = await fetch(`https://catan-simple-backend.onrender.com/users`);
        const data_campeones = await campeones.json();

        setListaCampeones(data_campeones);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerListaCampeones();
  }, []);


  let lista_top_5 = [];
  if (listaCampeones.length > 5) {
    lista_top_5 = listaCampeones.slice(0, 5);
  } else {lista_top_5 = listaCampeones;} 

  console.log(lista_top_5);

  return (
    <table className='tabla-campeones'>
      <thead>
        <tr className='encabezado'>
          <th>Id Usuario</th>
          <th>Mail</th>
          <th>Estrellas</th>
        </tr>
      </thead>
      <tbody>
        {listaCampeones.map((dato) => (
          <FilaTabla key={dato.id} dato={dato} />
        ))}
      </tbody>
    </table>
  );
}

function FilaTabla(props) {
  const { id, mail, wins} = props.dato;

  return (
    <tr className='datos'>
      <td className='dato-nombre'>{id}</td>
      <td className='dato-lema'>{mail}</td>
      <td className='dato-estrellas'>{wins}</td>
    </tr>
  );
}

export default TablaCampeones;

