import React, { useState } from 'react'
import CabezalListParos from '../components/listadoParo/Cabezal/CabezalListParos'
import TablaListParos from '../components/listadoParo/Tabla/TablaListParos'

const ListadoParos = () => {
    // Nota: declarar una funcion aqui para comprobar si la tabla tiene registros
    const [registros, setRegistros] = useState([])
    const datosFicticios = [
        {fecha:"12-10-2001",planta:"Planta1",area:"Area1",linea:"Linea1",maquina:"maquina1",modoFalla:"Falla1",inicioParo:"12:33",finParo:"12:31",tiempo:1},
        {fecha:"14-06-2012",planta:"Planta2",area:"Area2",linea:"Linea2",maquina:"maquina2",modoFalla:"Falla2",inicioParo:"10:12",finParo:"10:14",tiempo:2},
        {fecha:"17-11-2015",planta:"Planta3",area:"Area3",linea:"Linea3",maquina:"maquina3",modoFalla:"Falla3",inicioParo:"01:50",finParo:"01:51",tiempo:1},
        {fecha:"23-04-2011",planta:"Planta4",area:"Area4",linea:"Linea4",maquina:"maquina4",modoFalla:"Falla4",inicioParo:"05:47",finParo:"05:48",tiempo:1},
        {fecha:"09-02-2009",planta:"Planta5",area:"Area5",linea:"Linea5",maquina:"maquina5",modoFalla:"Falla5",inicioParo:"03:05",finParo:"03:06",tiempo:1},
    ]

//--------------------| Valor que regresara  |--------------------
    return (
        <>
            <CabezalListParos
                setRegistros={setRegistros}     // Se actualizan los registros
            />
            <TablaListParos
                datos={datosFicticios}
                registros={registros}
            />
        </>
    )
}

export default ListadoParos
