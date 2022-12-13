import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { MultiSelect } from 'primereact/multiselect';
import { MensajeFiltro } from "../../Catalogos/ComponentsCat/Mensajes/Mensajes";

const Cabezal=()=>{
//--------------------| MultiSelect de Lineas  |--------------------
    //---> Obtener registros de back-end
    const [lineasDisponibles, setLineasDisponibles]=useState([])
    useEffect(() => {
        Axios.get("http://localhost:8080/lineas").then(res=>setLineasDisponibles(res.data))
    }, [])

    //---> Lista de areas seleccionadas
    const [lineas,setLineas]=useState([])
    useEffect(()=>{
        if(lineas.length>0){
            console.log(lineas)
        }
    },[lineas])

//--------------------| MultiSelect de Periodo  |--------------------
    //---> Obtener registros de back-end
    const periodosDisponibles=[
        {"periodo":"periodo1","id":1},
        {"periodo":"periodo2","id":2},
    ]

    //---> Lista de periodos seleccionados
    const [periodos,setPeriodos]=useState([])
    useEffect(()=>{
        if(periodos.length>0){
            console.log(periodos)
        }
    },[periodos])

//--------------------| MultiSelect de Periodo  |--------------------
    //---> Obtener registros de back-end
    const fabricasDisponibles=[
        {"fabrica":"fabrica1","id":1},
        {"fabrica":"fabrica2","id":2},
    ]

    //---> Lista de periodos seleccionados
    const [fabricas,setFabricas]=useState([])
    useEffect(()=>{
        if(fabricas.length>0){
            console.log(fabricas)
        }
    },[fabricas])

//--------------------| Para filtro  |--------------------
    const [dialogo,setDialogo]=useState(false)                              // Para mostrar dialogo
    const [esValido,setEsValido]=useState(true)
    //---> Validara antes de mandar el filtro
    const enviarFiltro=()=>{
        if(lineas.length<1 || periodos.length<1 || fabricas.length<1 ){
            setEsValido(false)
            return;
        }
        const arregloFiltros=[[...lineas],[...periodos],[...fabricas]]      // Arreglo de arreglos
        console.log(arregloFiltros)
        setEsValido(true)
        setDialogo(false)
    }
    //---> Limpiara los filtros
    const cancelarFiltro=()=>{
        setLineas([])
        setPeriodos([])
        setFabricas([])
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
            optionLabel="linea" 
            optionValue="id"
            placeholder="--Lineas--" 
            options={lineasDisponibles} 
            value={lineas} 
            onChange={(e) => {setLineas(e.target.value)}} 
            maxSelectedLabels={1}
            />
            <MultiSelect 
            optionLabel="periodo" 
            optionValue="id"
            placeholder="--Periodos--" 
            options={periodosDisponibles} 
            value={periodos} 
            onChange={(e) => {setPeriodos(e.target.value)}} 
            maxSelectedLabels={1}
            />
            <MultiSelect 
            optionLabel="fabrica" 
            optionValue="id"
            placeholder="--Fabricas--" 
            options={fabricasDisponibles} 
            value={fabricas} 
            onChange={(e) => {setFabricas(e.target.value)}} 
            maxSelectedLabels={1}
            />
            {!esValido && MensajeFiltro}
        </Dialog>
    </div>
    );
}

export default Cabezal;