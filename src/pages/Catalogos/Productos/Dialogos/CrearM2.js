import React, { useState } from 'react'
import { Column } from 'primereact/column';
import { Checkbox } from 'primereact/checkbox';
import { DataTable } from 'primereact/datatable';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

const CrearM2 = ({ mostrarM1 }) => {
    const datos = [
        {linea:"linea1",velocidadEstandar:"",factorConversionI:"",factorConversionO:"",habilitado:""},
        {linea:"maquina1",velocidadEstandar:"",factorConversionI:"",factorConversionO:"",habilitado:""},
        {linea:"maquina2",velocidadEstandar:"",factorConversionI:"",factorConversionO:"",habilitado:""},
        {linea:"maquina3",velocidadEstandar:"",factorConversionI:"",factorConversionO:"",habilitado:""},
    ]

    const textEditor = (options) => {
        return (
            <InputText
                type="text"                                                 // Tipo de entrada                                
                value={options.value}                                       // Valor que tendra
                onChange={(e) => options.editorjCallback(e.target.value)}    // Lo que hara en eventos
            />
        )
    }
    const [checked, setChecked] = useState(false);
    const checkEditor = (options) => {
        return (
            <div className="field-checkbox">
                <Checkbox inputId="binary" checked={checked} onChange={e => setChecked(e.checked)} />
                <label htmlFor="binary">Remember Me</label>
            </div>
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
        <div>
            <p>Descripcion: Galleta mini chispa chocolate 20 oz</p>
            <DataTable value={datos} editMode="row" dataKey="id" /*onRowEditComplete={onRowEditComplete1}*/ responsiveLayout="scroll">
                <Column field="linea" header="Linea" editor={(options) => textEditor(options)} style={{ width: '20%' }}/>
                <Column field="velocidadEstandar" header="Velocidad Estandar" editor={(options) => textEditor(options)} style={{ width: '20%' }}/>
                <Column field="factorConversionI" header="Factor de Conversion Input" editor={(options) => textEditor(options)} style={{ width: '20%' }}/>
                <Column field="factorConversionO" header="Factor de Conversion Output" editor={(options) => textEditor(options)} style={{ width: '20%' }}/>
                <Column field="habilitado" header="¿Habilitado?" editor={(options) => checkEditor(options)} style={{ width: '20%' }}/>
                <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}/>
            </DataTable>
            <div className='flex'>
                <Button label="Atras" className="p-button-rounded" onClick={mostrarM1} />
                <Button label="Enviar" className="p-button-rounded" onClick={()=>{console.log("Se enviaron los datos")}}/>
            </div>
        </div>
    )
}

export default CrearM2
