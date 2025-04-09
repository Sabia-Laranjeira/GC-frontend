import React from "react";
import { useState } from "react";

export default function JsonToTable({ json }) {
  if(!json) {
    return
  }
  const [selectedRow, selectRow] = useState(null);

  //get the object that contains more keys and make the <th> element.
  let headers = null;
  json.forEach((obj) => {
    let keys = Object.getOwnPropertyNames(obj);
    headers = keys;
    if(headers.length < keys.length) {
      headers = keys;
    }
  })
  const rows = json.map((obj) => <tr>{
      headers.map((h,index) => <td key={index}>{obj[h]}</td>)
      }</tr>);

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

/*
<table>
  <thead>
    <tr>
    </tr>
  </thead>
  <tbody>
    <tr><<tr>
  </tbody>
</table>

*/