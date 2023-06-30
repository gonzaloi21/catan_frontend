import React, { useEffect, useState } from "react";
import "./Tablero.css";
import Casilla_Arcilla from "../../Casillas/CasillaArcilla/CasillaArcilla";
import Casilla_Madera from "../../Casillas/CasillaMadera/CasillaMadera";
import Casilla_Trigo from "../../Casillas/CasillaTrigo/CasillaTrigo";
import Casilla_Desierto from "../../Casillas/CasillaDesierto/CasillaDesierto";
import Casilla_Player from "../../Casillas/CasillaPlayer/CasillaPlayer";

const PORT = 3000;

function Tablero() {
  const [listaCasillas, setListaCasillas] = useState([]);
  const [listaPlayers, setListaPlayers] = useState([]);

  useEffect(() => {
    const obtenerListaCasillas = async () => {
      try {

        const response_game = await fetch(`https://catan-simple-backend.onrender.com/game`);
        const data_game = await response_game.json();
        const game_id = data_game.id;

        const response = await fetch(`https://catan-simple-backend.onrender.com/board/${game_id}`);
        const data = await response.json();
        setListaCasillas(data.lista_casillas);
        setListaPlayers(data.lista_player);
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
  let fila = [];
  for (let i = 0; i < listaCasillas.length; i++) {
    const casilla = listaCasillas[i];
    const player = listaPlayers[i];
    if (player !== null) {
      fila.push([player, casilla]);
    } else {
      fila.push(casilla);
    }
    if (fila.length === 4) {
      tablero.push(fila);
      fila = [];
    }
  }
  console.log(tablero);

  return (
    <table>
      <tbody>
        {tablero.map((fila, index) => (
          <tr key={index}>
            {fila.map((casilla, casillaIndex) => {
              if (casilla === "canteen") {
                return (
                  <td key={casillaIndex} className="casilla-arcilla">
                    <Casilla_Arcilla />
                  </td>
                );
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
                return (
                  <td key={casillaIndex} className="casilla-player">
                    <Casilla_Player player_id={casilla[0]} recurso={casilla[1]}/>
                  </td>
                );
              }
            })}
          </tr>
        ))}
      </tbody>
    </table>
    
  );
}

export default Tablero;
