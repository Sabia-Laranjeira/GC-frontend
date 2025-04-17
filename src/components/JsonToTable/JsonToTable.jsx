import React, { useRef,useContext } from "react";
import { useState } from "react";

import { RowSelector } from "../../pages/Home.jsx";

export default function JsonToTable({ json }) {
  if(!json) {
    console.error(" 'json' prop in JsonToTable component is empty");
    return
  }
  const { selectedRow , selectRow } = useContext(RowSelector);
  const [ selectedRowIndex, setSelectedRowIndex ] = useState();  
  const rowsRef = [];
  for(let i = 0; i < json.length; i++) {
    rowsRef[i] = useRef("");
  }

  //get the object that contains more keys and make the <th> element.
  let headers = null;

  json.forEach((obj) => {
    let keys = Object.getOwnPropertyNames(obj);
    headers = keys;
    if(headers.length < keys.length) {
      headers = keys;
    }
  })

  const rows = json.map((obj,i) => <tr key={i} ref={rowsRef[i]} onClick={() => {
        rowsRef.forEach((r) => {
          r.current.className = "";
        })
        selectRow(json[i]);
        setSelectedRowIndex(i);
        rowsRef[i].current.className = "selected-row";
      }}>{
        headers.map((h,index) => <td key={index}>{obj[h]}</td>)
        }</tr>);

  //When no row is selected, the highlight is removed.
  if(!selectedRow && rowsRef[selectedRowIndex] !== undefined) {
    rowsRef[selectedRowIndex].current.className = ""
  }
  return(
  <table>
    <thead>
      <tr>
        {headers.map((h,index) => <th key={index}>{h}</th>)}
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
  </table>
  )
}