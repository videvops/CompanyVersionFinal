import React from "react";

export const ParetoModoFallaGrafica = (fechaInicio,fechaFin,idPlanta,idArea) => {
    idPlanta=3000
    const url2 = "http://localhost:"+idPlanta+"/d-solo/ITBEhKIVz/presion?orgId=1&from=1673952721836&to=1673974321837&panelId=62"
    
    return (
        <div className="Layout-main">
            <div className="Row">
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