import { AssemblyLineNewItem } from "./AssemblyLineNewItem";
import { moveItemCtor } from "./utils/moveItem";
import { disableContextMenu } from './utils/disableContextMenu';
import { AssemblyLineStage } from './AssemblyLineStage';
import { useLocalStorage } from "./utils/useLocalStorage";

/**
 *   Main component for the assembly line renders an input for new items and a list of stages with their child items
 *   You can move items between stages by left or right mouse press events
 * 
 * @param stages: string[] list of stages names
 * @param items?: string[][] optional initial list of stages and their items
 * 
 */

export const AssemblyLine = ({ stages, items }: { stages: string[], items?: string[][] }) => {
  // if no items given initialize empty array
  items = items ?? stages.map((name: string, idx: number) => []);
  // use local storage to save items
  const [stagesItems, setStagesItems] = useLocalStorage("items", items);
  // create moveItem function and share state data
  const moveItem = moveItemCtor({ stagesItems, setStagesItems });
  return (
    <div className="assembly-line" onContextMenu={disableContextMenu}>
      <AssemblyLineNewItem {...{ moveItem }} />
      <br/>
      <hr/>
      <div className="assembly-line-pipeline hs">
        {stagesItems.map((stageItems: string[], stageIdx: number) =>
          <AssemblyLineStage {...{ key: `stage-${stageIdx}`, stageIdx, stageName: stages[stageIdx], stageItems, moveItem }} />
        )}
      </div>
    </div>
  );
}