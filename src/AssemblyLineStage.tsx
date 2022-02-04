import React from 'react';
import './App.css';

export const AssemblyLineStage = ({idx, name, items, moveItem}: {
  name: string,
  idx: number,
  items: string[],
  moveItem: (itemIdx: number, itemName:string, stageIdx: number, delta: number)=> void
}) => {
  return (
    <div className="assembly-line-stage"  style={{float: "left", width: "200px"}} onContextMenu={(event)=> {
      if(event.preventDefault != undefined)
       event.preventDefault();
      if(event.stopPropagation != undefined)
       event.stopPropagation();
      return false
    }}>
      <strong>{name}</strong>
      <hr/>
      {items.map((itemName: string, itemIdx: number)=>
        <div>
        <button style={{width: "100%"}}key={`${idx}_${itemIdx}`}

      onMouseDown={(event) => {
        console.log(event);
        switch (event.button) {
          case 0:
            moveItem(itemIdx, itemName, idx, +1);
            break;
          case 2:
            moveItem(itemIdx, itemName, idx, -1);
            break;
          default:
            console.log('unsupported');
            break;
         }
      }}>{itemName}</button></div>)}
    </div>
  );
}


// Rendering and behavior
// The component must render a number of elements for your unit testing suite to use, all of which will be accessed by class and index (specifically, the test code will retrieve the n-th stage or the n-th item in a stage by class name). Here is the complete list of elements that must be rendered along with their behavioral specifications:
// An HTML element <input class="assembly-add-item" /> should be provided for input. The testing suite will call onChange to add text and onKeyPress with the Enter key to submit the value. The input field's value, upon Enter being pressed, will be added to the beginning of the first stage's item list and the .assembly-add-item element will be cleared. Items can be added at any time.
// A series of <div class="assembly-stage"></div> children should be provided, each representing the corresponding n-th stage in the assembly line as defined by props.stages. The number of stages will be equal to the length of props.stages provided to the component and will be fixed throughout one mount cycle. props.stages[0] is the name of the first stage and is the entry point for any items newly created by .assembly-add-item, while props.stages[props.stages.length-1] is the name of the last stage. You may assume that props.stages will never be given as an empty array (but if you have time to write a validation for it, that's a bonus!). The testing suite will not check that these stage name strings were rendered, but it's recommended to do so to help identify stages as you work.
// A series of <button class="assembly-item"></button> elements, which represent the items residing in a particular .stage element. The text content of an .assembly-item will be a string from a previous .assembly-add-item submission. As described above, this button accepts left- and right-click (context menu) events, which move it forwards or backwards, respectively, through the stages of the assembly line. As with stages, the n-th .assembly-item child of a list should correspond to the n-th item in that list conceptually.
