import React, {useEffect, useState} from 'react'
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { productDialogFooter } from '../../ComponentsCat/Botones/CrearRegistro';
import { botonSiguiente } from '../../ComponentsCat/Botones/BotonSiguiente'
import { Mensaje } from '../../ComponentsCat/Mensajes/Mensajes';
import Axios from 'axios';
import CrearM2 from './CrearM2';

const CrearM1 = ({ productDialog, titulos, hideDialog, product, updateField, saveProduct, siguienteModal, siguiente }) => {
//--------------------| Dropdown dinamico|--------------------
    //---> Plantas
    const [plantasDisponibles,setPlantasDisponibles]=useState([])
    useEffect(() => {
        Axios.get("http://localhost:8080/plantas/list").then(res=>setPlantasDisponibles(res.data))
    }, [])

    const [areasDisponibles, setAreasDisponibles]=useState([])
    useEffect(() => {
        if(product.idPlanta!==''){
            Axios.get(`http://localhost:8080/areas/planta/${product.idPlanta}`).then(res=>setAreasDisponibles(res.data))
        }
    }, [product.idPlanta])

    const [lineasDisponibles,setLineasDisponibles]=useState([])
    useEffect(() => {
        if(product.idArea!==''){
            Axios.get(`http://localhost:8080/lineas/area/${product.idArea}`).then(res=>setLineasDisponibles(res.data))
        }
    }, [product.idArea])

//--------------------| Validar campos  |--------------------
    const [validarNombre, setValidarNombre] = useState("");                // Validar nombre de turno
    const [boton, setBoton] = useState(false);                             // Activar o desactivar boton
    const exprNombre = /^[a-zA-Z0-9._-]{1,40}$/;                          // Nombres,numeros y guiones
    //---> Nombre
    const VerificarNombre=(texto)=>{
        if (!exprNombre.test(texto)){
            setValidarNombre("p-invalid");
            setBoton(true);
            
        }else{
            setValidarNombre("");
            setBoton(false);
        }
    }


//--------------------| Botones de confirmacion |--------------------
    //------> Botones para crear registro
    const crearRegistro=productDialogFooter(hideDialog,saveProduct,boton);
    const continuarRegistros = botonSiguiente(hideDialog, siguienteModal,boton)

//--------------------| Valor que regresara  |--------------------
    return (
        <Dialog 
            visible={productDialog} 
            style={{ width: '450px' }} 
            header={titulos.VentanaCrear} 
            modal 
            className="p-fluid" 
            footer={continuarRegistros} 
            onHide={hideDialog}
        >
            <div className="field">
                <label>Planta</label>
                <Dropdown 
                    optionLabel="planta" 
                    optionValue="id" 
                    value={product.idPlanta} 
                    options={plantasDisponibles} 
                    onChange={(e) => {updateField(e.value, "idPlanta")}} 
                    placeholder="--Selecciona una planta--"
                />
            </div>
            <div className="field">
                <label>Area</label>
                <Dropdown 
                    optionLabel="area" 
                    optionValue="id" 
                    value={product.idArea} 
                    options={areasDisponibles} 
                    onChange={(e) => {updateField(e.value, "idArea")}} 
                    placeholder="--Selecciona una area--"
                />
            </div>
            <div className="field">
                <label>Linea</label>
                <Dropdown 
                    optionLabel="linea" 
                    optionValue="id" 
                    value={product.idLinea} 
                    options={lineasDisponibles} 
                    onChange={(e) => {updateField(e.value, "idLinea")}} 
                    placeholder="--Selecciona una linea--"
                />
            </div>
            <div className="field">
                <label 
                htmlFor="turno"                                   // CAMBIAR...
                >
                    Nombre del Producto
                </label>
                <InputText 
                    id="turno"                                        // CAMBIAR...
                    value={product.turno}                             // CAMBIAR...
                    onChange={(e) => {
                        updateField(e.target.value.trim(), "turno");  // CAMBIAR...
                        VerificarNombre(e.target.value)
                    }} 
                    required 
                    autoFocus 
                    className={validarNombre}
                    maxLength="30" 
                />
                {validarNombre && Mensaje}
            </div>
            <CrearM2
                siguiente={siguiente}
            />
        </Dialog>
    )
}

export default CrearM1
