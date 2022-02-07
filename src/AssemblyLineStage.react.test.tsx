import React from 'react';
// setup file
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });
// test file
import { shallow, mount, render } from 'enzyme';
import { AssemblyLine } from './AssemblyLine';
import { AssemblyLineStageItem } from './AssemblyLineStageItem';
import { AssemblyLineNewItem } from './AssemblyLineNewItem';
import { AssemblyLineStage } from './AssemblyLineStage';


describe('<AssemblyLine /> with no props', () => {
    const container = shallow(<AssemblyLineStage  {...{ stageIdx: 0, stageName: "Idea", moveItem: () => { }, stageItems: ["1"] }} />);

    it('should match the snapshot', () => {
        expect(container.html()).toMatchSnapshot();
    });
    it('should have a add new item input', () => {
        expect(container.find(AssemblyLineStageItem).length).toEqual(1);
    });

});
