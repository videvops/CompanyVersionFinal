import React, {useEffect, useState} from 'react'
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { productDialogFooter } from '../../ComponentsCat/Botones/CrearRegistro';

const CrearModificar = ({productDialog,titulos,hideDialog,product,updateField,saveProduct,tieneId}) => {
//--------------------| Dropdown |--------------------
    const statusDisponibles=[
        {status:"Activo",value:1},
        {status:"Inactivo",value:2},
    ]

    const lineasDisponibles=[
        {linea:"Linea1",value:1},
        {linea:"Linea2",value:2},
    ]
//--------------------| Validacion de campos |--------------------
    useEffect(()=>{
        if([product.nombre,product.horaInicio,product.horaFin,product.idLinea].includes(''))setBoton(true)
        else setBoton(false); 
    },[product.nombre,product.horaInicio,product.horaFin,product.idLinea])

//--------------------| Validar campos  |--------------------
    const [validarNombre,setValidarNombre]=useState("");                // Validar nombre de turno
    const [validarHora,setValidarHora]=useState('')
    const [boton,setBoton]=useState(false);                             // Activar o desactivar boton
    const Advertencia=(<p style={{color:"red"}}>Campo no valido</p>);   // Mensaje de advertencia
    const exprNombre=/^[a-zA-Z0-9._-]{1,40}$/;                            // Nombres,numeros y guiones
    const exprHora=/^[0-2][0-3]:[0-5][0-9]$/;
    const VerificarNombre=(texto)=>{
        if (!exprNombre.test(texto)){
            setValidarNombre("p-invalid");
            setBoton(true);
            
        }else{
            setValidarNombre("");
            setBoton(false);
        }
    }
    const VerificarHora=(texto)=>{
        if (!exprHora.test(texto)){
            setValidarHora("p-invalid");
            setBoton(true);
            
        }else{
            setValidarHora("");
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
                <label 
                htmlFor="nombre"                                   // CAMBIAR...
                >
                    Nombre del Turno
                </label>
                <InputText 
                id="nombre"                                        // CAMBIAR...
                value={product.nombre}                             // CAMBIAR...
                onChange={(e) => {
                    updateField(e.target.value.trim(), "nombre");  // CAMBIAR...
                    VerificarNombre(e.target.value)
                }} 
                required 
                autoFocus 
                className={validarNombre}
                maxLength="30" 
                />
                {validarNombre && Advertencia}
            </div>
            <div className="field">
                <label 
                htmlFor="horaInicio"                                   // CAMBIAR...
                >
                    Hora de inicio
                </label>
                <InputText
                id="horaInicio"                                        // CAMBIAR...
                value={product.horaInicio}                             // CAMBIAR...
                onChange={(e) => {
                    updateField(e.target.value.trim(), "horaInicio");  // CAMBIAR...
                    VerificarHora(e.target.value)
                }} 
                required 
                autoFocus
                className={validarHora}
                placeholder='Ejemplo => 07:20'
                />
                {validarHora && Advertencia}
            </div>
            <div className="field">
                <label 
                htmlFor="horaFin"                                   // CAMBIAR...
                >
                    Hora de Fin
                </label>
                <InputText 
                id="horaFin"                                            // CAMBIAR...
                value={product.horaFin}                             // CAMBIAR...
                onChange={(e) => {
                    updateField(e.target.value.trim(), "horaFin");  // CAMBIAR...
                    VerificarHora(e.target.value)
                }} 
                required 
                autoFocus
                className={validarHora}
                placeholder='Ejemplo => 07:30'
                />
                {validarHora && Advertencia}
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
            {tieneId && (<div className="field">
                <label>Linea</label>
                <Dropdown
                    value={product.idLinea} 
                    options={lineasDisponibles} 
                    onChange={ e => {
                        updateField(e.value, "idLinea");
                    }} 
                    optionLabel="linea" 
                    placeholder="--Selecciona una linea--" 
                />
            </div>)}
        </Dialog>
    )
}

export default CrearModificar
