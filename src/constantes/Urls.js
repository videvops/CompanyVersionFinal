
const ENVIRONMENT = "AZURE";
//const ENVIRONMENT = "LOCAL";
export const PLANTAS = getEnvironment(ENVIRONMENT)+ "/";
export const AREAS = getEnvironment(ENVIRONMENT)+ "";
export const LINEAS = getEnvironment(ENVIRONMENT)+ "";
export const MODOS_FALLA = getEnvironment(ENVIRONMENT)+ "";
export const BITACORA = getEnvironment(ENVIRONMENT)+ "";



const getEnvironment = (enviroment) =>{
   const url="";
  if(enviroment==="AZURE"){
    url="http://localhost:8080"
  }
  else{
     url="http://localhost:8080"
  }

    return url;
}
