import React, { useState } from 'react'
// import Axios from 'axios'
import useBotones from '../../../../components/hooks/useBotones'
import EditarStep1 from './EditarStep1'
import EditarStep2 from './EditarStep2'

import { Dialog } from 'primereact/dialog'

const Editar = ({ modalEditar, setModalEditar, edicion, actualizarEdicion }) => {
    //--> Variables para componentes
    const [componente1, setComponente1] = useState(true)
    const [componente2, setComponente2] = useState(false)
    const [registrosEditados, setRegistrosEditados] = useState([])
    const [lineaSeleccionada, setLineaSeleccionada] = useState(null)

    //--> Pasar al siguiente modal
    const mostrarComponente2 = () => {
        if (edicion.lineasAsignadas.length > 0) {
            //---> Modificar linea
            let i = 0
            let objetoLinea = { ...edicion.lineasAsignadas[0].config }
            objetoLinea.nombre=edicion.lineasAsignadas[0].linea
            objetoLinea.id=edicion.lineasAsignadas[0].id
            objetoLinea.tipo="linea"
            let objetoEdicion = [objetoLinea]
            //---> Modificar maquinas
            while (i < edicion.lineasAsignadas[0].maquinasConfig.length) {
                objetoEdicion.push(edicion.lineasAsignadas[0].maquinasConfig[i])
                objetoEdicion[i+1].tipo="maquina"
                i++
            }
            console.log(objetoEdicion)
            setRegistrosEditados(objetoEdicion)
        }
        setComponente1(false)
        setComponente2(true)
    }

    const enviarParte2 = () => {
        console.log(registrosEditados)
        const objetoEnviar = { config: registrosEditados }
        console.log(objetoEnviar)
        // const objetoEnviar = { producto: edicion.producto, idEstatus: 2 }
        // Axios.put("http://localhost:8080/productos/config/velocidades", objetoEnviar)
        // console.log("Datos enviados")
        // cerrarTodo()
    }

    const mostrarComponente1 = () => {
        setComponente1(true)
        setComponente2(false)
    }
    const cerrarTodo = () => {
        setModalEditar(false)
        setComponente1(true)
        setComponente2(false)
    }
    //---> Cancelar o guardar el registro
    const [botonesStep1] = useBotones(
        "Cancelar", "", "py-2 p-button-rounded", cerrarTodo,
        "Siguiente", "", "py-2 p-button-rounded", mostrarComponente2
    )
    const [botonesStep2] = useBotones(
        "Atras", "", "py-2 p-button-rounded", mostrarComponente1,
        "Enviar", "", "py-2 p-button-rounded", enviarParte2
    )

//--------------------| Valor que regresara |--------------------
    return (
        <Dialog
            visible={modalEditar} 
            style={{ width: `${componente1 ? 350 : 850}px` }}
            header="Editar registro"
            className="p-fluid" 
            onHide={cerrarTodo}
            footer={componente1 ? botonesStep1 : botonesStep2}>
            {componente1 && (<EditarStep1
                componente2={componente2}
                edicion={edicion}
                actualizarEdicion={actualizarEdicion}
                lineaSeleccionada={lineaSeleccionada}
                setLineaSeleccionada={setLineaSeleccionada} />
            )}
            {componente2 && (
                <EditarStep2
                    registrosEditados={registrosEditados} setRegistrosEditados={setRegistrosEditados}
                />
            )}
        </Dialog>
    )
}

export default Editar
