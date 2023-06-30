import React, {useState, useEffect} from "react";
import Tablero from "../Tablero/Tablero";
import './Tablero_completo.css'
import DadoImagenes from "../../Dados/DadoImagenes/DadoImagenes";
import DadoNumeros from "../../Dados/DadoNumeros/DadoNumeros";
import { Link } from "react-router-dom";
import Inventario from "../../CambiarMaterial/Inventario";

function Tablero_completo() {
  const [jugadorActual, setJugadorActual] = useState(null);
  const [numero, setNumero] = useState(localStorage.getItem('numero'));
  const [imagen, setImagen] = useState(localStorage.getItem('imagen'));
  const imagenes = [
      'https://cdn-icons-png.flaticon.com/512/332/332183.png?w=740&t=st=1681842837~exp=1681843437~hmac=a87a854e1c01692c583d7a66047245bc9a7de0050e7c62bb05c4293001be6fa8',
      'https://cdn-icons-png.flaticon.com/512/1254/1254533.png?w=740&t=st=1681842714~exp=1681843314~hmac=60e3db3a5ced15aa00465e14e4fc58572bee70e581f42c58c380060a5332bcbf',
      'https://cdn-icons-png.flaticon.com/512/244/244755.png?w=740&t=st=1681842970~exp=1681843570~hmac=4958b2f89480e8aa928f02df920c822cfe21abe83857a753fc0e7c8fcc0dfff1',
  ];

  useEffect(() => {
    ObtenerJugadorActual();
  }, []);

  const [dadoLanzado, setDadoLanzado] = useState(
    localStorage.getItem('dadoLanzado') === 'true'
  );

  useEffect(() => {
    localStorage.setItem('numero', numero);
    localStorage.setItem('imagen', imagen);
    localStorage.setItem('dadoLanzado', dadoLanzado);
  }, [numero, imagen, dadoLanzado]);

  const ObtenerJugadorActual = async () => {
    try {
      const PORT = 3000;
      const game_id = await ObtenerGameID();
      const response_nombre = await fetch(`https://catan-simple-backend.onrender.com/players/playername/${game_id}`);
      const nombre = await response_nombre.text();
      setJugadorActual(nombre); 
    } catch (error) {
      console.log('Error:', error);
    }}
    

  const manejarBoton = () => {
      return () => {
        window.location.href = "/cambiar_recursos_paso1";
  }}

  const ObtenerGameID = async () => {
    try {
      const PORT = 3000;
      const response_game = await fetch(`https://catan-simple-backend.onrender.com/game`);
      const data_game = await response_game.json();
      const game_id = data_game.id;
      return game_id;
    } catch (error) {
      console.log('Error:', error);
    }}

  const LanzarDadosBackend = async () => {
      try {
        const PORT = 3000;
        const game_id = await ObtenerGameID();
        const randomNumber = Math.floor(Math.random() * 3) + 1;
        setNumero(randomNumber);
        const randomResource = ["wheat", "wood", "clay"][Math.floor(Math.random() * 3)];
        if (randomResource === "clay") {
          setImagen(imagenes[0]);
        } else if (randomResource === "wood") {
          setImagen(imagenes[1]);
        } else {
          setImagen(imagenes[2]);
        }

        const postResponse = await fetch(`https://catan-simple-backend.onrender.com/players/sumdice`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            game_id,
            resource: randomResource,
            quantity: randomNumber,
          }),
        });

        if (postResponse.ok) {
          console.log('POST request successful');
          setDadoLanzado(true);
          window.location.reload();

        } else {
          console.log('POST request failed');
        }
      } catch (error) {
        console.log('Error:', error);
      }};
  
  const construirAldea = async () => {
    try {
      const PORT = 3000;
      const game_id = await ObtenerGameID();
      const recursos = await fetch(`https://catan-simple-backend.onrender.com/players/resources/${game_id}`);
      const data_recurso = await recursos.json();
      if (data_recurso.wood >= 3 && data_recurso.clay >= 2 && data_recurso.wheat >= 1) {
        const postResponse = await fetch(`https://catan-simple-backend.onrender.com/board/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            game_id,
          }),
        });
        const data = await postResponse.json();
        if (data.game_over) {
          alert(`El juego ha terminado, el ganador es ${jugadorActual}`);
          window.location.href = "/paginaprincipal";
        } else {
          window.location.reload();
          alert(`Has construido una aldea`);
        }
      } else {
        alert(`No tienes suficientes recursos para construir una aldea`);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const TerminarTurno = async () => {
    console.log('Terminar turno');

     try {
       const PORT = 3000;
       const game_id = await ObtenerGameID();

       //obtenemos el nombre del jugador saliente a partir del game_id
       const response_nombre_saliente = await fetch(`https://catan-simple-backend.onrender.com/players/playername/${game_id}`);
       const nombre_saliente = await response_nombre_saliente.text();

       const cambioturno = await fetch(`https://catan-simple-backend.onrender.com/game/${game_id}`);

        //obtenemos el nombre del jugador entrante a partir del game_id
        const response_nombre_entrante = await fetch(`https://catan-simple-backend.onrender.com/players/playername/${game_id}`);
        const nombre_entrante = await response_nombre_entrante.text();

       if (cambioturno.ok) {
          await fetch(`https://catan-simple-backend.onrender.com/players/${game_id}`);
          alert(`${nombre_saliente} ha finalizado su turno, turno de ${nombre_entrante}`);
         setJugadorActual(nombre_entrante);
          setDadoLanzado(false);
          setNumero(null);
          setImagen(null);
          window.location.reload();

          
       } else {
         console.log('Error al cambiar de turno');
       }
     } catch (error) {
       console.log('Error:', error);}
  };

  return (
    <div className="tablero-completo">
      <h2> Turno de {jugadorActual}</h2>
        <div className="tableros">
          <Tablero />
          <Inventario />
        </div>
        {dadoLanzado && 
          (<div className="contenedor-dados">
            <div className="dados">
              <DadoNumeros numero={numero} />
              <DadoImagenes imagen={imagen} />
            </div>
          </div>)
        }
        <div className="fila-botones-superior">
          {!dadoLanzado && <button className="boton-lanzar-dados" onClick={LanzarDadosBackend}>¡Lanzar Dados!</button>}
          {dadoLanzado && <button className="boton-construir" onClick={construirAldea}>¡Construir Aldea!</button>}
          {dadoLanzado && <button className="boton-terminar-turno" onClick={TerminarTurno}>Terminar Turno</button>}

        </div>
    </div>
  );
}

export default Tablero_completo;