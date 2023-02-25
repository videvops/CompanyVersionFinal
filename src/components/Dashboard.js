import React, { useState } from "react";
import ErrorGenerico from "./error/ErrorGenerico";

const Dashboard = () => {
    const [visible, setVisible] = useState(true)

    return (
        <div className="card">
            <h2>hola</h2>
            <ErrorGenerico estado={visible} setEstado={setVisible} mensaje="error de dashboard" />
        </div>
    );
};

// const comparisonFn = function (prevProps, nextProps) {
//     return prevProps.location.pathname === nextProps.location.pathname && prevProps.colorMode === nextProps.colorMode;
// };

// export default React.memo(Dashboard, comparisonFn);
export default Dashboard
