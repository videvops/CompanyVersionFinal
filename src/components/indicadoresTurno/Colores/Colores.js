import React from "react";
import styles from "./Colores.module.css"

export const ColorEficiencia = (infoColumna) => {
    let estilo="";
    if(infoColumna.eficiencia>=80) estilo=styles.bien;
    else if(infoColumna.eficiencia<80 && (infoColumna.eficiencia>=50)) estilo=styles.regular;
    else estilo=styles.mal;
    return <div className={`${estilo}`}>{infoColumna.eficiencia}%</div>;
}

export const ColorEficienciaPromedio = (infoColumna) => {
    let estilo="";
    if(infoColumna.eficienciaTotal>=80) estilo=styles.bien;
    else if(infoColumna.eficienciaTotal<80 && (infoColumna.eficienciaTotal>=50)) estilo=styles.regular;
    else estilo=styles.mal;
    return <div className={`${estilo}`}>{infoColumna.eficienciaTotal}%</div>;
}

export const ColorDisponibilidad = (infoColumna) => {
    let estilo="";
    if(infoColumna.disponibilidad>=80) estilo=styles.bien;
    else if(infoColumna.disponibilidad<80 && (infoColumna.disponibilidad>=50)) estilo=styles.regular;
    else estilo=styles.mal;
    return <div className={`${estilo}`}>{infoColumna.disponibilidad}%</div>;
}

export const ColorDisponibilidadPromedio = (infoColumna) => {
    let estilo="";
    if(infoColumna.disponibilidadTotal>=80) estilo=styles.bien;
    else if(infoColumna.disponibilidadTotal<80 && (infoColumna.disponibilidadTotal>=50)) estilo=styles.regular;
    else estilo=styles.mal;
    return <div className={`${estilo}`}>{infoColumna.disponibilidadTotal}%</div>;
}

export const ColorVelocidad = (infoColumna) => {
    let estilo="";
    if(infoColumna.velocidad>=80) estilo=styles.bien;
    else if(infoColumna.velocidad<80 && (infoColumna.velocidad>=50)) estilo=styles.regular;
    else estilo=styles.mal;
    return <div className={`${estilo}`}>{infoColumna.velocidad}%</div>;
}

export const ColorVelocidadPromedio = (infoColumna) => {
    let estilo="";
    if(infoColumna.velocidadTotal>=80) estilo=styles.bien;
    else if(infoColumna.velocidadTotal<80 && (infoColumna.velocidadTotal>=50)) estilo=styles.regular;
    else estilo=styles.mal;
    return <div className={`${estilo}`}>{infoColumna.velocidadTotal}%</div>;
}

export const ColorCalidad = (infoColumna) => {
    let estilo="";
    if(infoColumna.calidad>=80) estilo=styles.bien;
    else if(infoColumna.calidad<80 && (infoColumna.calidad>=50)) estilo=styles.regular;
    else estilo=styles.mal;
    return <div className={`${estilo}`}>{infoColumna.calidad}%</div>;
}

export const ColorCalidadPromedio = (infoColumna) => {
    let estilo="";
    if(infoColumna.calidadTotal>=80) estilo=styles.bien;
    else if(infoColumna.calidadTotal<80 && (infoColumna.calidadTotal>=50)) estilo=styles.regular;
    else estilo=styles.mal;
    return <div className={`${estilo}`}>{infoColumna.calidadTotal}%</div>;
}