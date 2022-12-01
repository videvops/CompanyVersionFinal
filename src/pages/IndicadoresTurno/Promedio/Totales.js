import React from "react";
import { PorEficiencia, PorDisponibilidad, PorVelocidad, PorCalidad, PorProducto } from "./Formateo";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

const Totales=(props)=>{
    let promedios=[{
        eficienciaTotal:props.eficienciaTotal,
        disponibilidadTotal:props.disponibilidadTotal,
        velocidadTotal:props.velocidadTotal,
        calidadTotal:props.calidadTotal,
        productoTerminadoTotal:props.productoTerminadoTotal,
    }];

//--------------------| Valor que regresara |--------------------
    return(
        <React.Fragment>
            <h4 style={{ textAlign: "center" }}>Promedios</h4>
            <DataTable value={promedios} style={{ fontSize: "20px", textAlign: "center" }}>
                <Column field="eficienciaTotal" header="Eficiencia Total" body={PorEficiencia}/>
                <Column field="disponibilidadTotal" header="Disponibilidad" body={PorDisponibilidad}/>
                <Column field="velocidadTotal" header="Velocidad" body={PorVelocidad}/>
                <Column field="calidadTotal" header="Calidad" body={PorCalidad}/>
                <Column field="productoTerminadoTotal" header="Producto Terminado(kg)" body={PorProducto}/>
            </DataTable>
        </React.Fragment>
    );
}

export default Totales;