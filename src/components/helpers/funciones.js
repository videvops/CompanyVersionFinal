export const formatearFecha = (fecha) => {
    const fechaNueva = new Date(fecha)
    return (
        fechaNueva.getFullYear() + "-" +
        (fechaNueva.getMonth() + 1) + "-" +
        fechaNueva.getDate() + " " +
        fechaNueva.getHours() + ":" +
        fechaNueva.getMinutes() + ":" +
        fechaNueva.getSeconds()
    )
}