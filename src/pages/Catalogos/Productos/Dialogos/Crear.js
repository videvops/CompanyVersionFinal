import React, { useEffect, useState } from 'react'

import Axios from 'axios'
import Step1 from './Step1'
import Step2 from './Step2'
import { Dialog } from 'primereact/dialog'
import Environment from '../../../../Environment'
const getRoute = Environment();

const Crear = ({
    m1,
    m2,
    titulos,
    edicion,
    product,
    mostrarM1,
    mostrarM2,
    hideDialog,
    updateField,
    objetoParte2,
    productDialog,
    setObjetoParte2,
}) => {
    //--------------------| Crear objeto para componente 2 |--------------------
    const [tieneMaquinas, setTieneMaquinas] = useState(false)
    const [idProducto, setIdProduto] = useState({})
    const [informacion, setInformacion] = useState({})
    //--> Obtiene informacion 
    useEffect(() => { 
        if (tieneMaquinas) {
            Axios.get(getRoute + `/productos/getById/${idProducto}`).then((res) => setInformacion(res.data))
        }
        // eslint-disable-next-line
    }, [tieneMaquinas])
    //--> Crea tabla de componente 2
    useEffect(() => {
        if (informacion.lineasAsignadas) {               // Tiene informacion
            let arregloLM=[]
            if (!informacion.lineasAsignadas[0].config) {
                arregloLM.push({
                    id: informacion.lineasAsignadas[0].id,
                    tipo: "linea",
                    nombre: informacion.lineasAsignadas[0].linea,
                    velocidadEstandar: 0,
                    factorConversionI: 0,
                    factorConversionO: 0,
                    habilitado:"false"
                })
            } else {
                arregloLM.push({
                    id: informacion.lineasAsignadas[0].id,
                    tipo: "linea",
                    nombre: informacion.lineasAsignadas[0].linea,
                    velocidadEstandar: informacion.lineasAsignadas[0].config.velocidadEstandar,
                    factorConversionI: informacion.lineasAsignadas[0].config.factorConversionI,
                    factorConversionO: informacion.lineasAsignadas[0].config.factorConversionO,
                    habilitado:`${informacion.lineasAsignadas[0].config.habilitado}`
                })
            }
            //--> Si hay maquinas configuradas
            if (informacion.lineasAsignadas[0].maquinasConfig) {
                console.log("Maquinas configuradas")
            }
            //--> Si hay maquinas sin configurar
            if (informacion.lineasAsignadas[0].maquinasNoConfig.length>0) {
                let i = 0
                while (i < informacion.lineasAsignadas[0].maquinasNoConfig.length) {
                    arregloLM.push({
                        id: informacion.lineasAsignadas[0].maquinasNoConfig[i].id,
                        tipo: "maquina",
                        nombre: informacion.lineasAsignadas[0].maquinasNoConfig[i].maquina,
                        velocidadEstandar: 0,
                        factorConversionI: 0,
                        factorConversionO: 0,
                        habilitado:"false"
                    })
                    i++
                }
            }
            setObjetoParte2(arregloLM)
        } // eslint-disable-next-line
    }, [informacion])

//--------------------| Valor que regresara |--------------------
    return (
        <Dialog
            visible={productDialog} 
            style={{ width: `${m1 ? 450 : 900}px` }} 
            header={titulos.VentanaCrear} 
            modal 
            className="p-fluid" 
            onHide={hideDialog}
        >
            {m1 && (
                <Step1
                    edicion={edicion}
                    product={product}
                    mostrarM2={mostrarM2}
                    hideDialog={hideDialog}
                    updateField={updateField}
                    setIdProduto={setIdProduto}
                    setTieneMaquinas={setTieneMaquinas} />
            )}
            {m2 && (
                <Step2
                    mostrarM1={mostrarM1}
                    hideDialog={hideDialog}
                    objetoParte2={objetoParte2}
                    tieneMaquinas={tieneMaquinas}
                    setObjetoParte2={setObjetoParte2}
                    setTieneMaquinas={setTieneMaquinas}
                    idProducto={informacion.idProducto} />
            )}
        </Dialog>
    )
}

export default Crear