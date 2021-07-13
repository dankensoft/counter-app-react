import "@testing-library/jest-dom";
const { getUser, getUsuarioActivo } = require("../../base/05-funciones");

describe('Pruebas en 05-funciones', () => {
    test('getUser debe retornar un Objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        // console.log(user);
        expect(user).toEqual(userTest);
    })

    test('getUsuarioActivo debe retornar un Objeto', () => {
        const nombre = 'Danniels';

        const userActivo = {
            uid: 'ABC567',
            username: nombre
        }

        const usuarioActivo = getUsuarioActivo(nombre);

        expect(usuarioActivo).toEqual(userActivo);
    })
})