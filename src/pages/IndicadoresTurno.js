import React from "react";
import Cabezal from "../components/indicadoresTurno/Tabla/Cabezal";
import Tabla from "../components/indicadoresTurno/Tabla/Tabla";

const IndicadoresTurno = () => {
//--------------------| Valor que regresara |--------------------
    return (
        <React.Fragment>
            <Cabezal/>
            <Tabla/>
        </React.Fragment>
    );
};

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname;
};

export default React.memo(IndicadoresTurno, comparisonFn);
