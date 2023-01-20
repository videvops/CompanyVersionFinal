import React, { useState,useEffect } from "react";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Dropdown } from 'primereact/dropdown';
import { productDialogFooter } from "../../ComponentsCat/Botones/CrearRegistro";
import Axios from 'axios';

const CrearModificar = ({ productDialog, titulos, hideDialog, product, updateField, saveProduct }) => {
    
    //--------------------| Dropdown dinamico|--------------------
    //---> Plantas
    const [plantasDisponibles,setPlantasDisponibles]=useState([])
    useEffect(() => {
        Axios.get("http://localhost:8080/plantas/list").then(res=>setPlantasDisponibles(res.data))
    }, [])    
    //--------------------| Validar campos  |--------------------
    const [validarNombre, setValidarNombre] = useState(""); // Validar nombre de planta
    const [boton, setBoton] = useState(false); // Activar o desactivar boton
    const Advertencia = <p style={{ color: "red" }}>Campo no valido</p>; // Mensaje de advertencia
    const expresion = /^[a-zA-Z0-9._-]{1,40}$/; // Solo nombres y numeros

    const Verificar = (texto) => {
        if (!expresion.test(texto)) {
            setValidarNombre("p-invalid");
            setBoton(true);
        } else {
            setValidarNombre("");
            setBoton(false);
        }
    };
 
    //--------------------| Botones de confirmacion |--------------------
    //------> Botones para crear registro
    const crearRegistro = productDialogFooter(hideDialog, saveProduct, boton);
    
    //--------------------| Valor que regresara  |--------------------
    return (
        <Dialog 
        visible={productDialog}
        style={{ width: "450px" }}
        header={titulos.VentanaCrear}
        modal className="p-fluid"
        footer={![product.idPlanta,product.modoFalla].includes('')&&crearRegistro}  
        onHide={hideDialog}>
             <div className="field">
                <label>Planta</label>
                <Dropdown 
                optionLabel="planta" 
                optionValue="id" 
                value={product.idPlanta} 
                options={plantasDisponibles} 
                onChange={(e) => 
                    {updateField(e.value, "idPlanta")}} 
                placeholder="--Selecciona una planta--"
                required
                />
            </div>
            <div className="field">
                <label htmlFor="nombreModoFalla">Modo de falla</label>
                <InputText 
                    id="nombreModoFalla"
                    value={product.modoFalla}
                    onChange={(e)=>{
                        updateField(e.target.value.trim(), "nombreModoFalla"); // CAMBIAR...
                        Verificar(e.target.value);
                    }}
                    placeholder="--Escribe el nombre del modo de falla--"
                    required
                    autoFocus
                    className={validarNombre}
                    maxLength="30"
                />
            </div>
            {boton && Advertencia}
        </Dialog>
    );
};

export default CrearModificar;
