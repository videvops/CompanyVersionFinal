import React, {useState} from 'react'
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

//--------------------| Validar campos  |--------------------
    const [validarNombre,setValidarNombre]=useState("");                // Validar nombre de turno
    const [boton,setBoton]=useState(false);                             // Activar o desactivar boton
    const Advertencia=(<p style={{color:"red"}}>Campo no valido</p>);   // Mensaje de advertencia
    const expresion=/^[a-zA-Z0-9._-]{1,40}$/;                            // Nombres,numeros y guiones

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
                    Verificar(e.target.value)
                }} 
                required 
                autoFocus 
                className={validarNombre}
                maxLength="30" 
                />
                {boton && Advertencia}
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
                }} 
                required 
                autoFocus
                placeholder='Ejemplo => 07:20'
                />
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
                }} 
                required 
                autoFocus
                placeholder='Ejemplo => 07:30'
                />
            </div>
            {!tieneId && (<div className="field">
                <label>Status</label>
                <Dropdown
                    value={product.idEstatus}
                    // value={tieneId?product.idEstatus:1} 
                    options={statusDisponibles} 
                    onChange={ e => {
                        updateField(e.value, "idEstatus");
                    }} 
                    optionLabel="status" 
                    placeholder="--Selecciona un status--"
                />
            </div>)}
            {/* <div className="field">
                <label 
                htmlFor="idCreadoPor"                                   // CAMBIAR...
                >
                    Creado Por
                </label>
                <InputText 
                id="idCreadoPor"                                        // CAMBIAR...
                type="number"
                value={product.idCreadoPor}                             // CAMBIAR...
                onChange={(e) => {
                    updateField(e.target.value.trim(), "idCreadoPor");  // CAMBIAR...
                    Verificar(e.target.value)
                }} 
                required 
                autoFocus 
                />
            </div> */}
            <div className="field">
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
            </div>
        </Dialog>
    )
}

export default CrearModificar
