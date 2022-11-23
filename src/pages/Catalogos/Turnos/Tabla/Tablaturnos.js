import React from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toolbar } from 'primereact/toolbar';

const TablaTurnos = ({BotonesCabezal,ExportarRegistros,dt,products,selectedProducts,filters,setSelectedProducts,header,actionBodyTemplate}) => {
    // const turnosFicticios=[
    //     {id:1,nombre:"Turno1",horaInicio:"9",horaFin:"10",linea:'linea1',fechaCracion:'10-12-2004',status:'activo',descripcion:"des1",fechaCreacion:"12-03-2022",idCreadoPor:"1"},
    //     {id:2,nombre:"Turno2",horaInicio:"1",horaFin:"3",linea:'linea2',fechaCracion:'12-03-2006',status:'inactivo',descripcion:"des2",fechaCreacion:"10-10-2021",idCreadoPor:"2"},
    //     {id:3,nombre:"Turno3",horaInicio:"4",horaFin:"8",linea:'linea3',fechaCracion:'11-09-2007',status:'pendiente',descripcion:"des3",fechaCreacion:"15-06-2019",idCreadoPor:"3"},
    //     {id:4,nombre:"Turno4",horaInicio:"5",horaFin:"7",linea:'linea4',fechaCracion:'23-11-2008',status:'activo',descripcion:"des4",fechaCreacion:"09-02-2023",idCreadoPor:"4"},
    // ]

//--------------------| Valor que regresara |--------------------
    return (
        <div className="card">
            <Toolbar className="mb-4" left={BotonesCabezal} right={ExportarRegistros}  />

            <DataTable 
            ref={dt} 
            value={products} 
            // value={turnosFicticios}
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
            globalFilterFields={['id', 'nombreTurno','horaInicio','horaFin','linea','fechaCreacion','status']}
            emptyMessage="No se encontraron resultados."
            header={header} 
            responsiveLayout="scroll"
            >
                {/* // CAMBIAR.............. */}
                <Column selectionMode="multiple" headerStyle={{ width: '3rem' }} exportable={false}/>
                <Column field="id" header="ID" sortable style={{ width: '7rem',textAlign:'center' }}/>
                <Column field="nombre" header="Turno" sortable style={{ minWidth: '3rem',textAlign:'center' }}/>
                <Column field="descripcion" header="Descripcion" sortable style={{ minWidth: '3rem',textAlign:'center' }}/>
                <Column field="fechaCreacion" header="Fecha de creacion" sortable style={{ minWidth: '3rem',textAlign:'center' }}/>
                <Column field="idPlanta" header="Planta" sortable style={{ minWidth: '3rem',textAlign:'center' }}/>
                <Column field="idCreadoPor" header="Creado por" sortable style={{ minWidth: '3rem',textAlign:'center' }}/>
                <Column field="status" header="Status" sortable style={{ minWidth: '3rem',textAlign:'center' }}/>
                <Column field="horaInicio" header="Hora de Inicio" sortable style={{ minWidth: '3rem',textAlign:'center' }}/>
                <Column field="horaFin" header="Hora de Fin" sortable style={{ minWidth: '3rem',textAlign:'center' }}/>
                <Column field="idLinea" header="Linea" sortable style={{ minWidth: '3rem',textAlign:'center' }}/>
                <Column header="Editar" body={actionBodyTemplate} exportable={false} style={{ minWidth: '3rem' }}/>
            </DataTable>
        </div>
    )
}

export default TablaTurnos
