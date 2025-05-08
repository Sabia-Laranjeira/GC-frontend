import { useState } from "react";


export default function AutocompleteBox({inputValue,setValue,itemToSearch,items}) {
  if(!itemToSearch || !items) {
    return
  }
  const filteredItems =  items.filter((i) => i.startsWith(itemToSearch));
  if(!filteredItems.length) {
    return
  }
  const [selectedItem, setItem] = useState("");
  const listItems = filteredItems.map((i,index) => {
    return <div key={index} className={`suggestion-box-item`} tabIndex={-1}>{i}</div>
  });
  if( inputValue === selectedItem) {
    return
  }

  return(
      <div className="suggestion-box" onClick={e => {
          setItem(e.target.innerText);
          setValue(e.target.innerText);
        }}>
        {listItems}
      </div>
  )
}
