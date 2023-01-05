import React from 'react'
import { Button } from 'primereact/button';

const CabezalListParos = () => {
//--------------------| Valor que regresara  |--------------------
    return (
        <div className="col-12 ">
            <div className="card mb-0" style={{ textAlign: "center", background: "#6366f2" }}>
                <span className=" font-bold" style={{ fontSize: "25px", color: "white" }}>
                    Listado de Paros
                </span>
            </div>
            <br/>
            <Button label="Filtro" icon="pi pi-filter-fill" />
        </div>
    )
}

export default CabezalListParos
