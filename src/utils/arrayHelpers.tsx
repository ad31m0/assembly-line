/* istanbul ignore file */
/**
 *  Wrapper function for array push (append)
 * 
 * @param stage: string []
 * @param item: string
 * @returns stage: string[]
 */
export const push = (stage: string[], item: string) => {
    stage.push(item);
    return stage;
}
/**
 *  Wrapper function for array unshift (prepend)
 * 
 * @param stage: string []
 * @param item: string
 * @returns stage: string[]
 */
export const unshift = (stage: string[], item: string) => {
    stage.unshift(item);
    return stage;
}
/**
 *  Wrapper function for array remove with given item index
 * 
 * @param stage: string []
 * @param itemIdx: string
 * @returns stage: string[]
 */
export const remove = (stage: string[], itemIdx: number) => {
    stage.splice(itemIdx, 1);
    return stage;
}