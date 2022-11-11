import React from 'react';
import Crud from './Catalogos/Lineas/Crud';
import ProductContextProvider from './Catalogos/Contexts/ProductContext';
import { titulos, notificaciones} from './Catalogos/Lineas/Objetos/Constantes';

const CatalogoLineas = () => {
    return (
        <React.Fragment>
            <ProductContextProvider>
                <Crud titulos={titulos} notificaciones={notificaciones} />
            </ProductContextProvider>
        </React.Fragment>
    )
}

export default CatalogoLineas
