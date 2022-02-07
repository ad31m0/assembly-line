import { moveItemType } from "./utils/moveItem";
/**
 *  a component for the each stage in the assembly line
 *  Should render the stage name and the list of stageItems provided
 * 
 * @param itemIdx: number index of the current item in stage
 * @param itemName: string name of the current item for display
 * @param stageIdx: number index of the current stage, used to send moveitem params
 * @param moveItem: (itemIdx: number, stageIdx: number, delta: number, itemName?: string) => void
 */
export const AssemblyLineStageItem = ({ itemIdx, itemName, stageIdx, moveItem }: { itemIdx: number, itemName: string, stageIdx: number, moveItem: moveItemType }) => {
  return (
    <div key={`${stageIdx}_${itemIdx}`}>
      <button
        className={`animate__animated animate__fadeIn`}
        onMouseDown={(event) => {
          switch (event.button) {
            case 0:
              // if left click move the item forward by passing delta = +1
              moveItem(itemIdx, stageIdx, +1);
              break;
            case 2:
              // if right click move the item backwards by passing delta = -1
              moveItem(itemIdx, stageIdx, -1);
              break;
            default:
              // unsupported do nothing;
              break;
          }
        }}>
        {itemName}
      </button>
    </div>
  );
}