import { useEffect } from "react";
import "./DadoNumeros.css";

function DadoNumeros({ numero }) {
    return (
        <div className="dado-numero">
            {numero !== null && <h1 className="numero">{numero}</h1>}
            {numero === null && <h1 className="numero">?</h1>}
        </div>
      );
}

export default DadoNumeros;