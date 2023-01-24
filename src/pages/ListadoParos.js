import React, { useState } from 'react'
import CabezalListParos from '../components/listadoParo/Cabezal/CabezalListParos'
import TablaListParos from '../components/listadoParo/Tabla/TablaListParos'
import { TabView, TabPanel } from 'primereact/tabview';

import BarChartTiempoMuertoGrafica from "../components/graficas/barChartTiempoMuerto/BarChartTiempoMuertoGrafica"
import BarChartModoFallaGrafica from '../components/graficas/barChartModosFalla/BarChartModoFallaGrafica';


const ListadoParos = () => {
    //---> Variable donde se almacena la informacion del back-end
    const [registros, setRegistros] = useState([]) 
    const [activeIndex, setActiveIndex] = useState(0)
    const [chartFiltros, setChartFiltros] =useState([])

//--------------------| Valor que regresara  |--------------------
    return (
        <div>
            <CabezalListParos 
                setRegistros={setRegistros}
                setChartFiltros={setChartFiltros}
            />
            <TablaListParos 
                registros={registros}           // Se muestran los registros
            />
            <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>   
                <TabPanel header="Modos de falla">
                    <BarChartModoFallaGrafica
                        filtros = {chartFiltros}
                    />
                </TabPanel>

                <TabPanel header="Tiempo Muerto Por Maquina">
                    <BarChartTiempoMuertoGrafica
                        filtros = {chartFiltros}
                    />
                </TabPanel>    
            </TabView>
        </div>
    )
}

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname;
};

export default React.memo(ListadoParos, comparisonFn);
