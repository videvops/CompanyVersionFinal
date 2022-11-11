import React from 'react';
import Crud from './Catalogos/Plantas/Crud';
import ProductContextProvider from './Catalogos/Contexts/ProductContext';
import { titulos, notificaciones } from './Catalogos/Plantas/Objetos/Constantes';

const CatalogoPlantas = () => {
    return (
        <React.Fragment>
        <ProductContextProvider>
            <Crud titulos={titulos} notificaciones={notificaciones} />
        </ProductContextProvider>
    </React.Fragment>
    )
}

export default CatalogoPlantas
