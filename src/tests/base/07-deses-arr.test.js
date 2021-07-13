import '@testing-library/jest-dom';
const { retornaArreglo } = require("../../base/07-deses-arr");

describe('Pruebas en desestructuración', () => {
    test('Debe retornar un String y un Número', () => {
        const [letras, numeros] = retornaArreglo();

        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');

        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');
    })
})