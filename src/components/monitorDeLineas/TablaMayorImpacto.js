import React from 'react'
import { Column } from "primereact/column";
import TablaDesing from "../indicadoresTurno/UI/DiseñoTabla"
import { CardTabla , CardGeneral } from "../indicadoresTurno/UI/Cards"

const TablaMayorImpacto = () => {
//--------------------| Valor que regresara  |--------------------
const registros=[
    {maquina:"Maquina1",modoFalla:"Atoron de carton",inicioParo:"10-12-2021 15:22:50",finParo:"10-12-2021 16:22:50",tiempo:60},
    {maquina:"Maquina2",modoFalla:"Falta material",inicioParo:"11-12-2021 11:45:10",finParo:"11-10-2021 11:50:10",tiempo:5},
    {maquina:"Maquina3",modoFalla:"Cuchilla rota",inicioParo:"16-12-2021 12:07:34",finParo:"17-10-2021 12:07:34",tiempo:1140},
]

    return (
        <CardGeneral>
            <CardTabla>
                {/* { */}
                    {/* registros ?              // Revisa que haya registros */}
                        {/* ( */}
                            <TablaDesing datos={registros} >
                                <Column field="maquina" header="Maquina" style={{ textAlign: "center", minWidth: '12rem' }} sortable />
                                <Column field="modoFalla" header="Modo de Falla" style={{ textAlign: "center" }} sortable/>
                                <Column field="inicioParo" header="Inicio de paro" style={{ textAlign: "center" }} sortable/>
                                <Column field="finParo" header="Fin de paro" style={{ textAlign: "center" }} sortable/>
                                <Column field="tiempo" header="Tiempo[min]" style={{ textAlign: "center" }} sortable/>
                            </TablaDesing>
                        {/* ) : */}
                        {/* (<p>No hay registros...</p>)} */}
            </CardTabla>
        </CardGeneral>
    )
}

export default TablaMayorImpacto
