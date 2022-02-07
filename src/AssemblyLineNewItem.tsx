import { useState } from 'react';
import { moveItemType } from "./utils/moveItem";

export const AssemblyLineNewItem = ({ moveItem }: { moveItem: moveItemType }) => {
  const [newItemName, setNewItemName] = useState("");
  return (<div>
    <span>Add an item: </span>
    <input
      maxLength={160}
      value={newItemName}
      onChange={(event) => {
        setNewItemName(event.target.value);
      }}
      onKeyPress={(event) => {
        if (event.code === "Enter" && newItemName !== "") {
          moveItem(-1, -1, +1, newItemName);
          setNewItemName("");
        }
      }}
    />
  </div>)
}  