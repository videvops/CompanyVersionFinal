import React, { useEffect, useState } from "react";
import Axios from "axios";
import { MultiSelect } from 'primereact/multiselect';

const Cabezal=()=>{
//--------------------| MultiSelect de Areas  |--------------------
    //---> Obtener registros de back-end
    const [areasDisponibles, setAreasDisponibles]=useState([])
    useEffect(() => {
        Axios.get("http://localhost:8080/areas/planta/1").then(res=>setAreasDisponibles(res.data))
    }, [])

    //---> Lista de areas seleccionadas
    const [areas,setAreas]=useState([])
    useEffect(()=>{
        if(areas.length>0){
            console.log(areas)
        }
    },[areas])

//--------------------| Valor que regresara  |--------------------
    return(
    <div className="col-12 ">
        <div className="card mb-0" style={{ textAlign: "center", background: "#6366f2" }}>
            <span className=" font-bold" style={{ fontSize: "25px", color: "white" }}>
                Indicadores de Turno
            </span>
        </div>
        <h5 className=" font-bold" style={{ fontSize: "25px" }}>
            Status en Tiempo Real
        </h5>
        <MultiSelect 
        optionLabel="area" 
        optionValue="id"
        placeholder="Selecciona una area" 
        options={areasDisponibles} 
        value={areas} 
        onChange={(e) => {setAreas(e.target.value)}} 
        maxSelectedLabels={1}
        />
    </div>
    );
}

export default Cabezal;