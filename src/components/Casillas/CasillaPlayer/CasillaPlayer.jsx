import React, {useState, useEffect} from 'react';
import './CasillaPlayer.css';

function Casilla_Player (props) {
    const {player_id, recurso} = props;
    const [player, setPlayer] = useState(null);
    const getPlayerName = async () => {
        try {
            const PORT = 3000;
            const response = await fetch(`https://catan-simple-backend.onrender.com/players/playernamebyid/${player_id}`);
            const name = await response.text();
            setPlayer(name);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getPlayerName();
    }, []);
    const images = [
        'https://img.freepik.com/vector-premium/casa-dibujos-animados_11460-1609.jpg',
        'https://img.freepik.com/vector-gratis/diseno-dibujos-animados-casa-doodle_1308-93798.jpg',
        'https://static.vecteezy.com/system/resources/previews/011/795/207/non_2x/cartoon-house-and-the-sun-in-the-grass-field-vector.jpg',
    ]
    const indice_imagen = player_id % 3;


    return (
        <td className={recurso}>
            <img src={images[indice_imagen]} alt="" className='imagen-player'/>
            <h6 className="player-title">{player}</h6>
        </td>
    );
}

export default Casilla_Player;