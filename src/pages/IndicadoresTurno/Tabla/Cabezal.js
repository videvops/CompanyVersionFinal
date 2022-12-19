import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import { MensajeFiltro } from "../../Catalogos/ComponentsCat/Mensajes/Mensajes";

const Cabezal=()=>{
//--------------------| MultiSelect de Plantas  |--------------------
    //---> Obtener registros de back-end
    const plantasDisponibles=[
        {planta:"planta1","id":1},
        {planta:"planta2","id":2},
    ]

    //---> Lista de periodos seleccionados
    const [plantas,setPlantas]=useState([])
    // useEffect(()=>{
    //     if(plantas.length>0){
    //         console.log(plantas)
    //     }
    // },[plantas])

//--------------------| MultiSelect de Periodo  |--------------------
    //---> Obtener registros de back-end
    const areasDisponibles=[
        {area:"area1","id":1},
        {area:"area2","id":2},
    ]

    //---> Lista de periodos seleccionados
    const [areas,setAreas]=useState([])
    // useEffect(()=>{
    //     if(areas.length>0){
    //         console.log(areas)
    //     }
    // },[areas])

//--------------------| MultiSelect de Lineas  |--------------------
    //---> Obtener registros de back-end
    const [lineasDisponibles, setLineasDisponibles]=useState([])
    useEffect(() => {
        Axios.get("http://localhost:8080/lineas").then(res=>setLineasDisponibles(res.data))
    }, [])

    //---> Lista de areas seleccionadas
    const [lineas,setLineas]=useState([])
    // useEffect(()=>{
    //     if(lineas.length>0){
    //         console.log(lineas)
    //     }
    // },[lineas])

//--------------------| Campo para fecha con horas  |--------------------
    const [fechaInicio,setFechaInicio]=useState(null)
    const [fechaFin,setFechaFin]=useState(null)

//--------------------| Para filtro  |--------------------
    const [dialogo,setDialogo]=useState(false)                          // Para mostrar dialogo
    const [esValido,setEsValido]=useState(true)
    //---> Validara antes de mandar el filtro
    const enviarFiltro=()=>{
        if(lineas.length<1 || plantas.length<1 || areas.length<1 ){     // Si hay un campo vacio
            setEsValido(false)
            return;
        }
        const arregloFiltros=[...lineas]                                // Arreglo de lineas
        console.log(arregloFiltros)
        console.log(fechaInicio)
        setEsValido(true)
        setDialogo(false)
    }
    //---> Limpiara los filtros
    const cancelarFiltro=()=>{
        setPlantas([])
        setAreas([])
        setLineas([])
        setFechaInicio(null)
        setFechaFin(null)
        setEsValido(true)
        setDialogo(false)
    }

    const botonesAccion = () => {
        return (
            <div>
                <Button label="Cancelar" icon="pi pi-times" onClick={cancelarFiltro} className="p-button-text" />
                <Button label="Consultar" icon="pi pi-check" onClick={enviarFiltro} autoFocus />
            </div>
        );
    }

    const mensajeHandler=()=>{
        console.log("Se abandono el campo")
    }
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
        <Button label="Filtro" icon="pi pi-filter-fill" onClick={() => setDialogo(true)} />
        <Dialog header="Filtro para indicadores de turno" visible={dialogo} footer={botonesAccion} onHide={() => setDialogo(false)}>            
            <MultiSelect 
            optionLabel="planta" 
            optionValue="id"
            placeholder="--Plantas--" 
            options={plantasDisponibles} 
            value={plantas} 
            onChange={(e) => {setPlantas(e.target.value)}} 
            maxSelectedLabels={1}
            onBlur={mensajeHandler}
            />
            <MultiSelect 
            optionLabel="area" 
            optionValue="id"
            placeholder="--Areas--" 
            options={areasDisponibles} 
            value={areas} 
            onChange={(e) => {setAreas(e.target.value)}} 
            maxSelectedLabels={1}
            onBlur={mensajeHandler}
            />
            <MultiSelect 
            optionLabel="linea" 
            optionValue="id"
            placeholder="--Lineas--" 
            options={lineasDisponibles} 
            value={lineas} 
            onChange={(e) => {setLineas(e.target.value)}} 
            maxSelectedLabels={1}
            onBlur={mensajeHandler}
            />
            <Calendar 
            id="time24" 
            dateFormat="yy/mm/dd"
            value={fechaInicio} 
            onChange={(e) => setFechaInicio(e.value)} 
            showTime 
            placeholder="--Fecha Inicio--" 
            />
            <Calendar 
            id="time24" 
            dateFormat="yy/mm/dd"
            value={fechaFin} 
            onChange={(e) => setFechaFin(e.value)} 
            showTime 
            placeholder="--Fecha Fin--" 
            />
            {!esValido && MensajeFiltro}
        </Dialog>
    </div>
    );
}

export default Cabezal;