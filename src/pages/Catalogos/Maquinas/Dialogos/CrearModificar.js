import React, { useEffect, useState } from "react";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { productDialogFooter } from "../../ComponentsCat/Botones/CrearRegistro";
import { Mensaje } from "../../ComponentsCat/Mensajes/Mensajes";
import Axios from "axios";

const CrearModificar = ({ productDialog, titulos, hideDialog, product, updateField, saveProduct, tieneId }) => {
    //--------------------| Dropdown |--------------------
    const statusDisponibles = [
        { status: "Activo", value: 1 },
        { status: "Inactivo", value: 2 },
    ];

    const [plantasDisponibles, setPlantasDisponibles] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:8080/plantas/list").then((res) => {
            setPlantasDisponibles(res.data);
            console.log(res.data);
        });
    }, []);

    const [areasDisponibles, setAreasDisponibles] = useState([]);
    /*useEffect(() => {
        Axios.get(`http://localhost:8080/areas/planta/1`).then((res) => {
            setAreasDisponibles(res.data);
            console.log(res.data);
        });
    }, [product.idPlanta]);*/

    const [lineasDisponibles, setLineasDisponibles] = useState([]);
    // useEffect(() => {
    //     Axios.get(`http://localhost:8080/lineas/area/${product.idArea}`).then((res) => setLineasDisponibles(res.data));
    // }, [product.idArea]);

    //--------------------| Validar campos  |--------------------
    const [validarNombre, setValidarNombre] = useState(""); // Validar nombre de planta
    const [boton, setBoton] = useState(false); // Activar o desactivar boton
    const exprNombre = /^[a-zA-Z0-9._-]{1,40}$/; // Nombres,numeros y guiones

    //---> Nombre
    const VerificarNombre = (texto) => {
        if (!exprNombre.test(texto)) {
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
        <Dialog visible={productDialog} style={{ width: "450px" }} header={titulos.VentanaCrear} modal className="p-fluid" footer={![product.maquina, product.idLinea].includes("") && crearRegistro} onHide={hideDialog}>
            <div className="field">
                <label>Planta</label>
                <Dropdown
                    optionLabel="planta"
                    optionValue="id"
                    value={product.idPlanta}
                    options={plantasDisponibles}
                    onChange={(e) => {
                        updateField(e.value, "idPlanta");
                        Axios.get(`http://localhost:8080/areas/planta/${e.value}`).then((res) => {
                            console.log(e.value);
                            setAreasDisponibles(res.data);
                            console.log(res.data);
                        });
                    }}
                    placeholder="--Selecciona una Planta--"
                />
            </div>

            <div className="field">
                <label>Area</label>
                <Dropdown
                    optionLabel="area"
                    optionValue="id"
                    value={product.idArea}
                    options={areasDisponibles}
                    onChange={(e) => {
                        updateField(e.value, "idArea");
                        Axios.get(`http://localhost:8080/areas/planta/${e.value}`).then((res) => {
                            console.log(e.value);
                            setLineasDisponibles(res.data);
                            console.log(res.data);
                        });
                    }}
                    placeholder="--Selecciona una area--"
                />
            </div>

            <div className="field">
                <label>Linea</label>
                <Dropdown
                    optionLabel="linea"
                    optionValue="idLinea"
                    value={product.idLinea}
                    options={lineasDisponibles}
                    onChange={(e) => {
                        updateField(e.value, "idLinea");
                    }}
                    placeholder="--Selecciona una linea--"
                />
            </div>

            <div className="field">
                <label
                    htmlFor="maquina" // CAMBIAR...
                >
                    Nombre del maquina
                </label>
                <InputText
                    id="maquina" // CAMBIAR...
                    value={product.maquina} // CAMBIAR...
                    onChange={(e) => {
                        updateField(e.target.value.trim(), "maquina"); // CAMBIAR...
                        VerificarNombre(e.target.value);
                    }}
                    required
                    autoFocus
                    className={validarNombre}
                    maxLength="30"
                />
                {validarNombre && Mensaje}
            </div>

            {!tieneId && (
                <div className="field">
                    <label>Status</label>
                    <Dropdown
                        value={product.idEstatus}
                        options={statusDisponibles}
                        onChange={(e) => {
                            updateField(e.value, "idEstatus");
                        }}
                        optionLabel="status"
                        placeholder="--Selecciona un status--"
                    />
                </div>
            )}
        </Dialog>
    );
};

export default CrearModificar;
