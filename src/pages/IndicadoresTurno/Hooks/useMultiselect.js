import React, { useState } from 'react'
import { MultiSelect } from 'primereact/multiselect';

const useMultiselect = (campo,valor,datos) => {
//--------------------| Estados  |--------------------
    const [state,setState]=useState([])

//--------------------| Funcion del hook  |--------------------
    const SeleccionMultiple=()=>(
        <>
            <MultiSelect 
                optionLabel={`${campo}`} 
                optionValue={`${valor}`}
                placeholder="--Seleccione--" 
                options={datos} 
                value={state} 
                onChange={(e) => {setState(e.target.value)}} 
                // selectionLimit={1}
            />
        </>
    )
//--------------------| Valor que regresara  |--------------------
    return ([state, SeleccionMultiple])
}

export default useMultiselect
