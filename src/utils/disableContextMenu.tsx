import { MouseEvent } from "react";

export const disableContextMenu = (event: MouseEvent) => {
  if (event.preventDefault !== undefined)
    event.preventDefault();
  if (event.stopPropagation !== undefined)
    event.stopPropagation();
  return false;
};