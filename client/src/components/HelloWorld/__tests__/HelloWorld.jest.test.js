import React from 'react';
import { shallow } from 'enzyme';
import HelloWorld from '../HelloWorld';

describe('Testing UI elements inside Hello World Component', () => {
  test('Should render Hello World Component', () => {
    // failing test to start
    const wrapper = shallow(<HelloWorld />);
    expect(wrapper.find('[data-qatarget="hello-world-wrapper"]').length).toBe(1);
  });
});
