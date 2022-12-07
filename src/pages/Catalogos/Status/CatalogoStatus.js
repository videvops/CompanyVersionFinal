import React from "react";
//CAMBIAR...
import CrudTurnos from "./CrudStatus.js";
import TurnoContextProvider from "../ComponentsCat/Contexts/StatusContext";

import { titulos, notificaciones } from "./Objetos/Constantes"; // CAMBIAR...

const CatalogoTurnos = () => {
    return (
        <React.Fragment>
            <TurnoContextProvider>
                <CrudTurnos titulos={titulos} notificaciones={notificaciones} />
            </TurnoContextProvider>
        </React.Fragment>
    );
};

export default CatalogoTurnos;
