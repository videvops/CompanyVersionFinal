import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toolbar } from "primereact/toolbar";

const TablaMaquinas = ({ BotonesCabezal, ExportarRegistros, dt, products, selectedProducts, filters, setSelectedProducts, header, actionBodyTemplate }) => {
    //--------------------| Valor que regresara |--------------------
    return (
        <div className="card">
            <Toolbar className="mb-4" left={BotonesCabezal} right={ExportarRegistros} />

            <DataTable
                ref={dt}
                value={products}
                selection={selectedProducts}
                filters={filters}
                onSelectionChange={(e) => setSelectedProducts(e.value)}
                dataKey="id"
                paginator
                rows={5}
                rowsPerPageOptions={[5, 10, 25]}
                showGridlines
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                currentPageReportTemplate="Mostrar de {first} a {last} de {totalRecords} productos"
                // CAMBIAR...
                globalFilterFields={["id", "maquina", "idLinea", "liena", "idEsatus", "estatus"]}
                emptyMessage="No se encontraron resultados."
                header={header}
                responsiveLayout="scroll"
            >
                {/* // CAMBIAR.............. */}
                <Column selectionMode="multiple" headerStyle={{ width: "3rem" }} exportable={false} />
                <Column field="id" header="ID" sortable style={{ minWidth: "12rem", textAlign: "center" }} />
                <Column field="maquina" header="Maquina" sortable style={{ minWidth: "16rem", textAlign: "center" }} />
                <Column field="linea" header="Linea" sortable style={{ minWidth: "16rem", textAlign: "center" }} />
                <Column field="estatus" header="estatus" sortable style={{ minWidth: "16rem", textAlign: "center" }} />
                <Column field="fechaCreacion" header="Fecha de creacion" sortable style={{ minWidth: "3rem", textAlign: "center" }} />
                <Column header="Editar" body={actionBodyTemplate} exportable={false} style={{ minWidth: "3rem" }} />
            </DataTable>
        </div>
    );
};

export default TablaMaquinas;
