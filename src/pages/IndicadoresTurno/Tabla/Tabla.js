import React, { useState, useEffect } from "react";
import TablaDesing from "../UI/DiseñoTabla";
import Totales from "../Promedio/Totales";
import { Column } from "primereact/column";
import { DatosFicticios } from "../Valores/Contantes";
import { ColorStatus, ColorEficiencia, ColorDisponibilidad, ColorVelocidad, ColorCalidad } from "../Colores/Colores";
import { CardGeneral, CardTabla } from "../UI/Cards";
import { PromedioCalidad, PromedioDisponibilidad, PromedioEfecto, PromedioProducto, PromedioVelocidad } from "../Promedio/Funciones";

const Tabla = () => {
//--------------------| Valores fijos |--------------------
    const porcentajes=DatosFicticios;

//--------------------| Sacar promedio |--------------------
    const [promEfic,setPromEfic]=useState(0);
    const [promDisp,setPromDisp]=useState(0);
    const [promVel,setPromVel]=useState(0);
    const [promCal,setPromCal]=useState(0);
    const [promProduct,setPromProduct]=useState(0);

    const Promedios=(data)=>{
        let resultadoEfec=PromedioEfecto(data);
        setPromEfic(resultadoEfec);

        let resultadoDisp=PromedioDisponibilidad(data);
        setPromDisp(resultadoDisp);

        let resultadoVel=PromedioVelocidad(data);
        setPromVel(resultadoVel);

        let resultadoCal=PromedioCalidad(data)
        setPromCal(resultadoCal);

        let resultadoProduc=PromedioProducto(data);
        setPromProduct(resultadoProduc);
    }

//--------------------| Renderizado por tiempo |--------------------
    useEffect(() => {
        const interval = setInterval(() => {    // Renderizado por intervalos de tiempo
            Promedios(porcentajes);
            console.log('Se actualizo...');
        }, 1000);                               // Cada segundo se renderizara
        return () => clearInterval(interval);   // Elimina el efecto secundario anterior
    });

//--------------------| Valor que regresara |--------------------
    return (
        <CardGeneral>
                    <CardTabla>
                        <TablaDesing datos={porcentajes}>
                            <Column field="status" header="Status" sortable body={ColorStatus}/>
                            <Column field="linea" header="Linea" style={{ textAlign: "center" }} sortable/>
                            <Column field="eficiencia" header="Eficiencia" style={{ textAlign: "center" }} sortable body={ColorEficiencia}/>
                            <Column field="disponibilidad" header="Disponibilidad" style={{ textAlign: "center" }} sortable body={ColorDisponibilidad}/>
                            <Column field="velocidad" header="Velocidad" style={{ textAlign: "center" }} sortable body={ColorVelocidad}/>
                            <Column field="calidad" header="Calidad" style={{ textAlign: "center" }} sortable body={ColorCalidad}/>
                            <Column field="producto" header="Producto Terminado(kg)" style={{ textAlign: "center" }} sortable/>
                        </TablaDesing>
                    </CardTabla>
            <CardTabla>
                <Totales
                eficiencia={promEfic}
                disponibilidad={promDisp}
                velocidad={promVel}
                calidad={promCal}
                producto={promProduct}
                />
            </CardTabla>
        </CardGeneral>
    );
};

export default Tabla;