import React, { useEffect, useState } from "react";
import "./Tablero/Tablero.css";
import Casilla_Arcilla from "../Casillas/CasillaArcilla/CasillaArcilla";
import Casilla_Madera from "../Casillas/CasillaMadera/CasillaMadera";
import Casilla_Trigo from "../Casillas/CasillaTrigo/CasillaTrigo";
import Casilla_Desierto from "../Casillas/CasillaDesierto/CasillaDesierto";

function TableroEjemplo() {
//   const [listaCasillas, setListaCasillas] = useState([]);

//   useEffect(() => {
//     const obtenerListaCasillas = async () => {
//       try {

//         const response_game = await fetch("http://localhost:8000/game");
//         const data_game = await response_game.json();
//         const game_id = data_game.id;

//         const response = await fetch(`http://localhost:8000/board/${game_id}`);
//         const data = await response.json();
//         setListaCasillas(data.lista_casillas);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     obtenerListaCasillas();
//   }, []);

//   if (listaCasillas.length !== 16) {
//     return null; // Mostrar un estado de carga o un mensaje mientras se obtiene la lista de casillas
//   }

    function generarArrayAleatorio() {
        const opciones = ["arcilla", "madera", "desierto", "paja"];
        let arrayAleatorio = [];

        // Generar un array con 4 repeticiones de cada opción
        opciones.forEach(opcion => {
          for (let i = 0; i < 4; i++) {
            arrayAleatorio.push(opcion);
          }
        });
    
        // Barajar el array aleatorio
        arrayAleatorio = shuffleArray(arrayAleatorio);
    
        return arrayAleatorio;
      }

      // Función para barajar un array utilizando el algoritmo de Fisher-Yates
      function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }


    const listaCasillas = generarArrayAleatorio();
    console.log(listaCasillas);
  

  const tablero = [];
  const tamanoFila = 4;

  for (let i = 0; i < listaCasillas.length; i += tamanoFila) {
    const fila = listaCasillas.slice(i, i + tamanoFila);
    tablero.push(fila);
  }

  return (
    <table>
      <tbody>
        {tablero.map((fila, index) => (
          <tr key={index}>
            {fila.map((casilla, casillaIndex) => {
              if (casilla === "arcilla") {
                return <Casilla_Arcilla key={casillaIndex} />;
              } else if (casilla === "madera") {
                return (
                  <td key={casillaIndex} className="casilla-madera">
                    <Casilla_Madera />
                  </td>
                );
              } else if (casilla === "paja") {
                return (
                  <td key={casillaIndex} className="casilla-trigo">
                    <Casilla_Trigo />
                  </td>
                );
              } else if (casilla === "desierto") {
                return (
                  <td key={casillaIndex} className="casilla-desierto">
                    <Casilla_Desierto />
                  </td>
                );
              } else {
                return null;
              }
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableroEjemplo;