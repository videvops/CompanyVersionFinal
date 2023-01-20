import React,{ useState } from "react";
import FiltroMonitorDeParos from "./FiltroMonitorDeLineas";
import Tacometros from "./Tacometros";
import TablaMayorImpacto from "./Tablas/TablaMayorImpacto"
import TablaUltimosParos from "./Tablas/TablaUltimosParos"

const MonitorDeLineas = () =>{
    //const [registros, setRegistros] = useState([]) 
    //console.log("registros desde container")
    //console.log(registros)

    return(
        <div className="col-12">
            <div className="col-12 md:col-12">
                <FiltroMonitorDeParos  
                    //setRegistros={setRegistros}
                />
            </div>
            <br></br>
            <div className="col-12 md:col-12">
                <Tacometros/>
            </div>
            <br></br>
            <div className="col-12 md:col-12 grid p-fluid">
                <div className="col-6 md:col-6">
                    <div className="col-12 md:col-12 card mb-4" style={{ textAlign: "center", background: "#6366f2"}}>
                        <span className=" font-bold" style={{ fontSize: "15px", color: "white" }}>
                            Ultimos Paros
                        </span>
                    </div>
                    <TablaUltimosParos
                        //egistros={registros}  
                    />
                </div>
                <div className="col-6 md:col-6 ">
                    <div className="col-12 md:col-12 card mb-4 " style={{ textAlign: "center", background: "#6366f2" }}>
                        <span className=" font-bold" style={{ fontSize: "15px", color: "white" }}>
                            Top 5/10 Mayor impacto
                        </span>
                    </div>
                    <TablaMayorImpacto/>
                </div>
            </div>
        </div>
    )
}

export default MonitorDeLineas
