import { useEffect, useState } from "react";
import { DataJSON } from "../Promedio/Funciones";

const usePromedio=(props)=>{
//--------------------| Sacar promedio |--------------------
    const [promEfic,setPromEfic]=useState(0);
    const [promDisp,setPromDisp]=useState(0);
    const [promVel,setPromVel]=useState(0);
    const [promCal,setPromCal]=useState(0);
    const [promProduct,setPromProduct]=useState(0);

    const PromEfec=()=>{
        const data=DataJSON(props.porcentajes);
        let suma= 0;
        let contador=0;
        for(let x in data){                 //Recorriendo el objeto
            suma += data[x].eficiencia;     //Ahora que es un objeto javascript, tiene propiedades
            contador++;
        }
        setPromEfic(suma/contador);
    }

    const PromDisp=()=>{
        const data=DataJSON(props.porcentajes);
        let suma= 0;
        let contador=0;

        for(let x in data){                     //Recorriendo el objeto
            suma += data[x].disponibilidad;     //Ahora que es un objeto javascript, tiene propiedades
            contador++;
        }
        setPromDisp(suma/contador);
    }

    const PromVel=()=>{
        const data=DataJSON(props.porcentajes);
        let suma= 0;
        let contador=0;

        for(let x in data){                     //Recorriendo el objeto
            suma += data[x].velocidad;     //Ahora que es un objeto javascript, tiene propiedades
            contador++;
        }
        setPromVel(suma/contador);
    }

    const PromCal=()=>{
        const data=DataJSON(props.porcentajes);
        let suma= 0;
        let contador=0;

        for(let x in data){                     //Recorriendo el objeto
            suma += data[x].calidad;     //Ahora que es un objeto javascript, tiene propiedades
            contador++;
        }
        setPromCal(suma/contador);
    }

    const PromProduct=()=>{
        const data=DataJSON(props.porcentajes);
        let suma= 0;
        let contador=0;

        for(let x in data){                     //Recorriendo el objeto
            suma += data[x].producto;     //Ahora que es un objeto javascript, tiene propiedades
            contador++;
        }
        setPromProduct(suma/contador);
    }

//--------------------| Renderizado por tiempo |--------------------
    useEffect(()=>{
        PromEfec();
        PromDisp();
        PromVel();
        PromCal();
        PromProduct();
    });

    return [{
        efecto:promEfic,
        disponibilidad:promDisp,
        velocidad:promVel,
        calidad:promCal,
        producto:promProduct
    }];
}

export default usePromedio;