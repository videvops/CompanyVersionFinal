import React, { useState } from "react";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

const Dashboard = () => {
    const [visible, setVisible] = useState(true)

    return (
        <div className="card">
            <Dialog
                header="¡Atención!" visible={visible} position="top" style={{ width: '300px' }}
                onHide={() => setVisible(false)} draggable={false} resizable={false}
            >
                <div className="flex flex-wrap gap-2">
                    <i className="pi pi-exclamation-triangle" style={{ fontSize: '2rem' }}></i>
                    <p className="m-0 text-lg">Se produjo un error</p>
                </div>
                <Button className="mt-4 mx-8" label="Acepto" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
            </Dialog>
        </div>
    );
};

// const comparisonFn = function (prevProps, nextProps) {
//     return prevProps.location.pathname === nextProps.location.pathname && prevProps.colorMode === nextProps.colorMode;
// };

// export default React.memo(Dashboard, comparisonFn);
export default Dashboard
