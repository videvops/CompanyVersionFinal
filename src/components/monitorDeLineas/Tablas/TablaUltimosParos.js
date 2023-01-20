import React from 'react'
import { Column } from "primereact/column";
import TablaDesing from "../UI/DiseñoTabla"
import { CardTabla , CardGeneral } from "../UI/Cards"

const registros=[
    {idMaquina:"Maquina1",falla:"Atoron de carton",incParo:"10-12-2021 15:22:50",finParo:"10-12-2021 16:22:50",tiempo:60},
    {idMaquina:"Maquina2",falla:"Falta material",incParo:"11-12-2021 11:45:10",finParo:"11-10-2021 11:50:10",tiempo:5},
    {idMaquina:"Maquina3",falla:"Cuchilla rota",incParo:"16-12-2021 12:07:34",finParo:"17-10-2021 12:07:34",tiempo:1140},
]

const TablaUltimosParos = () => {
    // console.log("Registros desde tabla")
    // console.log(registros)
//--------------------| Valor que regresara  |--------------------
    return (
        <CardGeneral>
            <CardTabla>
                {/* { */}
                    {/* registros ?              // Revisa que haya registros */}
                        {/* ( */}
                        <TablaDesing datos={registros} >
                            <Column field="idMaquina" header="Maquina" style={{ textAlign: "center", minWidth: '12rem' }} sortable />
                            <Column field="falla" header="Modo de Falla" style={{ textAlign: "center" }} sortable/>
                            <Column field="incParo" header="Inicio de paro" style={{ textAlign: "center" }} sortable/>
                            <Column field="finParo" header="Fin de paro" style={{ textAlign: "center" }} sortable/>
                            <Column field="tiempo" header="Tiempo" style={{ textAlign: "center" }} sortable/>
                        </TablaDesing>
                        {/* ) : */}
                        {/* (<p>No hay registros...</p>)} */}
            </CardTabla>
        </CardGeneral>
    )
}

export default TablaUltimosParos
