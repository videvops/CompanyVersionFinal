import React from "react";
import FiltroMonitorDeParos from "./FiltroMonitorDeLineas";
import Tacometros from "./Tacometros";
import TablaMayorImpacto from "./TablaMayorImpacto"
import TablaUltimosParos from "./TablaUltimosParos"

const MonitorDeLineas = () =>{
    return(
        <div className="col-12">
            <div className="col-12 md:col-12">
                <FiltroMonitorDeParos />
            </div>
            <br></br>
            <div className="col-12 md:col-12">
                <Tacometros/>
            </div>
            <br></br>
            <div className="col-12 md:col-12 grid p-fluid">
                <div className="col-6 md:col-6">
                    <div className="card mb-4" style={{ textAlign: "center", background: "#6366f2" }}>
                        <span className=" font-bold" style={{ fontSize: "25px", color: "white" }}>
                            Top 5/10 Mayor impacto
                        </span>
                    </div>
                    <TablaMayorImpacto/>
                </div>
                <div className="col-6 md:col-6">
                    <div className="card mb-4" style={{ textAlign: "center", background: "#6366f2" }}>
                        <span className=" font-bold" style={{ fontSize: "25px", color: "white" }}>
                            Ultimos Paros
                        </span>
                    </div>
                    <TablaUltimosParos/>
                </div>
            </div>
        </div>
    )
}

export default MonitorDeLineas 