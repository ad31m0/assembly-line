import { AssemblyLineStageItem } from "./AssemblyLineStageItem"
import { moveItemType } from "./utils/moveItem"

export const AssemblyLineStage = ({ stageIdx, stageName, stageItems, moveItem }: { stageIdx: number, stageName: string, stageItems: string[], moveItem: moveItemType }) => {
  return (<div className="assembly-line-stage" style={{ width: "200px" }}>
    <h4>{stageName}</h4>
    {stageItems.map((itemName: string, itemIdx: number) =>
      <AssemblyLineStageItem {...{ key: `stage-${stageIdx}-item-${itemIdx}`, itemIdx, itemName, stageIdx, moveItem }} />
    )}
  </div>)
}