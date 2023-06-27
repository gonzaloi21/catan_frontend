import { useEffect } from "react";
import "./DadoImagenes.css";

function DadoImagenes({ imagen }) {
    return (
        <div className="dado-imagen">
          {imagen !== null && (
            <img src={imagen} alt="" className="imagen-obtenida" />
          )}
          {imagen===null && (
            <h1 className="imagen-desconocida">?</h1>
          )}
        </div>
      );
}

export default DadoImagenes;