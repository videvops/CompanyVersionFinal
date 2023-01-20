import React from 'react'
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import { DataTable } from 'primereact/datatable';
import { InputText } from 'primereact/inputtext';

const CrearM2 = () => {
    const datos = [
        {linea:"linea1",velocidadEstandar:"",factorConversionI:"",factorConversionO:"",habilitado:""},
        {linea:"linea2",velocidadEstandar:"",factorConversionI:"",factorConversionO:"",habilitado:""},
        {linea:"linea3",velocidadEstandar:"",factorConversionI:"",factorConversionO:"",habilitado:""},
        {linea:"linea4",velocidadEstandar:"",factorConversionI:"",factorConversionO:"",habilitado:""},
    ]

    const textEditor = (options) => {
        return (
            <InputText
                type="text"                                                 // Tipo de entrada                                
                value={options.value}                                       // Valor que tendra
                onChange={(e) => options.editorCallback(e.target.value)}    // Lo que hara en eventos
            />
        )
    }

    // const onRowEditComplete1 = (e) => {
    //     let _products2 = [...products2];                                    // Copia de datos
    //     let { newData, index } = e;                                         // Destructuracion de objetos

    //     _products2[index] = newData;

    //     setProducts2(_products2);
    // }
//--------------------| Valor que regresara  |--------------------
    return (
        <Dialog
            header="SKU: SKU H"
            visible={true}
            style={{ width: '80vw' }}
            // footer={renderFooter('displayBasic')}
            // onHide={() => onHide('displayBasic')}
        >
            <p>Descripcion: Galleta mini chispa chocolate 20 oz</p>
            <DataTable value={datos} editMode="row" dataKey="id" /*onRowEditComplete={onRowEditComplete1}*/ responsiveLayout="scroll">
                <Column field="linea" header="Linea" editor={(options) => textEditor(options)} style={{ width: '20%' }}/>
                <Column field="velocidadEstandar" header="Velocidad Estandar" editor={(options) => textEditor(options)} style={{ width: '20%' }}/>
                <Column field="factorConversionI" header="Factor de Conversion Input" editor={(options) => textEditor(options)} style={{ width: '20%' }}/>
                <Column field="factorConversionO" header="Factor de Conversion Output" editor={(options) => textEditor(options)} style={{ width: '20%' }}/>
                <Column field="habilitado" header="¿Habilitado?" editor={(options) => textEditor(options)} style={{ width: '20%' }}/>
                <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}/>
            </DataTable>
        </Dialog>
    )
}

export default CrearM2
