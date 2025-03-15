/* The function renders a table based on a list of objects.*/
import copyObject from "../utils/copyObject.js";
export default function renderTable(rootElement,objList,tableId) { 
  if(!objList){
    rootElement.innerHTML = "";
    return
  }
  rootElement.innerHTML = "";
  objList = copyObject(objList);
  let keysName = Object.getOwnPropertyNames(objList[0]);

  const table = document.createElement('table');
  table.setAttribute("id",`${tableId}`);

  //Creating the <th></th> element, and giving his innerText. Naming the row headers.
  const headersRow = document.createElement('tr');
  for (let header of keysName) {
    const th = document.createElement('th');
    th.innerText = header;
    headersRow.appendChild(th);
  }
  table.appendChild(headersRow);

  let rowColor = 1;
  objList.forEach( obj => {
    const productRow = document.createElement('tr');

    productRow.setAttribute('class',`table-row-color-${rowColor}`);
    keysName.forEach( key => {
      const td = document.createElement('td');
      td.setAttribute("name", `${key}`);
      td.innerText = obj[key];
      productRow.appendChild(td);
    })

    table.appendChild(productRow);
    rowColor++
    rowColor = rowColor % 2;
  })
  
  rootElement.appendChild(table);
}