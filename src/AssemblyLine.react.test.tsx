import React from 'react';
// setup file
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });
// test file
import { shallow, mount, render } from 'enzyme';
import {AssemblyLine} from './AssemblyLine';


describe('AssemblyLine', () => {
  it('should match snapshot', () => {
    const container = shallow(<AssemblyLine stages={["Idea", "Development", "Testing", "Deployed"]} items={[["item1"], ["item2"], ["item3"], ["item4"]]} />);
    expect(container.html()).toMatchSnapshot();
  });
});
