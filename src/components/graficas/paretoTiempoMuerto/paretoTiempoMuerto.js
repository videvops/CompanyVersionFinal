import React from 'react'; 
import { ParetoTiempoMuertoGrafica } from './ParetoTiempoMuertoGrafica';

export const ParetoTiempoMuerto = () => {

    // Elemento 
    return (
        <div className="Layout-main">
            <p>Holaaaaaaa</p>
            <ParetoTiempoMuertoGrafica 
                fechaInicio="2022-11-21 15:42:39"
                fechaFin='2022-11-26 12:00:00'
                idPlanta={3000}
                idArea={1}
            />
        </div>        
    )
}
