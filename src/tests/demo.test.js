describe('Pruebas en el archivo demo.test.js', () => {

    test(' Deben de ser iguales los strings ', () => {
        // 1.- Inicialización
        const mensaje = 'Hola DKS';

        // 2.- Estímulo
        const mensaje2 = `Hola DKS`;

        // 3.- Observar el Comportamiento
        expect(mensaje).toBe(mensaje2); // ===
    })

});