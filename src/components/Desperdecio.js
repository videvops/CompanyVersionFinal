import React, { useState, useEffect } from "react";
import { CountryService } from "../service/CountryService";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const Desperdicio = () => {
    const [countries, setCountries] = useState([]);

    const products = [
        { fecha: "03/10/22", planta: "Monterrey", area: "Galletas", linea: "L6", maquina: "M5", rechazo: "1200" },
        { fecha: "03/10/22", planta: "Monterrey", area: "Galletas", linea: "L6", maquina: "M5", rechazo: "1200" },
        { fecha: "03/10/22", planta: "Monterrey", area: "Galletas", linea: "L6", maquina: "M5", rechazo: "1200" },
        { fecha: "03/10/22", planta: "Monterrey", area: "Galletas", linea: "L6", maquina: "M5", rechazo: "1200" },
        { fecha: "03/10/22", planta: "Monterrey", area: "Galletas", linea: "L6", maquina: "M5", rechazo: "1200" },
    ];

    useEffect(() => {
        const countryService = new CountryService();
        countryService.getCountries().then((countries) => {
            setCountries(countries);
        });
    }, []);

    return (
        <div className="grid p-fluid">
            <div className="col-12">
                <div className="card mb-4" style={{ textAlign: "center", background: "#6366f2" }}>
                    <span className=" font-bold" style={{ fontSize: "25px", color: "white" }}>
                        Desperdicios
                    </span>
                </div>
                <div className="card">
                    <h5 className=" font-bold ml-8" style={{ fontSize: "28px" }}>
                        Desperdicios
                    </h5>
                </div>
            </div>

            <div className="col-12 lg:col-6 xl:col-3">
                <div className="card mb-5 " style={{ background: "#DD5353", color: "white" }}>
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block font-bold mb-3" style={{ fontSize: "20px", color: "white" }}>
                                Eficiencia Turno
                            </span>
                            <div className="font-bold" style={{ fontSize: "60px" }}>
                                55%
                            </div>
                        </div>
                        <div className="flex align-items-center justify-content-center border-round" style={{ width: "3.5rem", height: "3.5rem", background: "#DD5353" }}>
                            <i className="pi pi-window-maximize" style={{ fontSize: "35px", color: "white" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 lg:col-6 xl:col-3">
                <div className="card mb-5" style={{ background: "#FFD372", color: "white" }}>
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block font-bold mb-3" style={{ fontSize: "20px", color: "white" }}>
                                Disponibilidad Turno
                            </span>
                            <div style={{ fontSize: "60px" }}>70%</div>
                        </div>
                        <div className="flex align-items-center justify-content-center border-round" style={{ width: "3.5rem", height: "3.5rem", background: "#FFD372" }}>
                            <i className="pi pi-window-maximize" style={{ fontSize: "35px", color: "white" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 lg:col-6 xl:col-3">
                <div className="card mb-5" style={{ background: "#FFD372", color: "white" }}>
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block font-bold mb-3" style={{ fontSize: "20px", color: "white" }}>
                                Velocidad Turno
                            </span>
                            <div className="font-bold" style={{ fontSize: "60px" }}>
                                60%
                            </div>
                        </div>
                        <div className="flex align-items-center justify-content-center border-round" style={{ width: "3.5rem", height: "3.5rem", background: "#FFD372" }}>
                            <i className="pi pi-window-maximize " style={{ fontSize: "35px", color: "white" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 lg:col-6 xl:col-3">
                <div className="card mb-5" style={{ background: "#7DCE13", color: "white" }}>
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block font-bold mb-3" style={{ fontSize: "19px", color: "white" }}>
                                Producto terminado Turno
                            </span>
                            <div className="font-bold" style={{ fontSize: "60px" }}>
                                90%
                            </div>
                        </div>
                        <div className="flex align-items-center justify-content-center border-round" style={{ width: "3.5rem", height: "3.5rem", background: "#7DCE13" }}>
                            <i className="pi pi-window-maximize " style={{ fontSize: "34px", color: "white" }} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12">
                <div className="card">
                    <h5 className="font-bold" style={{ fontSize: "20px" }}>
                        {" "}
                        Planta
                    </h5>

                    <DataTable value={products} stripedRows responsiveLayout="scroll" style={{ fontSize: "18px", textAlign: "center" }}>
                        <Column field="fecha" header="Fecha"></Column>
                        <Column field="planta" header="Planta" style={{ textAlign: "center" }}></Column>
                        <Column field="area" header="Area" style={{ textAlign: "center" }}></Column>
                        <Column field="linea" header="Linea" style={{ textAlign: "center" }}></Column>
                        <Column field="maquina" header="Maquina" style={{ textAlign: "center" }}></Column>
                        <Column field="rechazo" header="Rechazos KG" style={{ textAlign: "center" }}></Column>
                    </DataTable>
                </div>
            </div>
        </div>
    );
};

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname;
};

export default React.memo(Desperdicio, comparisonFn);
