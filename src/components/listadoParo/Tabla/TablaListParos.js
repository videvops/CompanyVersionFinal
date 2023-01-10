import React from 'react'
import { Column } from "primereact/column";
import TablaDesing from '../../indicadoresTurno/UI/DiseñoTabla'
import { CardTabla } from '../../indicadoresTurno/UI/Cards'
import { CardGeneral } from '../../indicadoresTurno/UI/Cards'

const TablaListParos = ({ registros }) => {
    console.log(registros)
//--------------------| Valor que regresara  |--------------------
    return (
        <CardGeneral>
            <CardTabla>
                {
                    registros.length !== 0 ?              // Revisa que haya registros
                        (
                            <TablaDesing datos={registros} >
                                <Column field="fecha" header="Fecha" style={{ textAlign: "center", minWidth: '12rem' }} sortable />
                                <Column field="planta" header="Planta" style={{ textAlign: "center" }} sortable/>
                                <Column field="area" header="Area" style={{ textAlign: "center" }} sortable/>
                                <Column field="linea" header="Linea" style={{ textAlign: "center" }} sortable/>
                                <Column field="maquina" header="Maquina" style={{ textAlign: "center" }} sortable/>
                                <Column field="modoFalla" header="Modo de Falla" style={{ textAlign: "center" }} sortable/>
                                <Column field="inicioParo" header="Inicio de Paro" style={{ textAlign: "center" }} sortable/>
                                <Column field="finParo" header="Fin de Paro" style={{ textAlign: "center" }} sortable/>
                                <Column field="tiempo" header="Tiempo" style={{ textAlign: "center", width: '2rem' }} sortable />
                            </TablaDesing>
                        ) :
                        (<p>No hay registros...</p>)}
            </CardTabla>
        </CardGeneral>
    )
}

export default TablaListParos
