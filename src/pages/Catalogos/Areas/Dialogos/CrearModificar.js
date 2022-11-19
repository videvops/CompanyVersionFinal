import React, {useState} from 'react'
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { productDialogFooter } from '../../ComponentsCat/Botones/CrearRegistro';

const CrearModificar = ({productDialog,titulos,hideDialog,product,updateField,saveProduct}) => {
//--------------------| Plantas disponibles  |--------------------
    const plantasAreas=[
        {planta:"PlantaA",value:"plantaA"},
        {planta:"PlantaB",value:"plantaB"},
        {planta:"PlantaC",value:"plantaC"},
        {planta:"PlantaD",value:"plantaD"},
    ]

//--------------------| Validar campos  |--------------------
    const [validarNombre,setValidarNombre]=useState("");                // Validar nombre de planta
    const [boton,setBoton]=useState(false);                             // Activar o desactivar boton
    const Advertencia=(<p style={{color:"red"}}>Campo no valido</p>);   // Mensaje de advertencia
    const expresion=/^[a-zA-Z0-9._-]{1,40}$/;                            // Solo nombres y numeros

    const Verificar=(texto)=>{
        if (!expresion.test(texto)){
            setTimeout(() => {                                          // Validacion despues de 2 seg
                setValidarNombre("p-invalid");
                setBoton(true);
            }, 2000);
        }else{
            setValidarNombre("");
            setBoton(false);
        }
    }

//--------------------| Botones de confirmacion |--------------------
    //------> Botones para crear registro
    const crearRegistro=productDialogFooter(hideDialog,saveProduct,boton);

//--------------------| Valor que regresara  |--------------------
    return (
        <Dialog 
        visible={productDialog} 
        style={{ width: '450px' }} 
        header={titulos.VentanaCrear} 
        modal 
        className="p-fluid" 
        footer={crearRegistro} 
        onHide={hideDialog}
        >
            <div className="field">
                <label>Planta</label>
                <Dropdown
                    value={product.planta} 
                    options={plantasAreas} 
                    onChange={ e => {
                        updateField(e.value, "planta");
                    }} 
                    optionLabel="planta" 
                    placeholder="--Selecciona una planta--" 
                />
            </div>
            <div className="field">
                <label 
                htmlFor="nombreArea"                                   // CAMBIAR...
                >
                    Area
                </label>
                <InputText 
                id="nombreArea"                                        // CAMBIAR...
                value={product.nombreArea}                             // CAMBIAR...
                onChange={(e) => {
                    updateField(e.target.value.trim(), "nombreArea");  // CAMBIAR...
                    Verificar(e.target.value)
                }} 
                required 
                autoFocus 
                className={validarNombre}
                maxLength="30" 
                />
                {boton && Advertencia}
            </div>
        </Dialog>
    )
}

export default CrearModificar
