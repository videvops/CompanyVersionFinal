import React from "react";

export const ParetoTiempoMuertoGrafica = (fechaInicio,fechaFin,idPlanta,idArea) => {
    idPlanta = 3000
    const url2 = "http://localhost:"+idPlanta+"/d-solo/ITBEhKIVz/presion?orgId=1&from=1673952721836&to=1673974321837&panelId=64"
    const url = "http://localhost:3000"
    return (
        <div className="Layout-main">
            <div className="row">
                <div className="col-12">
                    <p>
                    <iframe src={url2}
                    width={1100} height={800} frameBorder={0}></iframe>
                    </p>
                </div>
            </div>
        </div>        
    )
}


