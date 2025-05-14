export function previousElement(currentEl) {
  const elements = [];
  const childrenQuantity = currentEl.parentNode.children.length;
  for(let i = 0; i < childrenQuantity; i++) {
    elements.push(currentEl.parentNode.children[i]);
  }
  const currentElposition = elements.indexOf(currentEl);
  if(currentElposition === -1) {
    return
  }
  elements[currentElposition - 1].focus();
}