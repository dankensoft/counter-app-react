import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value} ) => {
    //console.log(value);

    // Hook
    const [ counter, setCounter ] = useState( value ); // Retorna []

    // handleAdd
    const handleAdd = (e) => {
        //console.log(e)
        // Sabemos que viene el valor counter
        setCounter( counter + 1 );
        // Si en un caso no sabemos que viene el valor counter, se crea una función
        // setCounter( (c) => c + 1 );
    }

    // handleReset
    const handleReset = () => {
        setCounter( value );
    }

    // handleSubtract
    const handleSubtract = () => {
        setCounter( counter - 1 );
    }

    return (
        <Fragment >
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubtract }>-1</button>
        </Fragment>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;
