import React from 'react';
import HelloWorld from '../HelloWorld'
import {shallow, mount} from 'enzyme';
 
describe('Testing UI elements inside Hello World Component', () => {
 
   test('Should render Hello World Component', () => {
       //failing test to start
       const wrapper = shallow(<HelloWorld />);
       expect(wrapper.find('[data-qatarget="hello-world-wrapper"]').length).toBe(1);
   });
});