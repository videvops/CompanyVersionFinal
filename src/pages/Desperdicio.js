import React from 'react'
import CabezalDesperdicio from '../components/Desperdicio/CabezalDesperdicio'
import TablaDesperdicio from '../components/Desperdicio/TablaDesperdicio'

const Desperdicio = () => {
    return (
        <div className='card'>
            <CabezalDesperdicio />
            <TablaDesperdicio />
        </div>
    )
}

export default Desperdicio
