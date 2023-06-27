import { BrowserRouter, Routes, Route } from "react-router-dom"
import Acerca_del_equipo from "../pages/Acerca_del_equipo/Acerca_del_equipo"
import LandingPage from "../pages/LandingPage/LandingPage"
import PaginaPrincipal from "../pages/PaginaPrincipal/PaginaPrincipal"
import ReglasJuego from "../pages/ReglasJuego/ReglasJuego"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import PartidaRapida from "../pages/PartidaRapida/PartidaRapida"
import CambiarRecursos_paso1 from "../pages/CambiarRecursos/CambiarRecursos_paso1"
import CambiarRecursos_paso2 from "../pages/CambiarRecursos/CambiarRecursos_paso2"

function Routing () {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path={'/signup'} element={<SignUpPage />} />
                <Route path={'/infoequipo'} element={<Acerca_del_equipo />} />
                <Route path={'/paginaprincipal'} element={<PaginaPrincipal/>} />
                <Route path={'/partidarapida'} element={<PartidaRapida/>} />
                <Route path={'/reglasjuego'} element={<ReglasJuego/>} />
                <Route path={'/cambiar_recursos_paso1'} element={<CambiarRecursos_paso1/>} />
                
                <Route path={'/cambiar_recurso_paso2/:nombre'} element={<CambiarRecursos_paso2/>} />

                <Route path={'/'} element={<LandingPage/>} />
            </Routes>
        </BrowserRouter>
        </>
    )   
}

export default Routing 