import { useState } from "react";

//maybe I can unify the functions "nextElement" and "previousElement"...
export function nextElement(currentEl) {
  const elements = [];
  const childrenQuantity = currentEl.parentNode.children.length;
  for(let i = 0; i < childrenQuantity; i++) {
    elements.push(currentEl.parentNode.children[i]);
  }
  const currentElposition = elements.indexOf(currentEl);
  if(currentElposition === -1 || currentElposition + 1 === childrenQuantity) {
    return
  }
  elements[currentElposition + 1].focus();

}