import { useState } from 'react';
import { moveItemType } from "./utils/moveItem";
/**
 *  Wrapper component for the new item input logic
 *  On pressing enter it should move a new item to the first stage and clears the input field
 * 
 * @param moveItem: (itemIdx: number, stageIdx: number, delta: number, itemName?: string) => void
 */
export const AssemblyLineNewItem = ({ moveItem }: { moveItem: moveItemType }) => {
  // holder for the item name, TODO additional length checks might be needed
  const [newItemName, setNewItemName] = useState("");
  return (<div>
    <span>Add an item: </span>
    <input
      maxLength={160} // SMS max size -_-
      value={newItemName}
      onChange={(event) => {
        setNewItemName(event.target.value);
      }}
      onKeyPress={(event) => {
        // if "Enter" was pressed and the item name is not empty
        if (event.code === "Enter" && newItemName !== "") {
          // create new item by passing -1 as the current stage, and +1 delta adding it to the first stage
          moveItem(-1, -1, +1, newItemName);
          // clear item name input
          setNewItemName("");
        }
      }}
    />
  </div>)
}  