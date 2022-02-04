import React, { useState } from 'react';
import './App.css';
import {AssemblyLineStage} from "./AssemblyLineStage";

const { round, random } = Math;

export const AssemblyLine = ({stages}: {stages: string[]})=>{
  const [newItemName, setNewItemName] = useState("");
  const emptyi: Array<Array<string>> = stages.map((name: string, idx: number)=> [`item #${round(random()*100000)}`]);
  const [stagesItems, setStagesItems] = useState(emptyi);
  const moveItem = (itemIdx: number, itemName:string, stageIdx: number, delta: number)=>{
    console.log(`${itemIdx}, ${itemName}, ${stageIdx}, ${delta}, ${JSON.stringify(stagesItems)}`);
    if(stageIdx > -1 && stageIdx < stagesItems.length){
        stagesItems[stageIdx].splice(itemIdx, 1);
    }
    if((stageIdx === 0 && delta < 0) || (stageIdx === stages.length-1 && delta > 0)){
      // remove from pipeline don't add to another stage
    } else {
      if(delta > 0)
        stagesItems[stageIdx+delta].unshift(itemName);
      else if(delta < 0)
        stagesItems[stageIdx+delta].push(itemName);
    }

    setStagesItems([...stagesItems]);
  }

  return (
    <div className="assembly-line">
      <div className="assembly-line-add-new-item">
        <label>Add New Item</label>
        <input
          value={newItemName}
          onChange={(event)=> setNewItemName(event.target.value)}
          onKeyPress={(event)=> {
            if(event.code === "Enter" || event.which === 13){
              moveItem(-1, newItemName, -1, +1);
              setNewItemName("");
              console.log(stagesItems);
            }
          }}
        />
      </div>
      <div className="assembly-line-pipeline">
        {stagesItems.map((items: string[], idx: number) => <AssemblyLineStage {...{idx: idx, name:stages[idx], items:items, moveItem: moveItem}}/>)}
      </div>
    </div>
  );
}


// Rendering and behavior
// The component must render a number of elements for your unit testing suite to use, all of which will be accessed by class and index (specifically, the test code will retrieve the n-th stage or the n-th item in a stage by class name). Here is the complete list of elements that must be rendered along with their behavioral specifications:
// An HTML element <input class="assembly-add-item" /> should be provided for input. The testing suite will call onChange to add text and onKeyPress with the Enter key to submit the value. The input field's value, upon Enter being pressed, will be added to the beginning of the first stage's item list and the .assembly-add-item element will be cleared. Items can be added at any time.
// A series of <div class="assembly-stage"></div> children should be provided, each representing the corresponding n-th stage in the assembly line as defined by props.stages. The number of stages will be equal to the length of props.stages provided to the component and will be fixed throughout one mount cycle. props.stages[0] is the name of the first stage and is the entry point for any items newly created by .assembly-add-item, while props.stages[props.stages.length-1] is the name of the last stage. You may assume that props.stages will never be given as an empty array (but if you have time to write a validation for it, that's a bonus!). The testing suite will not check that these stage name strings were rendered, but it's recommended to do so to help identify stages as you work.
// A series of <button class="assembly-item"></button> elements, which represent the items residing in a particular .stage element. The text content of an .assembly-item will be a string from a previous .assembly-add-item submission. As described above, this button accepts left- and right-click (context menu) events, which move it forwards or backwards, respectively, through the stages of the assembly line. As with stages, the n-th .assembly-item child of a list should correspond to the n-th item in that list conceptually.
