import React from "react";

const Cabezal=()=>{
    return(
    <div className="col-12 ">
        <div className="card mb-0" style={{ textAlign: "center", background: "#6366f2" }}>
            <span className=" font-bold" style={{ fontSize: "25px", color: "white" }}>
                Indicadores de Turno
            </span>
        </div>
        <h5 className=" font-bold" style={{ fontSize: "25px" }}>
            Status en Tiempo Real
        </h5>
    </div>
    );
}

export default Cabezal;