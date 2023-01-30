import React from 'react'
import { Column } from "primereact/column";
import TablaDesing from '../../indicadoresTurno/UI/DiseñoTabla'
import { CardTabla } from '../../indicadoresTurno/UI/Cards'
import { CardGeneral } from '../../indicadoresTurno/UI/Cards'

const TablaListParos = ({ datos }) => {
//--------------------| Columnas de forma dinamica  |--------------------
    //---> Datos de cada columna
    const columnas = [
        {field:"fecha",header:"Fecha"},
        {field:"planta",header:"Planta"},
        {field:"area",header:"Area"},
        {field:"linea",header:"Linea"},
        {field:"maquina",header:"Maquina"},
        {field:"modoFalla",header:"Modo de Falla"},
        {field:"inicioParo",header:"Inicio de Paro"},
        {field:"finParo",header:"Fin de Paro"},
        {field:"tiempo",header:"Tiempo"},
    ]
    //---> Uso de map para metodo dinamico
    const columnasDinamicas = columnas.map(columna =>
        <Column key={columna.field} field={columna.field} header={columna.header} />
    )

//--------------------| Valor que regresara  |--------------------
    return (
        <CardGeneral>
            <CardTabla>
                <TablaDesing datos={datos} >
                    {/* <Column field="fecha" header="Fecha" style={{ textAlign: "center", minWidth: '12rem' }} sortable />
                    <Column field="planta" header="Planta" style={{ textAlign: "center" }} sortable/>
                    <Column field="area" header="Area" style={{ textAlign: "center" }} sortable/>
                    <Column field="linea" header="Linea" style={{ textAlign: "center" }} sortable/>
                    <Column field="maquina" header="Maquina" style={{ textAlign: "center" }} sortable/>
                    <Column field="modoFalla" header="Modo de Falla" style={{ textAlign: "center" }} sortable/>
                    <Column field="inicioParo" header="Inicio de Paro" style={{ textAlign: "center" }} sortable/>
                    <Column field="finParo" header="Fin de Paro" style={{ textAlign: "center" }} sortable/>
                    <Column field="tiempo" header="Tiempo" style={{ textAlign: "center",  width: '2rem' }} sortable/> */}
                    {columnasDinamicas}
                </TablaDesing>
            </CardTabla>
        </CardGeneral>
    )
}

export default TablaListParos
