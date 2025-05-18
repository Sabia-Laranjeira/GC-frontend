import { useRef, useState } from "react";

export default function AutocompleteBox({inputValue,setValue,itemToSearch,items}) {
    if(!itemToSearch || !items) {
      return
    }
    if(items.includes(inputValue)) {
      return
    }
    const filteredItems =  items.filter((i) => i.startsWith(itemToSearch));
    if(!filteredItems.length) {
      return
    }
    const listItems = filteredItems.map((i,index) => {
      return <div 
      key={index} 
      className={`suggestion-box-item`} 
      tabIndex={-1}
      >{i}</div>
    });
    const autocompleteBox = useRef(null);
    const [currentItemIndex,setCurrentItemIndex] = useState(0);

    return(
      <div ref={autocompleteBox} className="suggestion-box" onClick={e => {
          setValue(e.target.innerText);
        }}
        onKeyDown={e => {
          //This code needs some improvements. But I don't know yet what to change...
          for (const [key,element] of Object.entries(e.target.children)) {
            element.style.backgroundColor = "white";
          }
          if(e.key === "ArrowUp") {
            e.preventDefault();
            let index = currentItemIndex - 1;
            if(index < 0) {
              index = 0
            }
            if(e.target.scrollTop !== 0) {
              e.target.scrollTop -=  e.target.children[index].offsetHeight; 
            }
            e.target.children[index].style.backgroundColor = "rgb(var(--lightest-terciary))";
            setCurrentItemIndex(index);
          } else if(e.key === "ArrowDown") {
            e.preventDefault();
            let index = currentItemIndex + 1;
            if(index > e.target.children.length - 1) {
              index = e.target.children.length - 1;
            }
            e.target.children[index].style.backgroundColor = "rgb(var(--lightest-terciary))";    
            e.target.scrollTop +=  e.target.children[index].offsetHeight - 0.5; 
            setCurrentItemIndex(index);
          } else if(e.key === "Enter") {
            setValue(e.target.children[currentItemIndex].innerText);
          }

        }}
        tabIndex={-1}
        onFocus={ e => {
          if(currentItemIndex === 0 && e.target.children.length > 0) {
            e.target.children[0].style.backgroundColor = "rgb(var(--lightest-terciary))";
          }
        }}
        >
        {listItems}
      </div>)
}
