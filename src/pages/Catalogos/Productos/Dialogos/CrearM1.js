import React, {useEffect, useState} from 'react'
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Mensaje } from '../../ComponentsCat/Mensajes/Mensajes';
import Axios from 'axios';

const CrearM1 = ({ hideDialog, product, updateField, mostrarM2 }) => {
//--------------------| Dropdown dinamico|--------------------
    //---> Plantas
    const [plantasDisponibles,setPlantasDisponibles]=useState([])
    useEffect(() => {
        Axios.get("http://localhost:8080/plantas/list").then(res=>setPlantasDisponibles(res.data))
    }, [])
    //---> Areas
    const [areasDisponibles, setAreasDisponibles]=useState([])
    useEffect(() => {
        if(product.idPlanta!==''){
            Axios.get(`http://localhost:8080/areas/planta/${product.idPlanta}`).then(res=>setAreasDisponibles(res.data))
        }
    }, [product.idPlanta])
    //---> Lineas
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
//--------------------| Envio de datos  |--------------------
    const enviarParte1 = () => {
        mostrarM2()
        console.log("Se envio la parte 1")
    }
    
//--------------------| Valor que regresara  |--------------------
    return (
        <div>
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
                    value={product.producto}                             // CAMBIAR...
                    onChange={(e) => {
                        updateField(e.target.value.trim(), "producto");  // CAMBIAR...
                        VerificarNombre(e.target.value)
                    }} 
                    required 
                    autoFocus 
                    className={validarNombre}
                    maxLength="30" 
                />
                {validarNombre && Mensaje}
            </div>
            <div className='flex'>
                <Button label="Cancelar" className="p-button-rounded" onClick={hideDialog}/>
                <Button label="Siguiente" className="p-button-rounded" onClick={enviarParte1}/>
            </div>
        </div>
    )
}

export default CrearM1
