import { useContext,useEffect,useImperativeHandle,useRef,useState } from "react";

import { ApiData } from "../../App.jsx";
import { RowSelector,FormInputs } from "../../pages/Home.jsx";
import AutocompleteBox from "../AutocompleteBox/AutocompleteBox.jsx";

import { nextElement } from "../../utils/nextElement.js";
import isNumber from "../../utils/isNumber.js";

export default function PurchasesRecorder() {
  return (
    <div className="form-section">
      <h2>Entradas de Compras</h2>
      <DateField/>
      <ProductSearchField/>
      <VolumesField/>
      <ValuePerVolumeField/>
      <UnitysPerVolumeField/>
    </div>
  );
}

function DateField() {
  const { date,setDate } = useContext(FormInputs)
  const [inputValue,setInputValue] = useState(new Date().toLocaleDateString("en-CA"));

  function changeDate(e) {
    setInputValue(e.target.value)
    setDate(inputValue);
  }
  return(
  <div className="form-field">
    <label htmlFor="report-date">Data</label>
    <input type="date" id="report-date" name="date" value={inputValue} onChange={changeDate} required />
  </div>)
}

function ProductSearchField() {
  let [inputValue, setInputValue] = useState("");
  let item = null; 
  let { selectedRow } = useContext(RowSelector);
  const { products ,productsNames } = useContext(ApiData);

  let keySelected = selectedRow["Produto"] || "";
  
  if( keySelected && !inputValue || keySelected !== inputValue && selectedRow) {
    setInputValue(keySelected);
  } 

  if(isNumber(inputValue)) {
    const product = Array.from(products).find(p => p["Codigo"] === Number(inputValue));
    if(product === undefined) {
      console.error("[NOT FOUND] product not found.");
    } else {
      item = product["Nome"];
    }
  } else if (inputValue && !isNumber(inputValue)) {
    item = inputValue;
  }

  useEffect(() => {
    if(!selectedRow) {
      setInputValue("");
    }
  },[selectedRow,setInputValue])

  const searchAreaDiv = useRef(null);
  return(
    <div className="form-field">
      <label htmlFor="product-name">Produto</label>
      <div ref={searchAreaDiv} className="search-area">
        <input type="text" id="product-name" name="productName" placeholder="Melancia..." onChange={(e) => {
          const thisValue = e.target.value.toUpperCase();
          e.target.value = thisValue;
          setInputValue(thisValue);
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown") {
            e.preventDefault();
            nextElement(e.target);
          }
        }}
        value={inputValue} autoComplete="off" required/>
        <AutocompleteBox inputValue={inputValue} setValue={setInputValue} itemToSearch={item} items={productsNames}/>
      </div>
    </div>
  )
}

function VolumesField() {
  let [inputValue, setInputValue] = useState("");

  let { selectedRow } = useContext(RowSelector);
  let keySelected = selectedRow["Volumes"] || "";

  useEffect(() => {
    if( keySelected && !inputValue|| keySelected !== inputValue ) {
      setInputValue(keySelected);
    } 
  },[setInputValue,keySelected])

  return(
    <div className="form-field">
      <label htmlFor="volumes">Volumes</label>
      <input type="number" id="volumes" name="volumes" onChange={
        (e) => {
          setInputValue(e.target.value)
        }
      } value={inputValue} min={0} step={0.01} required/>
    </div>
  )
}

function ValuePerVolumeField() {
  const {setValuePerVolume} = useContext(FormInputs);
  let { selectedRow } = useContext(RowSelector);

  let [inputValue, setInputValue] = useState("");
  let keySelected = selectedRow["Valor por Volume"] || "";

  useEffect(() => {
    if( keySelected && !inputValue|| keySelected !== inputValue ) {
      setInputValue(keySelected);
    } 
  },[setInputValue,keySelected])

  return(
    <div className="form-field">
      <label htmlFor="value-per-volume">Valor por Volume</label>
      <input type="number" id="value-per-volume" name="valuePerVolume" onChange={(e) => {
        setInputValue(e.target.value);
        setValuePerVolume(e.target.value);
      }} value={inputValue}  min={0} step={0.01} required />
    </div>
  )
}

function UnitysPerVolumeField() {
  const {setUnitysPerVolume} = useContext(FormInputs);
  let { selectedRow } = useContext(RowSelector);
  
  let [inputValue, setInputValue] = useState("");
  let keySelected = selectedRow["Unidades por Volume"] || "";

  useEffect(() => {
    if( keySelected && !inputValue|| keySelected !== inputValue ) {
      setInputValue(keySelected);
    }
  },[setInputValue,keySelected])

  return(
    <div className="form-field">
      <label htmlFor="unitys-per-volume">Unidades por Volume</label>
      <input type="number" id="unitys-per-volume" name="unitysPerVolume" onChange={(e) => {
        setInputValue(e.target.value);
        setUnitysPerVolume(e.target.value);
      }} value={inputValue} min={0} step={0.01} required />
    </div>
  )
}