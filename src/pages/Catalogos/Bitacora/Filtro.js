import React,{useEffect, useState} from "react"
import BitacoraTbl from './BitacoraTbl';
import {CardTabla } from "../../../components/indicadoresTurno/UI/Cards";
import {Service} from "../../../service/Service";
import { MultiSelect } from 'primereact/multiselect';
import { Calendar } from 'primereact/calendar';
import {PLANTAS_GET_COMBO} from "../../../genericos/Uris"
import {BITACORA_POST_FILTER} from "../../../genericos/Uris"
import { Dialog } from "primereact/dialog";
import { Button } from 'primereact/button';



const Filtro = (props) =>{

    const servicioPlantas = new Service();
    const servicioBitacora = new Service();
    const [plantas,setPlantas] = useState([]);
    const [planta,setPlanta] = useState([]);
    //fecha Inc & Fin
    const [fechaInicio,setFechaInicio] = useState([]);
    const [fechaFin,setFechaFin] = useState([]);
    
    
    //consultamos plantas
    useEffect(()=>{
     console.log("Calling use effect")
        getPlantas();
    },[]);

    //Botones accion
      //botones dialog
  const botonesAccion = () => {
    return (
        <div>
            <Button label="Cancelar" icon="pi pi-times" onClick={cancelarFiltro} className="p-button-text" />
            <Button label="Consultar" icon="pi pi-check" onClick={()=>enviarFiltro({from:"button"})} autoFocus />
        </div>
    );
  }

   const getPlantas = ()=>{
    servicioPlantas.baseUrl=servicioPlantas.baseUrl+PLANTAS_GET_COMBO
    servicioPlantas.readAll().then(resp=>{
    console.log(resp)
    setPlantas(resp);
    }).catch(resp=>{
       console.log(resp)
    });

   }
  //Botones Accion
   const cancelarFiltro=()=>{

    console.log("Closing dialog");
    props.onHideFilter(false)  
    
  }
  
  const enviarFiltro=(request)=>{
     console.log("Sending filter from filter component")

     console.log(request.from)
     let bodyBitacora = {
        "page":0,
        "total":5
    }
     servicioBitacora.baseUrl=servicioBitacora.baseUrl+BITACORA_POST_FILTER
     if(!(request.from==="button")){
        bodyBitacora.page=request.page
    }
    
     servicioBitacora.create(bodyBitacora).then(resp=>{
        console.log(resp)
        props.getBitacoraC(resp);
     }).then(resp=>{
        console.log(resp)

     });

     
     
    
  }
  
  const closeDialog = ()=>{
   

  }


    return (
       <>
            <Dialog header="Filtro para Bítacora" visible={props.dialogP} footer={botonesAccion}  >
                <div className="grid p-fluid">
                    <div className="col-12 ">
                        <label className="font-bold">Planta</label>
                        <MultiSelect
                        optionLabel="planta" 
                        optionValue="id"
                        placeholder="Selecciona una planta" 
                        options={plantas} 
                        value={planta} 
                        onChange={(e) => {setPlanta(e.target.value)}} 
                        maxSelectedLabels={1}
                        />
                        <div className="field col-12">
                        <label className="font-bold">Hora inicio</label>
                        <Calendar 
                        id="time24" 
                        dateFormat="yy/mm/dd"
                        value={fechaInicio} 
                        onChange={(e) => setFechaInicio(e.value)} 
                        showTime 
                        placeholder="--Fecha Inicio--" 
                        />
                    </div>
                    <div className="field col-12">
                        <label className="font-bold">Hora Fin</label>
                        <Calendar 
                        id="time24" 
                        dateFormat="yy/mm/dd"
                        value={fechaFin} 
                        onChange={(e) => setFechaFin(e.value)} 
                        showTime 
                        placeholder="--Fecha Fin--" 
                        />
                    </div>
                    </div>
                </div>
            </Dialog> 
            <CardTabla>
              <BitacoraTbl bitacoraListP={props.bitacoraListE} totalRecordsP={props.totalRegistersE} enviarFiltroE={enviarFiltro} ></BitacoraTbl>
            </CardTabla>           
       </>

    );

} 

export default Filtro;