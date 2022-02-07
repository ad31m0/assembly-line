import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, shallow } from 'enzyme';
import { AssemblyLineNewItem } from './AssemblyLineNewItem';
import { moveItemType } from './utils/moveItem';

configure({ adapter: new Adapter() });

describe('<AssemblyLine /> with no props', () => {
  const moveItemMock = jest.fn() as jest.MockedFunction<moveItemType>;
  moveItemMock.mockImplementation(() => { });
  const container = shallow(<AssemblyLineNewItem moveItem={moveItemMock} />);
  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });

  it('should have a add new item input', () => {
    expect(container.find('input').length).toEqual(1);
  });

  it('add new item should only save on enter', () => {
    container.find('input').simulate('change', { target: { value: 'item1' } });
    expect(container.find('input').prop('value')).toEqual('item1');

    container.find('input').simulate('keypress', { code: "anyother" });
    expect(moveItemMock).not.toHaveBeenCalled();

    container.find('input').simulate('keypress', { code: "Enter" });
    expect(moveItemMock).toBeCalledWith(-1, -1, +1, "item1");
    expect(container.find('input').prop('value')).toEqual('');

  });

  it('should not save empty', () => {
    container.find('input').simulate('change', { target: { value: '' } });
    expect(container.find('input').prop('value')).toEqual('');

    container.find('input').simulate('keypress', { code: "Enter" });
    expect(moveItemMock).not.toHaveBeenCalled();
  });

});
