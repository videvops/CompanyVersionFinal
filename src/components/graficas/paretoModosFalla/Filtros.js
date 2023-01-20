import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Dropdown } from 'primereact/dropdown';


const FiltrosParetoModoFalla = () => {
    //--------------------| MultiSelect de Plantas  |--------------------
        //---> Obtener registros de back-end
        const [plantasDisponibles, setPlantasDisponibles] = useState(null)
        const [plantas, setPlantas] = useState(null)

        useEffect(() => {
             axios.get("http://localhost:8080/plantas/list").then((res)=>setPlantasDisponibles(res.data))
        }, [])
        console.log(plantasDisponibles)
    
    
    //--------------------| MultiSelect de Areas  |--------------------
        //---> Obtener registros de back-end
        const [areasDisponibles, setAreasDisponibles] = useState([])
        
        const obtenerAreas = () => {
            const cargarAreas = async () => {
                const respuesta = await axios.post(`http://localhost:8080/areas/plantas`, plantas)
                setAreasDisponibles(respuesta.data)
            }
            cargarAreas()
        }
        //---> Lista de areas seleccionados
        const [areas, setAreas] = useState([])
    
    //--------------------| MultiSelect de Lineas  |--------------------
        //---> Obtener registros de back-end
        const [lineasDisponibles, setLineasDisponibles] = useState([])
        const obtenerLineas = () => {
            const cargarLineas = async () => {
                const respuesta = await axios.post(`http://localhost:8080/lineas/areas`, areas)
                setLineasDisponibles(respuesta.data)
            }
            cargarLineas()
        }
        //---> Lista de lineas seleccionadas
        const [lineas, setLineas] = useState([])
    
        
    //--------------------| Valor que regresara  |--------------------
        return (
            <div className="col-12 ">
                <div className="card mb-0" style={{ textAlign: "center", background: "#6366f2" }}>
                    <span className=" font-bold" style={{ fontSize: "25px", color: "white" }}>
                        Pareto Modos De Falla
                    </span>
                </div>
                <br/>
                <div className="grid p-fluid">
                    <div className="col-12 md:col-4">
                        <label className="font-bold">Planta</label>
                        <Dropdown
                            optionLabel="Planta" 
                            optionValue="id"
                            placeholder="Escoge una planta"
                            options={plantasDisponibles} 
                            value={plantas}  
                            onChange={(e) => setPlantas(e.value)} 
                            maxSelectedLabels={1}
                        />
                    </div>
                    <div className="col-12 md:col-4">
                        <label className="font-bold">Area</label>
                        <Dropdown
                            optionLabel="Area" 
                            optionValue="id"
                            placeholder="Escoge una area" 
                            options={areasDisponibles} 
                            value={areas} 
                            onChange={(e) => {setAreas(e.target.value)}} 
                            maxSelectedLabels={1}
                            onFocus={obtenerAreas}
                        />
                    </div>
                    <div className="col-12 md:col-4">
                        <label className="font-bold">Linea</label>
                        <Dropdown
                            optionLabel="Linea" 
                            optionValue="id"
                            placeholder="Escoge una linea" 
                            options={lineasDisponibles} 
                            value={lineas} 
                            onChange={(e) => {setLineas(e.target.value)}} 
                            maxSelectedLabels={1}
                            onFocus={obtenerLineas}
                        />
                    </div>
                </div>
                <br/>
                <div className="grid p-fluid">
                    <div className="field col-12 md:col-5">
                        <label className="font-bold">Periodo</label>
                    </div>
                </div>
             </div>
        )
}
export default FiltrosParetoModoFalla