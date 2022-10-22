import React, { useState, useEffect } from "react";
import TablaDesing from "../UI/DiseñoTabla";
import Totales from "../Promedio/Totales";
import { Column } from "primereact/column";
import { DatosFicticios } from "../Valores/Contantes";
import { ColorStatus, ColorEficiencia, ColorDisponibilidad, ColorVelocidad, ColorCalidad } from "../Colores/Colores";

const Tabla = () => {
//--------------------| Valores fijos |--------------------
    const porcentajes=DatosFicticios;

//--------------------| Sacar promedio |--------------------
    const [promEfic,setPromEfic]=useState(0);
    const [promDisp,setPromDisp]=useState(0);
    const [promVel,setPromVel]=useState(0);
    const [promCal,setPromCal]=useState(0);
    const [promProduct,setPromProduct]=useState(0);
    const PromEfec=()=>{
        const json = JSON.stringify(porcentajes);
        const data = JSON.parse(json);      //Convirtiendo a objeto javascript
        let suma= 0;
        let contador=0;
        for(let x in data){                 //Recorriendo el objeto
            suma += data[x].eficiencia;     //Ahora que es un objeto javascript, tiene propiedades
            contador++;
        }
        setPromEfic(suma/contador);
    }

    const PromDisp=()=>{
        const json = JSON.stringify(porcentajes);
        const data = JSON.parse(json);      //Convirtiendo a objeto javascript
        let suma= 0;
        let contador=0;

        for(let x in data){                     //Recorriendo el objeto
            suma += data[x].disponibilidad;     //Ahora que es un objeto javascript, tiene propiedades
            contador++;
        }
        setPromDisp(suma/contador);
    }

    const PromVel=()=>{
        const json = JSON.stringify(porcentajes);
        const data = JSON.parse(json);      //Convirtiendo a objeto javascript
        let suma= 0;
        let contador=0;

        for(let x in data){                     //Recorriendo el objeto
            suma += data[x].velocidad;     //Ahora que es un objeto javascript, tiene propiedades
            contador++;
        }
        setPromVel(suma/contador);
    }

    const PromCal=()=>{
        const json = JSON.stringify(porcentajes);
        const data = JSON.parse(json);      //Convirtiendo a objeto javascript
        let suma= 0;
        let contador=0;

        for(let x in data){                     //Recorriendo el objeto
            suma += data[x].calidad;     //Ahora que es un objeto javascript, tiene propiedades
            contador++;
        }
        setPromCal(suma/contador);
    }

    const PromProduct=()=>{
        const json = JSON.stringify(porcentajes);
        const data = JSON.parse(json);      //Convirtiendo a objeto javascript
        let suma= 0;
        let contador=0;

        for(let x in data){                     //Recorriendo el objeto
            suma += data[x].producto;     //Ahora que es un objeto javascript, tiene propiedades
            contador++;
        }
        setPromProduct(suma/contador);
    }

//--------------------| Renderizado por tiempo |--------------------
    useEffect(()=>{
        console.log("Se ejecuto");
        PromEfec();
        PromDisp();
        PromVel();
        PromCal();
        PromProduct();
    });

//--------------------| Valor que regresara |--------------------
    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <TablaDesing datos={porcentajes}>
                        <Column field="status" header="Status" sortable body={ColorStatus}/>
                        <Column field="linea" header="Linea" style={{ textAlign: "center" }} sortable/>
                        <Column field="eficiencia" header="Eficiencia" style={{ textAlign: "center" }} sortable body={ColorEficiencia}/>
                        <Column field="disponibilidad" header="Disponibilidad" style={{ textAlign: "center" }} sortable body={ColorDisponibilidad}/>
                        <Column field="velocidad" header="Velocidad" style={{ textAlign: "center" }} sortable body={ColorVelocidad}/>
                        <Column field="calidad" header="Calidad" style={{ textAlign: "center" }} sortable body={ColorCalidad}/>
                        <Column field="producto" header="Producto Terminado(kg)" style={{ textAlign: "center" }} sortable/>
                    </TablaDesing>
                </div>
            </div>
            <Totales
            eficiencia={promEfic}
            disponibilidad={promDisp}
            velocidad={promVel}
            calidad={promCal}
            producto={promProduct}
            />
        </div>
    );
};

export default Tabla;