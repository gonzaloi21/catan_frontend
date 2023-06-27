import React, { useEffect, useState } from "react";
import "./Tablero.css";
import Casilla_Arcilla from "../Casillas/CasillaArcilla/CasillaArcilla";
import Casilla_Madera from "../Casillas/CasillaMadera/CasillaMadera";
import Casilla_Trigo from "../Casillas/CasillaTrigo/CasillaTrigo";
import Casilla_Desierto from "../Casillas/CasillaDesierto/CasillaDesierto";

const PORT = 3000;

function Tablero() {
  const [listaCasillas, setListaCasillas] = useState([]);

  useEffect(() => {
    const obtenerListaCasillas = async () => {
      try {

        const response_game = await fetch(`http://localhost:${PORT}/game`);
        const data_game = await response_game.json();
        const game_id = data_game.id;

        const response = await fetch(`http://localhost:${PORT}/board/${game_id}`);
        const data = await response.json();
        setListaCasillas(data.lista_casillas);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerListaCasillas();
  }, []);

  if (listaCasillas.length !== 16) {
    return null; // Mostrar un estado de carga o un mensaje mientras se obtiene la lista de casillas
  }

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
              if (casilla === "canteen") {
                return <Casilla_Arcilla key={casillaIndex} />;
              } else if (casilla === "forest") {
                return (
                  <td key={casillaIndex} className="casilla-madera">
                    <Casilla_Madera />
                  </td>
                );
              } else if (casilla === "farm") {
                return (
                  <td key={casillaIndex} className="casilla-trigo">
                    <Casilla_Trigo />
                  </td>
                );
              } else if (casilla === "desert") {
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

export default Tablero;
