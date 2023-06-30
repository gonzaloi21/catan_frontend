import Navbar from '../../components/Navbar/Navbar'
import './ReglasJuego.css'
import LanzarDadosFrontend from '../../components/Dados/LanzarDados/LanzarDados'
import Imagenes from '../../components/SimulacionConstruir/Imagenes'
import GeneracionTablero from '../../components/Tablero/Generar_tablero/Generar_tablero'

function ReglasJuego() {

  return (
    <>
    <Navbar />
    <div className="ReglasJuego">
    <h1 className='reglas-title'>Reglas del Juego</h1>
      <div className="reglas-introduccion">
        
        <p className="parrafo">
          Juego de mesa para 3 jugadores, que se juega en un tablero de 4x4 casillas. El juego consiste en 
          recolectar recursos como madera, arcilla, y trigo, para construir aldeas en las distintas casillas del juego. 
          El objetivo del juego es construir la mayor cantidad de aldeas posibles, y para esto se deben recolectar una 
          cantidad específica de recursos. Se lleva la victoria el primero en conseguir 4 aldeas construidas.
        </p>
        <p className="parrafo">
          El juego inicia con la generación del tablero, el cual posee 16 casillas, 4 de ellas son de tipo desierto, 
          las cuales no poseen recursos. Luego, las 12 restantes se dividen en 3 tipos de recursos, madera, arcilla y 
          trigo, donde hay 4 casillas de cada recurso. La generación del tablero distribuye las casillas de forma 
          aleatoria, por lo que cambiará cada vez que se inicie una nueva partida.
        </p>

        <div className="ejemplo-dados">
          <GeneracionTablero />
        </div>

        <p className="parrafo">
          La partida inicia con todos los jugadores con 0 aldeas construidas, y 0 recursos recolectados. Para comenzar, 
          cada jugador lanzará un dado de 6 caras, y el jugador que obtenga el número más alto, será el que inicie. 
          Cada jugada se divide en dos fases: recolección de recursos y acción del jugador. 

    
        </p>

        <p className="parrafo">
          <b>Primera Fase: </b>
          En la primera fase, el jugador que se encuentra de turno deberá tirar dos dados, el primero posee números del 
          1 al 3, y el segundo posee los recursos madera, arcilla, y trigo. Esta fase de recolección de recursos añadirá 
          el recurso que salió en el segundo dado la cantidad que salió en el primer dado. Por ejemplo, si el jugador 
          obtiene un 2 en el primer dado, y un trigo en el segundo dado, se le sumarán 2 trigos a su inventario. Además, 
          si el jugador posee aldeas construidas, este recibirá el recurso de la casilla en la que se encuentra la aldea. 
          Si la aldea está en un desierto, el jugador no recibirá ningún recurso adicional, y si el jugador posee más de 
          una aldea, este recibirá un recurso por cada aldea que se encuentre en una casilla con recurso.
        </p>
        <div className="ejemplo-dados">
        <h2>Práctica tu suerte:</h2>
          <LanzarDadosFrontend />
        </div>
        <p className="parrafo">
          <b>Segunda Fase: </b>
          En la segunda fase de acción del jugador, este tendrá tres opciones:
          <ul>
            <li>
              Cambiar cartas: El jugador puede cambiar tres cartas del mismo tipo que posea en su inventario por una 
              carta a elección del jugador. Por ejemplo, si el jugador posee 3 trigos, puede cambiarlos por otra carta 
              que él elija, ya sea madera o arcilla.
            </li>
            <li>
              Construir una aldea: El jugador podrá construir una aldea siempre y cuando posea la cantidad de recursos 
              necesarios para construirla. Para construir una aldea, el jugador debe poseer 3 maderas, 2 arcillas y 1 
              trigo. Si el jugador posee los recursos necesarios para construir la aldea y desea hacerlo, esta aparecerá 
              aleatoriamente en una casilla del tablero y, en caso de que la aldea no se contruya en un desierto, podrá 
              recibir el recurso que se encuentra en la casilla de la aldea en todos sus turnos posteriores. En caso de 
              no poseer los recursos necesarios para construir la aldea, el jugador no podrá construirla.
            </li>
            <div className='practica'>
          
        
        <Imagenes />
        </div>
            <li>
              Terminar turno: El jugador puede terminar su turno en cualquier momento, y el siguiente jugador podrá 
              comenzar su turno en la fase de recolección de recursos, tirando dados.
            </li>
          </ul>
        </p>

      </div>
    </div>
    </>
  )
}


export default ReglasJuego
