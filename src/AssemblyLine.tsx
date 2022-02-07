import { AssemblyLineNewItem } from "./AssemblyLineNewItem";
import { moveItemCtor } from "./utils/moveItem";
import { disableContextMenu } from './utils/disableContextMenu';
import { AssemblyLineStage } from './AssemblyLineStage';
import { useLocalStorage } from "./utils/useLocalStorage";

export const AssemblyLine = ({ stages, items }: { stages: string[], items?: string[][] }) => {
  items = items ?? stages.map((name: string, idx: number) => []);
  const [stagesItems, setStagesItems] = useLocalStorage("items", items);
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