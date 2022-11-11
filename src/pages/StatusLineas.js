import React, { useState /*, useRef*/ } from "react";
// import { DatosFicticios } from "./StatusLinea/ValoresMaquina";
import { DataView, DataViewLayoutOptions } from "primereact/dataview";
import { Button } from "primereact/button";
import maquina1 from "../img/maquina-status-linea.png";
// import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
// import { ColorStatus } from "./StatusLinea/ColorStatus";
import Cabezal from "./StatusLinea/Cabezal/Cabezal";
// import CardsTurno from "./StatusLinea/Cabezal/TurnoActual";
import TurnoActual from "./StatusLinea/Cabezal/TurnoActual";
import TurnoPasado from "./StatusLinea/Cabezal/TurnoPasado";
import UltimaHora from "./StatusLinea/Cabezal/UltimaHora";
import classes from "./StatusLinea/StatusLineas.module.css";
//import { ColorStatus } from "./StatusLinea/ColorStatus";

const StatusLineas = (props) => {
    // const menu1 = useRef(null);
    const [layout, setLayout] = useState("grid");

    const porcentaje = 60;

    //valores ficticios
    const maquinas = [
        { maquina: "1", porcentaje: "85" },
        { maquina: "2", porcentaje: "65" },
        { maquina: "3", porcentaje: "50" },
        { maquina: "4", porcentaje: "75" },
        { maquina: "5", porcentaje: "69" },
        { maquina: "6", porcentaje: "99" },
    ];

    const colorStatus = () => {};

    //Header de tabla
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

    //tabla con layout lista
    const dataviewListItem = (data) => {
        return (
            <div className="col-12 ">
                <div className="flex flex-column md:flex-row align-items-center p-3 w-full">
                    <img src={maquina1} alt="maquinas" className="my-4 md:my-0 w-5 md:w-10rem shadow-2 mr-5" />
                    <div className="flex-1 text-center md:text-left">
                        <div className="font-bold text-2xl" field="maquina" header="Status">
                            Maquina {data.maquina}
                        </div>
                    </div>
                    <div className="flex flex-row md:flex-column justify-content-between w-full md:w-auto align-items-center md:align-items-end mt-5 md:mt-0">
                        <div className="flex align-items-center justify-content-center bg-green-400 border-round" style={{ width: "7rem", height: "7rem" }}>
                            <div className="font-bold m-3" style={{ fontSize: "35px", color: "white" }}>
                                {data.porcentaje}%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    //tabla con layout grid
    const dataviewGridItem = (data) => {
        return (
            <div className="col-12 md:col-4">
                <div className="card m-3 border-1 surface-border">
                    <div className="flex align-items-center justify-content-between"></div>
                    <div className="text-center">
                        <img src={maquina1} alt="Maquinas" className="w-6 shadow-2 my-3 mx-0" />
                        <div>
                            <div className="font-bold" style={{ fontSize: "25px" }}>
                                Maquina {data.maquina}
                            </div>
                        </div>
                    </div>
                    <div className="flex align-items-center justify-content-center m-6">
                        <div className={`${data.porcentaje >= 0 && data.porcentaje <= 55 ? classes.mal : ""} ${data.porcentaje >= 56 && data.porcentaje <= 79 ? classes.regular : ""} ${data.porcentaje >= 80 && data.porcentaje <= 100 ? classes.bien : ""}`}>
                            <div style={{ margin: "10px" }}>{data.porcentaje}%</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    // Forma de ver las  maquinas
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

    // Crear Componente
    return (
        <div className="grid">
            <Cabezal />
            <TurnoActual porcentaje={porcentaje} />
            <TurnoPasado />
            <UltimaHora />
            {/* <etiqueta maquinas={maquinas}/> */}
            <div className="grid list-demo">
                <div className="col-12 ">
                    <div className="card">
                        <div className="flex justify-content-between">
                            <h5 className=" font-bold" style={{ fontSize: "25px" }}>
                                Linea 1 : SKU 34
                            </h5>
                            <Button label="Filtrar" className="p-button-raised p-button-success mr-2 mb-2" />
                        </div>
                        <DataView value={maquinas} layout={layout} paginator rows={3} itemTemplate={itemTemplate} header={dataviewHeader}></DataView>
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
