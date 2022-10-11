import React, { useState, useEffect, useRef } from "react";
import { ProductService } from "../service/ProductService";
import { DataView, DataViewLayoutOptions } from "primereact/dataview";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Rating } from "primereact/rating";
import { Badge } from "primereact/badge";

const Dashboard = (props) => {
    const [products, setProducts] = useState(null);
    const menu1 = useRef(null);
    const menu2 = useRef(null);
    const [lineOptions, setLineOptions] = useState(null);
    const [dataviewValue, setDataviewValue] = useState(null);
    const [layout, setLayout] = useState("grid");
    const [sortKey, setSortKey] = useState(null);
    const [sortOrder, setSortOrder] = useState(null);
    const [sortField, setSortField] = useState(null);

    const applyLightTheme = () => {
        const lineOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: "#495057",
                    },
                },
            },
            scales: {
                x: {
                    ticks: {
                        color: "#495057",
                    },
                    grid: {
                        color: "#ebedef",
                    },
                },
                y: {
                    ticks: {
                        color: "#495057",
                    },
                    grid: {
                        color: "#ebedef",
                    },
                },
            },
        };

        setLineOptions(lineOptions);
    };

    const applyDarkTheme = () => {
        const lineOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: "#ebedef",
                    },
                },
            },
            scales: {
                x: {
                    ticks: {
                        color: "#ebedef",
                    },
                    grid: {
                        color: "rgba(160, 167, 181, .3)",
                    },
                },
                y: {
                    ticks: {
                        color: "#ebedef",
                    },
                    grid: {
                        color: "rgba(160, 167, 181, .3)",
                    },
                },
            },
        };

        setLineOptions(lineOptions);
    };

    useEffect(() => {
        const productService = new ProductService();
        productService.getProductsSmall().then((data) => setProducts(data));
        productService.getProducts().then((data) => setDataviewValue(data));
    }, []);

    const sortOptions = [
        { label: "Linea", value: "!price" },
        { label: "Proucto", value: "price" },
        { label: "Maquina", value: "price" },
    ];

    const onSortChange = (event) => {
        const value = event.value;

        if (value.indexOf("!") === 0) {
            setSortOrder(-1);
            setSortField(value.substring(1, value.length));
            setSortKey(value);
        } else {
            setSortOrder(1);
            setSortField(value);
            setSortKey(value);
        }
    };

    const dataviewHeader = (
        <div className="grid grid-nogutter">
            <div className="col-6" style={{ textAlign: "left" }}>
                <Dropdown value={sortKey} options={sortOptions} optionLabel="label" placeholder="Sort By Price" onChange={onSortChange} />
            </div>
            <div className="col-6" style={{ textAlign: "right" }}>
                <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
            </div>
        </div>
    );

    const dataviewListItem = (data) => {
        return (
            <div className="col-12">
                <div className="flex flex-column md:flex-row align-items-center p-3 w-full">
                    <div className="flex-1 text-center md:text-left">
                        <div className="font-bold text-2xl">{data.name}</div>
                        <div className="mb-3">{data.description}</div>
                    </div>
                </div>
            </div>
        );
    };

    const dataviewGridItem = (data) => {
        return (
            <div className="col-12 md:col-4">
                <div className="card m-6 border-1 surface-border" style={{ background: "red", color: "white" }}>
                    <div className="text-center">
                        {/*<div className="text-2xl font-bold">{data.name}</div>*/}
                        <h2 className="text-2xl font-bold">Maquina 2</h2>
                        {/*<div className="mb-3">{data.description}</div>*/}
                        <div className="font-bold" style={{ fontSize: "25px" }}>
                            59%
                        </div>
                    </div>
                </div>

                <div className="card m-6 border-1 surface-border" style={{ background: "green", color: "white" }}>
                    <div className="text-center">
                        {/*<div className="text-2xl font-bold">{data.name}</div>*/}
                        <h2 className="text-2xl font-bold">Maquina 3</h2>
                        {/*<div className="mb-3">{data.description}</div>*/}
                        <div className="font-bold" style={{ fontSize: "25px" }}>
                            96%
                        </div>
                    </div>
                </div>

                <div className="card m-6 border-1 surface-border" style={{ background: "#FFDE00", color: "white" }}>
                    <div className="text-center">
                        {/*<div className="text-2xl font-bold">{data.name}</div>*/}
                        <h2 className="text-2xl font-bold">Maquina 1</h2>
                        {/*<div className="mb-3">{data.description}</div>*/}
                        <div className="font-bold" style={{ fontSize: "25px" }}>
                            82%
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
                <div className="card mb-0" style={{ textAlign: "center" }}>
                    <span className=" font-bold" style={{ fontSize: "25px" }}>
                        {" "}
                        Linea 1 :{" "}
                    </span>
                    <span className="text-blue-500 font-bold" style={{ fontSize: "25px" }}>
                        SKU 34
                    </span>
                </div>
            </div>
            <div className="col-12 lg:col-6 xl:col-4">
                <div className="card mb-0">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-900 font-bold mb-3" style={{ fontSize: "25px" }}>
                                Turno Actual{" "}
                            </span>
                        </div>
                        <div className="flex align-items-center justify-content-center border-round" style={{ width: "2.5rem", height: "2.5rem" }}>
                            <Badge style={{ minWidth: "4rem", height: "4rem", lineHeight: "4rem" }} value="76%" size="xlarge" severity="warning"></Badge>
                        </div>
                    </div>
                    <span className="text-blue-500 font-bold" style={{ fontSize: "25px" }}>
                        27, 000{" "}
                    </span>
                    <span className="text-500" style={{ fontSize: "25px" }}>
                        PT [KG]
                    </span>
                </div>
            </div>
            <div className="col-12 lg:col-6 xl:col-4">
                <div className="card mb-0">
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
                </div>
            </div>
            <div className="col-12 lg:col-6 xl:col-4">
                <div className="card mb-0">
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
                </div>
            </div>

            <div className="grid list-demo">
                <div className="col-12 ">
                    <div className="card">
                        <div className="flex justify-content-between">
                            <h5>Status Linea</h5>
                            <Button label="Filtrar" className="p-button-raised p-button-success mr-2 mb-2" />
                        </div>
                        <DataView value={dataviewValue} layout={layout} paginator rows={6} sortOrder={sortOrder} sortField={sortField} itemTemplate={itemTemplate} header={dataviewHeader}></DataView>
                    </div>
                </div>
            </div>
        </div>
    );
};

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname && prevProps.colorMode === nextProps.colorMode;
};

export default React.memo(Dashboard, comparisonFn);
