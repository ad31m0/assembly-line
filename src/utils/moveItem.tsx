
export type moveItemType = (itemIdx: number, stageIdx: number, delta: number, itemName?: string) => void;
/* istanbul ignore next */
export const push = (stage: string[], item: string) => {
    stage.push(item);
    return stage;
}
/* istanbul ignore next */
export const unshift = (stage: string[], item: string) => {
    stage.unshift(item);
    return stage;
}

export const remove = (stage: string[], itemIdx: number) => {
    stage.splice(itemIdx, 1);
    return stage;
}

export const moveItemCtor = ({ stagesItems, setStagesItems }: { stagesItems: Array<string[]>, setStagesItems: (items: Array<string[]>) => void }) => {
    const moveItem: moveItemType = (itemIdx, stageIdx, delta, itemName) => {
        
        if (stageIdx > -1 && stageIdx < stagesItems.length) {
            itemName = stagesItems[stageIdx][itemIdx];
            stagesItems[stageIdx] = remove(stagesItems[stageIdx], itemIdx);
        }
        if ((stageIdx === 0 && delta < 0) || (stageIdx === stagesItems.length - 1 && delta > 0)) {
            // remove from pipeline don't add to another stage
        } else {
            const stage = stagesItems[stageIdx + delta];
            if (delta > 0) {
                stagesItems[stageIdx + delta] = push(stage, itemName as string);
            } else {
                stagesItems[stageIdx + delta] = unshift(stage, itemName as string);
            }
        }
        setStagesItems([...stagesItems]);
    }
    return moveItem;
}