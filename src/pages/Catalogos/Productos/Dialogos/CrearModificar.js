import React from 'react'
import { Dialog } from 'primereact/dialog'
import CrearM1 from './CrearM1'
import CrearM2 from './CrearM2'

const CrearModificar = ({
    titulos,
    product,
    productDialog,
    updateField,
    hideDialog,
    m1,
    m2,
    mostrarM1,
    mostrarM2
}) => {
//--------------------| Valor que regresara |--------------------
    return (
        <Dialog
            visible={productDialog} 
            style={{ width: `${m1 ? 450 : 750}px` }} 
            header={titulos.VentanaCrear} 
            modal 
            className="p-fluid" 
            onHide={hideDialog}
        >
            {m1 && (
                <CrearM1
                    mostrarM2={mostrarM2}
                    hideDialog={hideDialog}
                    updateField={updateField}
                    product={product}
                />
            )}
            {m2 && (
                <CrearM2
                    mostrarM1={mostrarM1}
                />
            )}
        </Dialog>
    )
}

export default CrearModificar
