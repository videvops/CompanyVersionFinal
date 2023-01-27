import React, { useEffect, useState } from 'react'
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
    mostrarM2,
    objetoParte2,
    setObjetoParte2
}) => {
    const [resultado, setResultado] = useState([])
    let arreglo=[{id:product.idLinea,tipo:"linea",nombre:"linea1",velocidadEstandar:"",factorConversionI:"",factorConversionO:"",habilitado:""},]
    useEffect(() => {
        if (resultado.length>0) {
            let i = 0
            while (i < resultado.length) {
                arreglo.push({ id:resultado[i].id, tipo: "maquina", nombre: resultado[i].maquina, velocidadEstandar: "", factorConversionI: "", factorConversionO: "", habilitado: "" })
                i++
            }
            setObjetoParte2(arreglo)
            console.log(arreglo)
        } else {
            setObjetoParte2([])
        }
    }, [resultado])

//--------------------| Valor que regresara |--------------------
    return (
        <Dialog
            visible={productDialog} 
            style={{ width: `${m1 ? 450 : 850}px` }} 
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
                    setResultado={setResultado}
                />
            )}
            {m2 && (
                <CrearM2
                    mostrarM1={mostrarM1}
                    objetoParte2={objetoParte2}
                />
            )}
        </Dialog>
    )
}

export default CrearModificar
