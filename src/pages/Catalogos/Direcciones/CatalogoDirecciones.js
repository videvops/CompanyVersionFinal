import React from 'react';
//CAMBIAR...
import CrudDirecciones from './CrudDirecciones';
import DireccionContextProvider from '../ComponentsCat/Contexts/DireccionContext';

//CAMBIAR...
import { titulos,notificaciones } from './Objetos/ConstDirecciones';

const CatalogoDirecciones = () => {
    return (
        <React.Fragment>
            <DireccionContextProvider>
                <CrudDirecciones titulos={titulos} notificaciones={notificaciones} />
            </DireccionContextProvider>
        </React.Fragment>
    )
}

export default CatalogoDirecciones

