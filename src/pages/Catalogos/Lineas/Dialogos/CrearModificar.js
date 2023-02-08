import Axios from 'axios';
import React, {useState, useEffect} from 'react'
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { statusDisponibles } from '../../ComponentsCat/Constantes/constantes';
import {MensajeFiltro} from '../../ComponentsCat/Mensajes/Mensajes'

import Environment from '../../../../Environment';

const getRoute = Environment()

const CrearModificar = ({
    productDialog,
    titulos,
    hideDialog,
    product,
    updateField,
    saveProduct,
    tieneId,
    boton,
    setBoton,
    validarNombre,
    setValidarNombre
}) => {
//--------------------| Dropdown  |--------------------
    //---> Plantas
    const [plantasDisponibles,setPlantasDisponibles]=useState([])
    useEffect(() => {
        Axios.get(getRoute + "/plantas/list").then(res => setPlantasDisponibles(res.data))
    }, [])
    //---> Areas
    const [areasDisponibles, setAreasDisponibles]=useState([])
    useEffect(() => {
        if(product.idPlanta!==''){
            Axios.get(getRoute + `/areas/planta/${product.idPlanta}`).then(res => setAreasDisponibles(res.data))
        }
    }, [product.idPlanta])

//--------------------| Validar campos  |--------------------
    const [campoVacio, setCampoVacio] = useState(false)
    const nombreIncorrecto=(<p style={{color:"red"}}>Campo no valido</p>);   // Mensaje de nombreIncorrecto
    const expresion=/^[a-zA-Z0-9._-\s]{1,40}$/;                            // Solo nombres y numeros

    const Verificar=(texto)=>{
        if (!expresion.test(texto)){
            setValidarNombre("p-invalid");
            setBoton(true);
        }else{
            setValidarNombre("");
            setBoton(false);
        }
    }

    const enviarDatos = () => {
        if (Object.values(product).includes("") || boton) {
            console.log("Los campos estan incorrectos")
            setCampoVacio(true)
            setTimeout(() => {
                setCampoVacio(false)
            }, 3000);
            return
        }
        saveProduct()
    }

    const botones = () => {
        return (
        <>
            <Button
                label="Cancelar"
                icon="pi pi-times"
                className="p-button-text"
                onClick={hideDialog}
            />
            <Button
                label="Guardar"
                icon="pi pi-check"
                className="p-button-text"
                onClick={enviarDatos}
                // disabled={boton}
                />
        </>
        )
    }

//--------------------| Botones de confirmacion |--------------------
    //------> Botones para crear registro
    // const crearRegistro = productDialogFooter(hideDialog, saveProduct, boton, product);

//--------------------| Valor que regresara  |--------------------
    return (
        <Dialog 
        visible={productDialog} 
        style={{ width: '450px' }} 
        header={titulos.VentanaCrear} 
        modal 
        className="p-fluid" 
        footer={botones} 
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
                <label 
                htmlFor="linea"                                 // CAMBIAR...
                >
                    Linea
                </label>
                <InputText 
                id="linea"                                      // CAMBIAR...
                value={product.linea}                           // CAMBIAR...
                onChange={(e) => {
                    updateField(e.target.value, "linea");       // CAMBIAR...
                    Verificar(e.target.value)
                }} 
                required 
                autoFocus 
                className={validarNombre}
                maxLength="30" 
                />
                {boton && nombreIncorrecto}
            </div>
            {!tieneId && (<div className="field">
                <label>Status</label>
                <Dropdown
                    value={product.idEstatus}
                    options={statusDisponibles} 
                    onChange={ e => {
                        updateField(e.value, "idEstatus");
                    }} 
                    optionLabel="status" 
                    placeholder="--Selecciona un status--"
                />
            </div>)}
            {campoVacio&&MensajeFiltro}
        </Dialog>
    )
}

export default CrearModificar
