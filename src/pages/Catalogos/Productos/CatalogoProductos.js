import React from "react";
import CrudProductos from "./CrudProductos";
import ProductosContextProvider from "../ComponentsCat/Contexts/ProdutosContext";
import { titulos, notificaciones } from "./Objetos/Constantes";

const CatalogoProductos = () => {
    return (
        <React.Fragment>
            <ProductosContextProvider>
                <CrudProductos titulos={titulos} notificaciones={notificaciones} />
            </ProductosContextProvider>
        </React.Fragment>
    );
};

export default CatalogoProductos;
