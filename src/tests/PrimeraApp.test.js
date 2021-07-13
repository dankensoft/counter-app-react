import React from "react";
import PrimerApp from "../PrimerApp";
import {render} from "@testing-library/react";
import {shallow} from "@wojtekmaj/enzyme-adapter-react-17";

describe('Pruebas en <PrimeraApp />', () => {
    /* test('debe de mostrar el mensaje "Hola, Soy Goku"', () => {
        const saludo = 'Hola, Soy Goku';
        const wrapper = render(<PrimerApp saludo={saludo} />);

        expect(wrapper.getByText(saludo)).toBeInTheDocument();
    }) */

    // Ahora se realizará la prueba con Enzyme
    test('debe de mostrar <PrimerApp /> correctamente', () => {
        const saludo = 'Hola, Soy Goku';
        const wrapper = shallow(<PrimerApp saludo={saludo} />);

        expect (wrapper).toMatchSnapshot();
    });

    test('debe de mostrar el subtitulo enviado por props', () => {
      const saludo = 'Hola, Soy Goku';
      const subTitulo = 'Soy un subtitulo';

      const wrapper = shallow(
          <PrimerApp saludo={saludo}
          subtitulo={subTitulo}
          />
      );

      const textoParrafo = wrapper.find('p').text();
      // console.log(textoParrafo);
      expect(textoParrafo).toBe(subTitulo);
    });
})
