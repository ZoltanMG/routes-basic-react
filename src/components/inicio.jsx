import React from 'react';
import {useParams} from 'react-router-dom';



// se use useParams() para recopilar los parametrios enviados
// atra vez de la url
const Inicio = () => {
    const {nombre} = useParams();
    return (
        <div>
            <h1>Pagina de inicio.</h1>
            {nombre}
        </div>
    );
}

export default Inicio;