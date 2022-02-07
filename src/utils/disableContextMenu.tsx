import { MouseEvent } from "react";
/**
 * Disables default context menu by preventing the default handler, stopping propagation and returning false
 *
 * @param {MouseEvent} event
 * @public 
 */
export const disableContextMenu = (event: MouseEvent) => {
  if (event.preventDefault !== undefined)
    event.preventDefault();
  if (event.stopPropagation !== undefined)
    event.stopPropagation();
  return false;
};