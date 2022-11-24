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
                    htmlFor="calle" // CAMBIAR...
                >
                    Calle
                </label>
                <InputText
                    id="calle" // CAMBIAR...
                    value={product.calle} // CAMBIAR...
                    onChange={(e) => {
                        updateField(e.target.value.trim(), "calle"); // CAMBIAR...
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
                    htmlFor="num_ext" // CAMBIAR...
                >
                    Numero exterior
                </label>
                <InputText
                    id="num_ext" // CAMBIAR...
                    value={product.num_ext} // CAMBIAR...
                    onChange={(e) => {
                        updateField(e.target.value.trim(), "num_ext"); // CAMBIAR...
                    }}
                    required
                    autoFocus
                />
            </div>
            <div className="field">
                <label
                    htmlFor="fecha_creacion" // CAMBIAR...
                >
                    Fecha de creacion
                </label>
                <InputText
                    id="fecha_creacion" // CAMBIAR...
                    value={product.fecha_creacion} // CAMBIAR...
                    onChange={(e) => {
                        updateField(e.target.value.trim(), "fecha_creacion"); // CAMBIAR...
                    }}
                    required
                    autoFocus
                />
            </div>
            <div className="field">
                <label
                    htmlFor="fecha_modificacion" // CAMBIAR...
                >
                    Fecha de modificacion
                </label>
                <InputText
                    id="fecha_modificacion" // CAMBIAR...
                    value={product.fecha_modificacion} // CAMBIAR...
                    onChange={(e) => {
                        updateField(e.target.value.trim(), "fecha_modificacion"); // CAMBIAR...
                    }}
                    required
                    autoFocus
                />
            </div>
            <div className="field">
                <label
                    htmlFor="creado_por" // CAMBIAR...
                >
                    Creado por
                </label>
                <InputText
                    id="creado_por" // CAMBIAR...
                    value={product.creado_por} // CAMBIAR...
                    onChange={(e) => {
                        updateField(e.target.value.trim(), "creado_por"); // CAMBIAR...
                    }}
                    required
                    autoFocus
                />
            </div>
            <div className="field">
                <label
                    htmlFor="modificado_por" // CAMBIAR...
                >
                    Modificado por
                </label>
                <InputText
                    id="modificado_por" // CAMBIAR...
                    value={product.modificado_por} // CAMBIAR...
                    onChange={(e) => {
                        updateField(e.target.value.trim(), "modificado_por"); // CAMBIAR...
                    }}
                    required
                    autoFocus
                />
            </div>
        </Dialog>
    );
};

export default CrearModificar;
