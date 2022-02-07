import React from 'react';
// setup file
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });
// test file
import { shallow, mount, render } from 'enzyme';
import {AssemblyLine} from './AssemblyLine';
import { AssemblyLineStageItem } from './AssemblyLineStageItem';
import { AssemblyLineNewItem } from './AssemblyLineNewItem';


describe('<AssemblyLine /> with no props', () => {
 
  it('should match the snapshot', () => {
    const container = shallow(<AssemblyLine stages={["Idea", "Development", "Testing", "Deployed"]}  />);

    expect(container.html()).toMatchSnapshot();
  });

  it('should have a add new item input', () => {
    const container = shallow(<AssemblyLine stages={["Idea", "Development", "Testing", "Deployed"]} items={[["item1"], ["item2"], ["item3"], ["item4"]]} />);
 
  });

});
