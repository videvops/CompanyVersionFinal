import React, { useState } from "react";
import TituloComponent from "../../../genericos/TituloComponent";
import Filtro from "./Filtro";
import { Button } from 'primereact/button';


const Bitacora = () =>{
   // Bitacora
  const [bitacoraList,setBitacoraList] = useState([]);
  const [plantas,setPlantas] = useState([]);
 
  //Pages and Total registers
  const [pages,setPages] = useState([]);
  const [totalRegisters,setTotalRegisters] = useState([]);

  //Filtros
   const [fechaInc , setFechaInc] = useState();
   const [fechaFin , setFechaFin] = useState();

   //Muestr Filtro
  const [ showFiltro,setShowFiltro]= useState(false);

   //muestra modal
   const [dialog,setDialog] = useState(false);
 
  const closeDialog =(isShow)=>{
     console.log("closing dialog from bitacora ")
     console.log(isShow)
     setDialog(false);
  }

  const getBitacora = (data)=>{
    console.log("printing from parent")
   console.log(data);
   setBitacoraList([]);
   data.bitacora.forEach(element => {
      console.log(element);
      
      setBitacoraList(oldArray => [...oldArray, 
          {
           accion: element.accion,createBy:element.createBy,modulo: element.modulo, createOn:element.createOn
          }]);
   });
   setTotalRegisters(data.numTotalReg);

   setDialog(false);
  }

   return (
       <>
       
       <TituloComponent />
        <br/>
        <Button label="Filtro" icon="pi pi-filter-fill" onClick={() => setDialog(true)} /> 
        <br/>
         <Filtro dialogP={dialog} onHideFilter={closeDialog} bitacoraListE={bitacoraList} totalRegistersE={totalRegisters}  getBitacoraC={getBitacora}  ></Filtro>
       </>
   );
}

export default Bitacora;