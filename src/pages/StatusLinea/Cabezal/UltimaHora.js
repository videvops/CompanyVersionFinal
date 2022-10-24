import React from "react";

const UltimaHora=()=>{
    return(
        <div className="col-12 lg:col-6 xl:col-4">
                <div className="card mb-5">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-800 font-bold mb-3" style={{ fontSize: "25px" }}>
                                Última Hora
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
            </div>
    );
}

export default UltimaHora;