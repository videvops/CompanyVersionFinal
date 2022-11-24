import React from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toolbar } from 'primereact/toolbar';

const TablaLineas = ({BotonesCabezal,ExportarRegistros,dt,products,selectedProducts,filters,setSelectedProducts,header,actionBodyTemplate}) => {
    const lineasFicticias=[
        {id:1,planta:"plantaA",area:"areaA",nombreLinea:"LineaA",descripcion:"Des1",fechaCreacion:"10-09-2003"},
        {id:2,planta:"plantaB",area:"areaB",nombreLinea:"LineaB",descripcion:"Des2",fechaCreacion:"23-12-2001"},
        {id:3,planta:"plantaC",area:"areaC",nombreLinea:"LineaC",descripcion:"Des3",fechaCreacion:"09-02-2004"},
    ]
//--------------------| Valor que regresara |--------------------
    return (
        <div className="card">
            <Toolbar className="mb-4" left={BotonesCabezal} right={ExportarRegistros}  />

            <DataTable 
            ref={dt} 
            // value={products} 
            value={lineasFicticias}
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
            globalFilterFields={['id', 'nombreLinea','descripcion','fechaCreacion']}
            emptyMessage="No se encontraron resultados."
            header={header} 
            responsiveLayout="scroll"
            >
                {/* // CAMBIAR.............. */}
                <Column selectionMode="multiple" headerStyle={{ width: '3rem' }} exportable={false}/>
                <Column field="id" header="ID" sortable style={{ width: '7rem',textAlign:'center' }}/>
                <Column field="nombreLinea" header="Linea" sortable style={{ minWidth: '7rem',textAlign:'center' }}/>
                <Column field="descripcion" header="Descripción" sortable style={{ minWidth: '7rem',textAlign:'center' }}/>
                <Column field="fechaCreacion" header="Fecha de Creación" sortable style={{ minWidth: '3rem',textAlign:'center' }}/>
                <Column header="Editar" body={actionBodyTemplate} exportable={false} style={{ minWidth: '3rem' }}/>
            </DataTable>
        </div>
    )
}

export default TablaLineas
