import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";

const TurnoActual=(props)=>{
    return(
        <div className="col-12 lg:col-6 xl:col-4">
                <div className="card mb-5">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-800 font-bold mb-3" style={{ fontSize: "25px" }}>
                                Turno Actual
                            </span>
                            <div label="Default" style={{ width: "130px" }}>
                            <CircularProgressbar value={props.porcentaje} text={`${props.porcentaje}%`} />
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
    );
}

export default TurnoActual;