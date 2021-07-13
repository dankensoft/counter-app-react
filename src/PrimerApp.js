// import React, { Fragment } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

// También se puede aplicar destructuración en el Props
// Ejemplo: ({saludo}) y en el h1 solo se colocaría saludo
const PrimerApp = ({saludo, subtitulo} ) => {
    console.log(saludo);
    //const saludo = 'Hola DanKenSoft';
/*    const objeto = {
        nombre: 'Danniels',
        edad: 33
    }*/
/*    const arreglo = [1,2,3,4,5,6];
    const numero = 33;
    const decimal = 24.567;*/
    return (
        <>
            <h1>{ saludo }!!!</h1>
            {/*            <h1>{ saludo }</h1>
         <h1>{ arreglo }</h1>
            <h1>{ numero }</h1>
            <h1>{ decimal }</h1>
            <pre>{ JSON.stringify( objeto ) }</pre>*/}
            <p>{ subtitulo }</p>
        </>
    );
}

PrimerApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimerApp.defaultProps = {
    subtitulo: 'Soy un Subtitulo'
}

export default PrimerApp;
