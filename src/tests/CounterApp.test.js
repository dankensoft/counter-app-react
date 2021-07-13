import CounterApp from "../CounterApp";

describe('Pruebas en el <CounterApp />', () => {

    // eslint-disable-next-line no-undef
    let wrapper = shallow(<CounterApp />); // Es mejor mantenerlo así para tener la información que necesitamos

    beforeEach( () => {
        // eslint-disable-next-line no-undef
        wrapper = shallow(<CounterApp />);
    });

  test('debe de mostrar <CounterApp /> correctamente', () => {
     expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar el valor por defecto de 100', () => {
      // eslint-disable-next-line no-undef
     const wrapper = shallow(<CounterApp value={100} />);
     const counterText = wrapper.find('h2').text();
     expect(counterText).toBe('100');
  });

  test('debe de incrementar con el botón +1', () => {
     wrapper.find('button').at(0).simulateEvent('click');
     const counterText = wrapper.find('h2').text().trim();
     expect(counterText).toBe('11');
  });

  test('debe de incrementar con el botón -1', () => {
      wrapper.find('button').at(2).simulateEvent('click');
      const counterText = wrapper.find('h2').text().trim();
      expect(counterText).toBe('9');
  });

  test('debe de colocar el valor por defecto con el botón Reset', () => {
      // eslint-disable-next-line no-undef
      const wrapper = shallow(<CounterApp value={105} />);

      wrapper.find('button').at(0).simulateEvent('click');
      wrapper.find('button').at(0).simulateEvent('click');
      wrapper.find('button').at(1).simulateEvent('click');
      const counterText = wrapper.find('h2').text().trim();
      expect(counterText).toBe('105');
  });
})
