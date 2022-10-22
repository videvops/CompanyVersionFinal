import React from "react";
import styles from "./Colores.module.css"

export const ColorStatus = (infoColumna) => {
    let estilo="";
    if(infoColumna.status>=80) estilo=styles.bien;
    else if(infoColumna.status<80 && (infoColumna.status>=50)) estilo=styles.regular;
    else estilo=styles.mal;
    return <div className={`${estilo}`}>{infoColumna.status}%</div>;
}

export const ColorEficiencia = (infoColumna) => {
    let estilo="";
    if(infoColumna.eficiencia>=80) estilo=styles.bien;
    else if(infoColumna.eficiencia<80 && (infoColumna.eficiencia>=50)) estilo=styles.regular;
    else estilo=styles.mal;
    return <div className={`${estilo}`}>{infoColumna.eficiencia}%</div>;
}

export const ColorDisponibilidad = (infoColumna) => {
    let estilo="";
    if(infoColumna.disponibilidad>=80) estilo=styles.bien;
    else if(infoColumna.disponibilidad<80 && (infoColumna.disponibilidad>=50)) estilo=styles.regular;
    else estilo=styles.mal;
    return <div className={`${estilo}`}>{infoColumna.disponibilidad}%</div>;
}

export const ColorVelocidad = (infoColumna) => {
    let estilo="";
    if(infoColumna.velocidad>=80) estilo=styles.bien;
    else if(infoColumna.velocidad<80 && (infoColumna.velocidad>=50)) estilo=styles.regular;
    else estilo=styles.mal;
    return <div className={`${estilo}`}>{infoColumna.velocidad}%</div>;
}

export const ColorCalidad = (infoColumna) => {
    let estilo="";
    if(infoColumna.calidad>=80) estilo=styles.bien;
    else if(infoColumna.calidad<80 && (infoColumna.calidad>=50)) estilo=styles.regular;
    else estilo=styles.mal;
    return <div className={`${estilo}`}>{infoColumna.calidad}%</div>;
}