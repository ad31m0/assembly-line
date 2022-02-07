import { AssemblyLineStageItem } from "./AssemblyLineStageItem"
import { moveItemType } from "./utils/moveItem"
/**
 *  Wrapper component for the each stage in the assembly line
 *  Should render the stage name and the list of stageItems provided
 * 
 * @param stageIdx: number index of the current stage passed for proper key and id generation
 * @param stageName: string name of the stage rendered as a title
 * @param stageItems: string[] list of items provided in this stage
 * @param moveItem: (itemIdx: number, stageIdx: number, delta: number, itemName?: string) => void
 */
export const AssemblyLineStage = ({ stageIdx, stageName, stageItems, moveItem }: { stageIdx: number, stageName: string, stageItems: string[], moveItem: moveItemType }) => {
  return (<div className="assembly-line-stage" style={{ width: "200px" }}>
    <h4>{stageName}</h4>
    {stageItems.map((itemName: string, itemIdx: number) =>
      <AssemblyLineStageItem {...{ key: `stage-${stageIdx}-item-${itemIdx}`, itemIdx, itemName, stageIdx, moveItem }} />
    )}
  </div>)
}