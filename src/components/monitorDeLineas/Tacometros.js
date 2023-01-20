import React from "react";

const Tacometros = () =>{
    const planta =1
    const area = 1
    const linea = 1
    const fecha_inicio = "2022-11-21 15:37:21"
    const fecha_fin = "2022-11-26 11:47:17"
    const urlTacometro= "http://localhost:3000/d-solo/DtaYRtpVz/new-dashboard?orgId=1&var-planta="+planta+"&var-area="+area+"&var-linea="+linea+"&var-maquina=1&var-inicio_intervalo=%272022-11-21+15%3A37%3A21%27&var-fin_intervalo=%272022-11-26+11%3A47%3A17%27&from=1497191061793&to=1851085461793&panelId=4"
    return(
        <div className="col-12 md:col-12">
            <div className="card mb-4 p-0" style={{ textAlign: "center", background: "#ffffff" }}>
                <iframe src={urlTacometro} frameBorder={0} style={{width:'100%', height:'200px'}}></iframe>
            </div>
        </div>
    )
}

export default Tacometros  