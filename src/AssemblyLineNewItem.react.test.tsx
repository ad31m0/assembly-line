import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, shallow } from 'enzyme';
import { AssemblyLineNewItem } from './AssemblyLineNewItem';
import { moveItemType } from './utils/moveItem';

configure({ adapter: new Adapter() });

describe('<AssemblyLineNewItem />', () => {
  const moveItemMock = jest.fn() as jest.MockedFunction<moveItemType>;
  moveItemMock.mockImplementation(() => { });
  const container = shallow(<AssemblyLineNewItem moveItem={moveItemMock} />);
  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });

  it('changing input text should change the input value', () => {
    container.find('input').simulate('change', { target: { value: 'item1' } });
    expect(container.find('input').prop('value')).toEqual('item1');
  });

  it('Pressing any other button does not do anything', () => {
    container.find('input').simulate('change', { target: { value: 'item1' } });
    container.find('input').simulate('keypress', { code: "anyother" });
    expect(moveItemMock).not.toHaveBeenCalled();
  });
  
  it('Pressing Enter saves a new item and clears input', () => {
    container.find('input').simulate('change', { target: { value: 'item1' } });
    container.find('input').simulate('keypress', { code: "Enter" });
    expect(moveItemMock).toBeCalledWith(-1, -1, +1, "item1");
    expect(container.find('input').prop('value')).toEqual('');
  });

  it('should not save empty name', () => {
    container.find('input').simulate('change', { target: { value: '' } });
    container.find('input').simulate('keypress', { code: "Enter" });
    expect(moveItemMock).not.toHaveBeenCalled();
  });

});
