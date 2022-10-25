import React from "react";
import { PorEficiencia, PorDisponibilidad, PorVelocidad, PorCalidad, PorProducto } from "./Formateo";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

const Totales=(props)=>{
    let promedios=[{
        eficiencia:props.eficiencia,
        disponibilidad:props.disponibilidad,
        velocidad:props.velocidad,
        calidad:props.calidad,
        producto:props.producto
    }];

//--------------------| Valor que regresara |--------------------
    return(
        <React.Fragment>
            <h4 style={{ textAlign: "center" }}>Promedios</h4>
            <DataTable value={promedios} style={{ fontSize: "20px", textAlign: "center" }}>
                <Column field="eficiencia" header="Eficiencia" body={PorEficiencia}/>
                <Column field="disponibilidad" header="Disponibilidad" body={PorDisponibilidad}/>
                <Column field="velocidad" header="Velocidad" body={PorVelocidad}/>
                <Column field="calidad" header="Calidad" body={PorCalidad}/>
                <Column field="producto" header="Producto Terminado(kg)" body={PorProducto}/>
            </DataTable>
        </React.Fragment>
    );
}

export default Totales;