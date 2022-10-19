import React, { useState, useEffect, useRef } from "react";
import { ProductService } from "../service/ProductService";
import { DataView, DataViewLayoutOptions } from "primereact/dataview";
import { Button } from "primereact/button";
import maquina1 from "../img/maquina-status-linea.png";

const StatusLineas = (props) => {
    const [products, setProducts] = useState(null);
    const menu1 = useRef(null);
    const [lineOptions, setLineOptions] = useState(null);
    const [dataviewValue, setDataviewValue] = useState(null);
    const [layout, setLayout] = useState("grid");
    const [sortKey, setSortKey] = useState(null);
    const [sortOrder, setSortOrder] = useState(null);
    const [sortField, setSortField] = useState(null);

    useEffect(() => {
        const productService = new ProductService();
        productService.getProductsSmall().then((data) => setProducts(data));
        productService.getProducts().then((data) => setDataviewValue(data));
    }, []);

    const maquinas = [
        { maquina: "M1", porcentaje: 85 },
        { maquina: "M2", porcentaje: 65 },
        { maquina: "M3", porcentaje: 59 },
    ];

    const dataviewHeader = (
        <div className="grid grid-nogutter">
            <div className="col-6" style={{ textAlign: "left" }}>
                <p style={{ fontSize: "25px" }}>Eficiencia</p>
            </div>
            <div className="col-6" style={{ textAlign: "right" }}>
                <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
            </div>
        </div>
    );

    const dataviewListItem = (maquina) => {
        return (
            <div className="col-12">
                <div className="flex flex-column md:flex-row align-items-center p-3 w-full">
                    <img src={maquina1} alt={maquinas.maquina} className="my-4 md:my-0 w-5 md:w-10rem shadow-2 mr-5" />
                    <div className="flex-1 text-center md:text-left">
                        <div className="font-bold text-2xl">Maquina 1</div>
                    </div>
                    <div className="flex flex-row md:flex-column justify-content-between w-full md:w-auto align-items-center md:align-items-end mt-5 md:mt-0">
                        <div className="flex align-items-center justify-content-center bg-green-400 border-round" style={{ width: "7rem", height: "7rem" }}>
                            <span className="font-bold m-3" style={{ fontSize: "35px", color: "white" }}>
                                85%
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const dataviewGridItem = (data) => {
        return (
            <div className="col-12 md:col-4">
                <div className="card m-3 border-1 surface-border">
                    <div className="flex align-items-center justify-content-between"></div>
                    <div className="text-center">
                        <img src={maquina1} alt="Maquinas" className="w-6 shadow-2 my-3 mx-0" />
                        <div>
                            <h3 className="font-bold" style={{ fontSize: "25px" }}>
                                Maquina 1
                            </h3>
                        </div>
                    </div>
                    <div className="flex align-items-center justify-content-center m-3">
                        <div className="flex align-items-center justify-content-center bg-green-400 border-round" style={{ width: "7rem", height: "7rem" }}>
                            <span className="font-bold m-3" style={{ fontSize: "35px", color: "white" }}>
                                85%
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const itemTemplate = (data, layout) => {
        if (!data) {
            return;
        }

        if (layout === "list") {
            return dataviewListItem(data);
        } else if (layout === "grid") {
            return dataviewGridItem(data);
        }
    };

    return (
        <div className="grid">
            <div className="col-12 ">
                <div className="card mb-0" style={{ textAlign: "center", background: "#6366f2" }}>
                    <span className=" font-bold" style={{ fontSize: "25px", color: "white" }}>
                        Status Lineas
                    </span>
                </div>
            </div>
            <div className="col-12 lg:col-6 xl:col-4">
                <div className="card mb-5">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-800 font-bold mb-3" style={{ fontSize: "25px" }}>
                                Eficiencia Turno
                            </span>
                            <div className="font-bold" style={{ fontSize: "35px" }}>
                                80%
                            </div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-blue-200 border-round" style={{ width: "3.5rem", height: "3.5rem" }}>
                            <i className="pi pi-window-maximize text-blue-600 " style={{ fontSize: "35px" }} />
                        </div>
                    </div>
                    <span className="text-blue-500 font-bold" style={{ fontSize: "25px" }}>
                        7, 000{" "}
                    </span>
                    <span className="text-500" style={{ fontSize: "25px" }}>
                        PT [KG]
                    </span>
                </div>
            </div>
            <div className="col-12 lg:col-6 xl:col-4">
                {/*<div className="card mb-0">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-800 font-bold mb-3" style={{ fontSize: "25px" }}>
                                Turno Pasado
                            </span>
                        </div>
                        <div className="flex align-items-center justify-content-center border-round" style={{ width: "2.5rem", height: "2.5rem" }}>
                            <Badge style={{ minWidth: "4rem", height: "4rem", lineHeight: "4rem" }} value="56%" size="xlarge" severity="danger"></Badge>
                        </div>
                    </div>
                    <span className="text-blue-500 font-bold" style={{ fontSize: "25px" }}>
                        20, 000{" "}
                    </span>
                    <span className="text-500" style={{ fontSize: "25px" }}>
                        PT [KG]
                    </span>
                </div>*/}
                <div className="card mb-5">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-800 font-bold mb-3" style={{ fontSize: "25px" }}>
                                Eficiencia Turno
                            </span>
                            <div className="font-bold" style={{ fontSize: "35px" }}>
                                80%
                            </div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-orange-200 border-round" style={{ width: "3.5rem", height: "3.5rem" }}>
                            <i className="pi pi-window-maximize text-orange-600 " style={{ fontSize: "35px" }} />
                        </div>
                    </div>
                    <span className="text-blue-500 font-bold" style={{ fontSize: "25px" }}>
                        7, 000{" "}
                    </span>
                    <span className="text-500" style={{ fontSize: "25px" }}>
                        PT [KG]
                    </span>
                </div>
            </div>
            <div className="col-12 lg:col-6 xl:col-4">
                <div className="card mb-5">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-800 font-bold mb-3" style={{ fontSize: "25px" }}>
                                Eficiencia Turno
                            </span>
                            <div className="font-bold" style={{ fontSize: "35px" }}>
                                80%
                            </div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-purple-200 border-round" style={{ width: "3.5rem", height: "3.5rem" }}>
                            <i className="pi pi-window-maximize text-purple-600 " style={{ fontSize: "35px" }} />
                        </div>
                    </div>
                    <span className="text-blue-500 font-bold" style={{ fontSize: "25px" }}>
                        7, 000{" "}
                    </span>
                    <span className="text-500" style={{ fontSize: "25px" }}>
                        PT [KG]
                    </span>
                </div>
                {/*<div className="card mb-0">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-800 font-bold mb-3" style={{ fontSize: "25px" }}>
                                Ultima Hora
                            </span>
                        </div>
                        <div className="flex align-items-center justify-content-center border-round" style={{ width: "2.5rem", height: "2.5rem" }}>
                            <Badge style={{ minWidth: "4rem", height: "4rem", lineHeight: "4rem" }} value="96%" size="xlarge" severity="success"></Badge>
                        </div>
                    </div>
                    <span className="text-blue-500 font-bold" style={{ fontSize: "25px" }}>
                        3,300{" "}
                    </span>
                    <span className="text-500" style={{ fontSize: "25px" }}>
                        PT [KG]
                    </span>
                </div>*/}
            </div>

            <div className="grid list-demo">
                <div className="col-12 ">
                    <div className="card">
                        <div className="flex justify-content-between">
                            <h5 className=" font-bold" style={{ fontSize: "25px" }}>
                                Linea 1 : SKU 34
                            </h5>
                            <Button label="Filtrar" className="p-button-raised p-button-success mr-2 mb-2" />
                        </div>
                        <DataView value={maquinas} layout={layout} paginator rows={3} sortOrder={sortOrder} sortField={sortField} itemTemplate={itemTemplate} header={dataviewHeader}></DataView>
                    </div>
                </div>
            </div>
        </div>
    );
};

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname && prevProps.colorMode === nextProps.colorMode;
};

export default React.memo(StatusLineas, comparisonFn);
