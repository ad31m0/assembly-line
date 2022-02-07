import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, shallow } from 'enzyme';
import { AssemblyLineStageItem} from './AssemblyLineStageItem';
import { moveItemType } from './utils/moveItem';


configure({ adapter: new Adapter() });

describe('<AssemblyLine /> with no props', () => {
  const moveItemMock = jest.fn() as jest.MockedFunction<moveItemType>;
  moveItemMock.mockImplementation(() => { });
  const container = shallow(<AssemblyLineStageItem {...{itemIdx: 0, itemName: "item1", stageIdx: 0, moveItem:moveItemMock}} />);
  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });

  it('should have a add new item input', () => {
    expect(container.find('button').length).toEqual(1);
  });

  it('should set the password value on change event with trim', () => {
    container.find('button').simulate('mouseDown', { button: 1});
    expect(moveItemMock).not.toHaveBeenCalled();

    container.find('button').simulate('mouseDown', { button: 0});
    expect(moveItemMock).toBeCalledWith(0,  0, +1);

    container.find('button').simulate('mouseDown', { button: 2});
    expect(moveItemMock).toBeCalledWith(0, 0, -1);

  });
});
