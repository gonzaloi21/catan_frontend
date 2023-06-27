import React from "react";
import './IntegrantesEquipo.css';

function IntegrantesEquipo(props) {
    const {nombre, descripcion,foto, github} = props;
    return (
        <div className="IntegrantesEquipo">
            <h2 className="nombre-integrante">{nombre}</h2>
            <div className="acercade">
                <div className="text-acercade">
                    <div className="parrafo-acercade">
                        {descripcion}
                    </div>
                    <div className="github-acercade">
                        <h3 className="github-integrante">Github:</h3>
                        <a href={`${github}`} class="github-link">
                            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" className="icon-img"/>
                        </a>
                    </div>
                </div>
                <div className="foto-integrante">
                    <img src={`${foto}`} alt="img-integrante" className="img-integrante" />
                </div>
            </div>
        </div>
    )
}

export default IntegrantesEquipo;