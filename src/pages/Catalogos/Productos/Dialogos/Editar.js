import React, { useState } from 'react'
import { Dialog } from 'primereact/dialog';
import useBotones from '../../../../components/hooks/useBotones';
import EditarStep1 from './EditarStep1';
import EditarStep2 from './EditarStep2';

const Editar = ({ modalEditar, setModalEditar, edicion, actualizarEdicion }) => {
    //--> Variables para componentes
    const [componente1, setComponente1] = useState(true)
    const [componente2, setComponente2] = useState(false)

    //--> Pasar al siguiente modal
    const mostrarComponente2 = () => {
        console.log(edicion)
        if (edicion.lineasAsignadas[0]?.config) {
            console.log("tiene algo")
        }
        setComponente1(false)
        setComponente2(true)
        
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
        "Enviar", "", "py-2 p-button-rounded", ()=>{console.log("enviado")}
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
                actualizarEdicion={actualizarEdicion} />
            )}
            {componente2 && (<EditarStep2 />)}
        </Dialog>
    )
}

export default Editar
