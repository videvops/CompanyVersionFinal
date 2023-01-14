import React, { useState } from 'react'
import CabezalListParos from '../components/listadoParo/Cabezal/CabezalListParos'
import TablaListParos from '../components/listadoParo/Tabla/TablaListParos'

const ListadoParos = () => {
    const [registros, setRegistros] = useState([]) 

//--------------------| Valor que regresara  |--------------------
    return (
        <>
            <CabezalListParos 
                setRegistros={setRegistros}     // Se actualizan los registros 
            /> 
            <TablaListParos 
                registros={registros}           // Se muestran los registros
            /> 
        </>
    )
}

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname;
};

export default React.memo(ListadoParos, comparisonFn);
