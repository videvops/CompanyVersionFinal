import React, { useState } from 'react'

const Login = ({ setLogueado }) => {
    // const [correo, setCorreo] = useState("hla")

    const loguearse = () => {
        localStorage.setItem('logueado', '1')   // Crea valor para inicio de sesion
        setLogueado(true)                       // Iniciar sesion 
        console.log("Inicio de sesion")
    }
    const enviarDatos = (e) => {
        e.preventDefault()
        console.log("Se enviaron los datos")

    }

//--------------------| Valor que regresara  |--------------------
    return (
        <>
            <form onSubmit={enviarDatos}>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        // value={correo}
                        // onChange={setCorreo(e.tarjet.value)}
                    />
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                    />
                </div>
                <input
                    type="submit"
                />
            </form>
            <button onClick={loguearse}>
                Iniciar Sesion
            </button>
        </>
    )
}

export default Login
