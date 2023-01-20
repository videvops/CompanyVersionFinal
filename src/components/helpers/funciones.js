// export const formatearFecha = (fecha) => {
//     fecha.setSeconds(0)                     // Formateo de segundos
//     const fechaNueva = new Date(fecha)      // Variable de fecha a partir de argumento
//     return (
//         fechaNueva.getFullYear() + "-" +
//         (fechaNueva.getMonth() + 1) + "-" +
//         fechaNueva.getDate() + " " +
//         fechaNueva.getHours() + ":" +
//         fechaNueva.getMinutes() + ":" +
//         fechaNueva.getSeconds()
//     )
// }


function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  
  export const formatearFecha =(date) => {
    return (
      [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
      ].join('-') +
      ' ' +
      [
        padTo2Digits(date.getHours()),
        padTo2Digits(date.getMinutes()),
        padTo2Digits(date.getSeconds()),
      ].join(':')
    );
  }
  