import { useContext,useState,useEffect } from "react";
import { RowSelector } from "../../pages/Home.jsx";

export default function PriceSetting() {
  
  return(
    <div className="form-section">
      <h2>Formação de preços</h2>
      <MarkupField/>
      <SellingPriceField/>
      <UnityPriceField/>
    </div>
  )
} 

function MarkupField() {
  let [inputValue, setInputValue] = useState("");
  
    let { selectedRow, selectRow } = useContext(RowSelector);
    let keySelected = selectedRow["Markup"] || "";

    if(keySelected) {
      keySelected = (Number(keySelected) * 100).toFixed(2) ;
    }
  
    useEffect(() => {
      if( keySelected && !inputValue|| keySelected !== inputValue ) {
        setInputValue(keySelected);
      } 
    },[setInputValue,keySelected,selectedRow])

  return(
    <div className="form-field">
      <label htmlFor="markup">Markup</label>
      <input type="number" id="markup" name="markup" onChange={(e) => {
        setInputValue(e.target.value);
      }} value={inputValue} min={0} step={0.01}/>
    </div>
  )
}

function SellingPriceField() {
  let [inputValue, setInputValue] = useState("");

  let { selectedRow, selectRow } = useContext(RowSelector);
  let keySelected = selectedRow["Preco de Venda"] || "";

  useEffect(() => {
    if( keySelected && !inputValue|| keySelected !== inputValue ) {
      setInputValue(keySelected);
    } 
  },[setInputValue,keySelected,selectedRow])

  return(
    <div className="form-field">
      <label htmlFor="selling-price">Preço Venda</label>
      <input type="number" id="selling-price" name="sellingPrice" onChange={(e) => {
        setInputValue(e.target.value);
      }} value={inputValue} min={0} step={0.01}/>
    </div>
  )
}

function UnityPriceField() {
  let [inputValue, setInputValue] = useState("");

  let { selectedRow, selectRow } = useContext(RowSelector);
  let keySelected = selectedRow["Preco de Venda"] || "";

  useEffect(() => {
    if( keySelected && !inputValue|| keySelected !== inputValue ) {
      setInputValue(keySelected);
    } 
  },[setInputValue,keySelected,selectedRow])

  return(
    <div className="form-field">
      <label htmlFor="unity-price">Preço Unitário</label>
      <input type="number" id="unity-price" name="unityPrice" onChange={(e) => {
        setInputValue(e.target.value);
      }} value={inputValue} min={0} step={0.01}/>
    </div>
  )
}