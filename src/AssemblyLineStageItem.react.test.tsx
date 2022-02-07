import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, shallow } from 'enzyme';
import { AssemblyLineStageItem } from './AssemblyLineStageItem';
import { moveItemType } from './utils/moveItem';


configure({ adapter: new Adapter() });

describe('<AssemblyLineStageItem />', () => {
  const moveItemMock = jest.fn() as jest.MockedFunction<moveItemType>;
  moveItemMock.mockImplementation(() => { });
  const container = shallow(<AssemblyLineStageItem {...{ itemIdx: 0, itemName: "item1", stageIdx: 0, moveItem: moveItemMock }} />);
  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });

  it('should not move an item on any unsupported mouse click', () => {
    container.find('button').simulate('mouseDown', { button: 1 });
    expect(moveItemMock).not.toHaveBeenCalled();
  });

  it('should move item to next stage on left click', () => {
    container.find('button').simulate('mouseDown', { button: 0 });
    expect(moveItemMock).toBeCalledWith(0, 0, +1);
  });

  it('should move item to previous stage on right click', () => {
    container.find('button').simulate('mouseDown', { button: 2 });
    expect(moveItemMock).toBeCalledWith(0, 0, -1);
  });
});
