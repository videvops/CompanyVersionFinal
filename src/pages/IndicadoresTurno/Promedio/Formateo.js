import React from "react";
import styles from "./Formateo.module.css"

export const PorEficiencia = (infoColumna) => {
    return <div className={styles.alineacion}>{infoColumna.eficienciaTotal}%</div>;
}

export const PorDisponibilidad = (infoColumna) => {
    return <div className={styles.alineacion}>{infoColumna.disponibilidadTotal}%</div>;
}

export const PorVelocidad = (infoColumna) => {
    return <div className={styles.alineacion}>{infoColumna.velocidadTotal}%</div>;
}

export const PorCalidad = (infoColumna) => {
    return <div className={styles.alineacion}>{infoColumna.calidadTotal}%</div>;
}

export const PorProducto = (infoColumna) => {
    return <div className={styles.alineacion}>{infoColumna.productoTerminadoTotal}kg</div>;
}