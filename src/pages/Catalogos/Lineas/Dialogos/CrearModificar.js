import React, {useState} from 'react'
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { productDialogFooter } from '../../ComponentsCat/Botones/CrearRegistro';

const CrearModificar = ({productDialog,titulos,hideDialog,product,updateField,saveProduct}) => {
//--------------------| Valores de select  |--------------------
    const plantasDisponibles=[
        {planta:"PlantaA",value:"plantaA"},
        {planta:"PlantaB",value:"plantaB"},
        {planta:"PlantaC",value:"plantaC"},
        {planta:"PlantaD",value:"plantaD"},
    ]
    const areasDisponibles=[
        {area:"AreaA",value:"areaA"},
        {area:"AreaB",value:"areaB"},
        {area:"AreaC",value:"areaC"},
    ]

//--------------------| Validar campos  |--------------------
    const [validarNombre,setValidarNombre]=useState("");                // Validar nombre de planta
    const [boton,setBoton]=useState(false);                             // Activar o desactivar boton
    const Advertencia=(<p style={{color:"red"}}>Campo no valido</p>);   // Mensaje de advertencia
    const expresion=/^[a-zA-Z0-9._-]{1,40}$/;                            // Solo nombres y numeros

    const Verificar=(texto)=>{
        if (!expresion.test(texto)){
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
                    options={plantasDisponibles} 
                    onChange={ e => {
                        updateField(e.value, "planta");
                    }} 
                    optionLabel="planta" 
                    placeholder="--Selecciona una planta--" 
                />
            </div>
            <div className="field">
                <label>Area</label>
                <Dropdown
                    value={product.area} 
                    options={areasDisponibles} 
                    onChange={ e => {
                        updateField(e.value, "area");
                    }} 
                    optionLabel="area" 
                    placeholder="--Selecciona una area--" 
                />
            </div>
            <div className="field">
                {/* CAMBIAR.... */}
                <label 
                htmlFor="nombreLinea"                                   // CAMBIAR...
                >
                    Linea
                </label>
                <InputText 
                id="nombreLinea"                                        // CAMBIAR...
                value={product.nombreLinea}                             // CAMBIAR...
                onChange={(e) => {
                    updateField(e.target.value.trim(), "nombreLinea");  // CAMBIAR...
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
