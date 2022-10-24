import React from "react";
import styles from "./background.css";

export const ColorStatus = (porcentaje) => {
    let estilo = "";
    if (porcentaje.status >= 80) estilo = styles.bien;
    else if (porcentaje.status < 80 && porcentaje.status >= 50) estilo = styles.regular;
    else estilo = styles.mal;
    return <div className={`${estilo}`}>{porcentaje.status}%</div>;
};
