import React from 'react'
import { Button } from 'primereact/button'

export const botonSiguiente = (hideDialog, siguienteModal,boton) => {
    return (
        <>
            <Button 
                label="Cancelar" 
                icon="pi pi-times" 
                className="p-button-text" 
                onClick={hideDialog} 
            />
            <Button 
                label="Siguiente" 
                icon="pi pi-check" 
                className="p-button-text" 
                onClick={siguienteModal} 
                disabled={boton}
            />
        </>
    )
}

export default botonSiguiente
