import React from "react";
import CrudLineas from "./CrudMaquinas";
import LineaContextProvider from "../ComponentsCat/Contexts/MaquinasContext";
import { titulos, notificaciones } from "./Objetos/Constantes";

const CatalogoMaquinas = () => {
    return (
        <React.Fragment>
            <LineaContextProvider>
                <CrudLineas titulos={titulos} notificaciones={notificaciones} />
            </LineaContextProvider>
        </React.Fragment>
    );
};

export default CatalogoMaquinas;
