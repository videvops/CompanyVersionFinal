import React from "react";
import styles from "./Formateo.module.css"

export const PorEficiencia = (infoColumna) => {
    return <div className={styles.alineacion}>{infoColumna.eficiencia}%</div>;
}

export const PorDisponibilidad = (infoColumna) => {
    return <div className={styles.alineacion}>{infoColumna.disponibilidad}%</div>;
}

export const PorVelocidad = (infoColumna) => {
    return <div className={styles.alineacion}>{infoColumna.velocidad}%</div>;
}

export const PorCalidad = (infoColumna) => {
    return <div className={styles.alineacion}>{infoColumna.calidad}%</div>;
}

export const PorProducto = (infoColumna) => {
    return <div className={styles.alineacion}>{infoColumna.producto}kg</div>;
}