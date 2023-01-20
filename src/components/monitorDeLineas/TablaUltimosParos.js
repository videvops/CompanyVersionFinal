import React from 'react'
import { Column } from "primereact/column";
import TablaDesing from "../indicadoresTurno/UI/DiseñoTabla"
import { CardTabla , CardGeneral } from "../indicadoresTurno/UI/Cards"

const registros=[
    {maquina:"Maquina1",modoFalla:"Atoron de carton",tiempo:60,frecuencia:30},
    {maquina:"Maquina2",modoFalla:"Falta material",tiempo:5,frecuencia:3},
    {maquina:"Maquina3",modoFalla:"Cuchilla rota",tiempo:1140,frecuencia:1},
]


const TablaUltimosParos = () => {
//--------------------| Valor que regresara  |--------------------
    return (
        <CardGeneral>
            <CardTabla>
                {/* { */}
                    {/* registros ?              // Revisa que haya registros */}
                        {/* ( */}
                            <TablaDesing datos={registros} >
                                <Column field="maquina" header="Maquina" style={{ textAlign: "center", minWidth: '12rem' }} sortable />
                                <Column field="modoFalla" header="Modo de Falla" style={{ textAlign: "center" }} sortable/>
                                <Column field="tiempo" header="Tiempo" style={{ textAlign: "center", width: '2rem' }} sortable />
                                <Column field="frecuencia" header="Frecuencia" style={{ textAlign: "center" }} sortable/>
                            </TablaDesing>
                        {/* ) : */}
                        {/* (<p>No hay registros...</p>)} */}
            </CardTabla>
        </CardGeneral>
    )
}

export default TablaUltimosParos
