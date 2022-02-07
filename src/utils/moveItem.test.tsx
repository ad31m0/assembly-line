import { moveItemCtor } from './moveItem';

describe('moveItem', () => {
  const stages = ["1", "2"];
  const emptya: Array<Array<string>> = stages.map((name: string, idx: number) => []);
  const setStagesItems = (stagesItems: string[][]) => {}
  it('moveItem between stages', () => {
    const setStagesItemsMock = jest.fn() as jest.MockedFunction<typeof setStagesItems>;
    const moveItemMock = moveItemCtor({ stagesItems: emptya, setStagesItems: setStagesItemsMock });

    moveItemMock(0, -1, +1, "1");
    expect(setStagesItemsMock).toBeCalledWith([["1"], []]);

    moveItemMock(0,  0, +1);
    expect(setStagesItemsMock).toBeCalledWith([[], ["1"]]);

    moveItemMock(0,  1, +1);
    expect(setStagesItemsMock).toBeCalledWith([[], []]);

    moveItemMock(0, -1, +1, "1");
    expect(setStagesItemsMock).toBeCalledWith([["1"], []]);

    moveItemMock(0, 0, +1);
    expect(setStagesItemsMock).toBeCalledWith([[], ["1"]]);

    moveItemMock(0, 1, -1);
    expect(setStagesItemsMock).toBeCalledWith([["1"], []]);

    moveItemMock(0, 0, -1);
    expect(setStagesItemsMock).toBeCalledWith([[], []]);
  });
});


