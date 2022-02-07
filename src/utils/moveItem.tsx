import { push, remove, unshift } from "./arrayHelpers";

export type moveItemType = (itemIdx: number, stageIdx: number, delta: number, itemName?: string) => void;

/**
 * Constructor for the moveItem function
 * shares read/edit access from an arbitrary context for testing convenience
 *   
 * @param stagesItems: string[][] 
 * @param setStagesItems: (items: string[][]) => void 
 * 
 * @returns (itemIdx: number, stageIdx: number, delta: number, itemName?: string) => void

 */
export const moveItemCtor = ({ stagesItems, setStagesItems }: { stagesItems: string[][], setStagesItems: (items: string[][]) => void }) => {
    const moveItem: moveItemType = (itemIdx, stageIdx, delta, itemName) => {
        // if valid stageIdx
        if (stageIdx > -1 && stageIdx < stagesItems.length) {
            // retrieve item name and remove from current stage
            itemName = stagesItems[stageIdx][itemIdx];
            stagesItems[stageIdx] = remove(stagesItems[stageIdx], itemIdx);
        }
        // if not left clicked at the [first] stage and not right clicked at the [last] stage
        if (!(stageIdx === 0 && delta < 0) && !(stageIdx === stagesItems.length - 1 && delta > 0)) {
            // get the destination stage based on the given delta (+1 || -1)
            const stage = stagesItems[stageIdx + delta];
            if (delta > 0) {
                // prepend if moving forward
                stagesItems[stageIdx + delta] = unshift(stage, itemName as string);
            } else {
                // append if moving backwards
                stagesItems[stageIdx + delta] = push(stage, itemName as string);
            }
        }
        setStagesItems([...stagesItems]);
    }
    return moveItem;
}