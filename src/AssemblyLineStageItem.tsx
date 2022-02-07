import { moveItemType } from "./utils/moveItem";

export const AssemblyLineStageItem = ({ itemIdx, itemName, stageIdx, moveItem }: { itemIdx: number, itemName: string, stageIdx: number, moveItem: moveItemType }) => {
  return (
    <div key={`${stageIdx}_${itemIdx}`}>
      <button
        onMouseDown={(event) => {
          switch (event.button) {
            case 0:
              moveItem(itemIdx, stageIdx, +1);
              break;
            case 2:
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