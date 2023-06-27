import React, { useState, useEffect } from 'react';
import './LanzarDados.css';
import DadoImagenes from '../DadoImagenes/DadoImagenes';
import DadoNumeros from '../DadoNumeros/DadoNumeros';

function LanzarDadosFrontend() {
    const [numero, setNumero] = useState(null);
    const [imagen, setImagen] = useState(null);
    const imagenes = [
        'https://cdn-icons-png.flaticon.com/512/332/332183.png?w=740&t=st=1681842837~exp=1681843437~hmac=a87a854e1c01692c583d7a66047245bc9a7de0050e7c62bb05c4293001be6fa8',
        'https://cdn-icons-png.flaticon.com/512/1254/1254533.png?w=740&t=st=1681842714~exp=1681843314~hmac=60e3db3a5ced15aa00465e14e4fc58572bee70e581f42c58c380060a5332bcbf',
        'https://cdn-icons-png.flaticon.com/512/244/244755.png?w=740&t=st=1681842970~exp=1681843570~hmac=4958b2f89480e8aa928f02df920c822cfe21abe83857a753fc0e7c8fcc0dfff1',
    ];
    function TirarDado() {
        const numeroAleatorio = Math.floor(Math.random() * 3) + 1;
        const numeroAleatorio2 = Math.floor(Math.random() * 3) + 1;
        setNumero(numeroAleatorio);
        setImagen(imagenes[numeroAleatorio2 - 1]);
    }
    return (
        <div className="contenedor-dados">
            <div className="dados">
                <DadoNumeros numero={numero} />
                <DadoImagenes imagen={imagen} />
            </div>
            <button className="boton-dado" onClick={TirarDado}>Lanzar Dados</button>
        </div>
    )
}


export default LanzarDadosFrontend;