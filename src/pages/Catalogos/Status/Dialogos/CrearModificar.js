import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
//import { Dropdown } from 'primereact/dropdown';
import { InputText } from "primereact/inputtext";
import { productDialogFooter } from "../../ComponentsCat/Botones/CrearRegistro";

const CrearModificar = ({ productDialog, titulos, hideDialog, product, updateField, saveProduct, tieneId }) => {
    //--------------------| Validar campos  |--------------------
    const [validarNombre, setValidarNombre] = useState(""); // Validar nombre de turno
    const [boton, setBoton] = useState(false); // Activar o desactivar boton
    const Advertencia = <p style={{ color: "red" }}>Campo no valido</p>; // Mensaje de advertencia
    const expresion = /^[a-zA-Z0-9._-]{1,40}$/; // Nombres,numeros y guiones

    const Verificar = (texto) => {
        if (!expresion.test(texto)) {
            setTimeout(() => {
                // Validacion despues de 2 seg
                setValidarNombre("p-invalid");
                setBoton(true);
            }, 2000);
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
        <Dialog visible={productDialog} style={{ width: "450px" }} header={titulos.VentanaCrear} modal className="p-fluid" footer={crearRegistro} onHide={hideDialog}>
            <div className="field">
                <label
                    htmlFor="estatus" // CAMBIAR...
                >
                    Estatus
                </label>
                <InputText
                    id="estatus" // CAMBIAR...
                    value={product.estatus} // CAMBIAR...
                    onChange={(e) => {
                        updateField(e.target.value.trim(), "estatus"); // CAMBIAR...
                        Verificar(e.target.value);
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
                    htmlFor="descripcion" // CAMBIAR...
                >
                    Descripción
                </label>
                <InputText
                    id="descripcion" // CAMBIAR...
                    value={product.descripcion} // CAMBIAR...
                    onChange={(e) => {
                        updateField(e.target.value.trim(), "descripcion"); // CAMBIAR...
                        Verificar(e.target.value);
                    }}
                    required
                    autoFocus
                    className={validarNombre}
                    maxLength="30"
                />
                {boton && Advertencia}
            </div>
        </Dialog>
    );
};

export default CrearModificar;
