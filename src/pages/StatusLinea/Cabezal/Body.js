import React from "react";
import { DataView } from "primereact/dataview";
import { Button } from "primereact/button";

const Body = (props) => {
    return (
        <div className="grid list-demo">
            <div className="col-12 ">
                <div className="card">
                    <div className="flex justify-content-between">
                        <h5 className=" font-bold" style={{ fontSize: "25px" }}>
                            Linea 1 : SKU 34
                        </h5>
                        <Button label="Filtrar" className="p-button-raised p-button-success mr-2 mb-2" />
                    </div>
                    <DataView value={props.maquinas} layout={props.layout} paginator rows={3} itemTemplate={props.itemTemplate} header={props.dataviewHeader}></DataView>
                </div>
            </div>
        </div>
    );
};

export default Body;
