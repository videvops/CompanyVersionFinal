import React from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toolbar } from 'primereact/toolbar';

const TablaDirecciones = ({BotonesCabezal,ExportarRegistros,dt,products,selectedProducts,filters,setSelectedProducts,header,actionBodyTemplate}) => {
    const direccionFicticias=[
        {id:1,calle:"calle1",num_ext:"9",fecha_creacion:"10-12-2021",fecha_modificacion:'10-12-2022',creado_por:'usuario1',modificado_por:'usuario1'},
        {id:2,calle:"calle2",num_ext:"3",fecha_creacion:"14-10-2012",fecha_modificacion:'12-12-2012',creado_por:'usuario2',modificado_por:'usuario2'},
        {id:3,calle:"calle3",num_ext:"4",fecha_creacion:"08-09-2043",fecha_modificacion:'07-06-2044',creado_por:'usuario3',modificado_por:'usuario3'},
    ]
//--------------------| Valor que regresara |--------------------
    return (
        <div className="card">
            <Toolbar className="mb-4" left={BotonesCabezal} right={ExportarRegistros}  />

            <DataTable 
            ref={dt} 
            // value={products} 
            value={direccionFicticias}
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
            globalFilterFields={['id', 'calle','num_ext','fecha_creacion','fecha_modificacion','creado_por','modificado_por']}
            emptyMessage="No se encontraron resultados."
            header={header} 
            responsiveLayout="scroll"
            >
                {/* // CAMBIAR.............. */}
                <Column selectionMode="multiple" headerStyle={{ width: '3rem' }} exportable={false}/>
                <Column field="id" header="ID" sortable style={{ width: '7rem',textAlign:'center' }}/>
                <Column field="calle" header="Calle" sortable style={{ minWidth: '3rem',textAlign:'center' }}/>
                <Column field="num_ext" header="Numero Exterior" sortable style={{ minWidth: '3rem',textAlign:'center' }}/>
                <Column field="fecha_creacion" header="Fecha de creacion" sortable style={{ minWidth: '3rem',textAlign:'center' }}/>
                <Column field="fecha_modificacion" header="Fecha de modificacion" sortable style={{ minWidth: '3rem',textAlign:'center' }}/>
                <Column field="creado_por" header="Creado por" sortable style={{ minWidth: '3rem',textAlign:'center' }}/>
                <Column field="modificado_por" header="Modificado por" sortable style={{ minWidth: '3rem',textAlign:'center' }}/>
                <Column header="Editar" body={actionBodyTemplate} exportable={false} style={{ minWidth: '3rem' }}/>
            </DataTable>
        </div>
    )
}

export default TablaDirecciones
