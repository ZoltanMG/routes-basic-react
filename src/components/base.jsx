import React, { useState, useEffect } from 'react';

const Base = () => {
    const [nombre, setNombre] = useState('Zoltán')

    // despues de 2 segundos de la renderizacion completa nombre cambia de 'Zoltan' a 'María'
    useEffect(() => {
        setTimeout(() => {
            setNombre('María')
        },2000)
    })

    return (
        <div>
            <h1>Pagina de base.</h1>
            <p>{nombre}</p>
        </div>
    );
}

export default Base;