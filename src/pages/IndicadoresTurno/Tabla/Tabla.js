import Axios from "axios";
import React, { useState, useEffect } from "react";
import TablaDesing from "../UI/DiseñoTabla";
import Totales from "../Promedio/Totales";
import { Column } from "primereact/column";
// import { ProgressSpinner } from 'primereact/progressspinner'
import { CardGeneral, CardTabla } from "../UI/Cards";
import { ColorEficiencia, ColorDisponibilidad, ColorVelocidad, ColorCalidad } from "../Colores/Colores";
import { PromedioCalidad, PromedioDisponibilidad, PromedioEfecto, PromedioProducto, PromedioVelocidad } from "../Promedio/Funciones";

const Tabla = () => {
//--------------------| Obtencion de datos del back-end |--------------------
    const [registros,setRegistros]=useState([])
    // const [cargando,setCargando]=useState(false)

    useEffect(()=>{
        // const cargarDatos=()=>{
        //     setCargando(true)
        //     const url="http://localhost:8080/indicadores/linea/1"
        //     const res= Axios.get(url)
        //     setRegistros(res.data.registros)
        //     setCargando(false)
        // }
        // cargarDatos()
        // console.log(registros.length)
        Axios.get("http://localhost:8080/indicadores/linea/1").then(res => setRegistros(res.data.registros))
    },[])

//--------------------| Sacar promedios |--------------------
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

//--------------------| Obtencion de promedios en tiempo real |--------------------
    useEffect(() => {
        const interval = setInterval(() => {    // Renderizado por intervalos de tiempo
            Promedios(registros)                // Actualizara los promedios
            console.log('Promedios actualizados')
        }, 5000)                               // Cada 5 seg se renderizara
        return () => clearInterval(interval)   // Elimina el efecto secundario anterior
    });

//--------------------| Valor que regresara |--------------------
    return (
        <CardGeneral>
            {/* {cargando && <ProgressSpinner />} */}
            <>
                <CardTabla>
                    <TablaDesing datos={registros}>
                        <Column field="idLinea" header="ID Linea" sortable/>
                        <Column field="linea" header="Linea" style={{ textAlign: "center" }} sortable/>
                        <Column field="eficiencia" header="Eficiencia" style={{ textAlign: "center" }} sortable body={ColorEficiencia}/>
                        <Column field="disponibilidad" header="Disponibilidad" style={{ textAlign: "center" }} sortable body={ColorDisponibilidad}/>
                        <Column field="velocidad" header="Velocidad" style={{ textAlign: "center" }} sortable body={ColorVelocidad}/>
                        <Column field="calidad" header="Calidad" style={{ textAlign: "center" }} sortable body={ColorCalidad}/>
                        <Column field="productoTerminado" header="Producto Terminado(kg)" style={{ textAlign: "center" }} sortable/>
                    </TablaDesing>
                </CardTabla>
            <CardTabla>
                <Totales
                eficienciaTotal={promEfic}
                disponibilidadTotal={promDisp}
                velocidadTotal={promVel}
                calidadTotal={promCal}
                productoTerminadoTotal={promProduct}
                />
            </CardTabla>
            </>
        </CardGeneral>
    );
};

export default Tabla;