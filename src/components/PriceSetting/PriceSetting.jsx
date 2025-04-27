import { useContext,useState,useEffect } from "react";
import { RowSelector,FormInputs } from "../../pages/Home.jsx";

export default function PriceSetting() {
  const {unitysPerVolume,valuePerVolume} = useContext(FormInputs);
  
  const unityPrice = Number(valuePerVolume)/Number(unitysPerVolume) || "";

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

  let { selectedRow } = useContext(RowSelector);
  let keySelected = selectedRow["Markup"] || "";

  if(keySelected) {
    keySelected = (Number(keySelected) * 100).toFixed(2) ;
  }

  useEffect(() => {
    if( keySelected && !inputValue|| keySelected !== inputValue ) {
      setInputValue(keySelected);
    } 
  },[setInputValue,keySelected])

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

  let { selectedRow } = useContext(RowSelector);
  let keySelected = selectedRow["Preco de Venda"] || "";

  useEffect(() => {
    if( keySelected && !inputValue|| keySelected !== inputValue ) {
      setInputValue(keySelected);
    } 
  },[setInputValue,keySelected])

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
  const { unitysPerVolume, valuePerVolume } = useContext(FormInputs);
  
  let { selectedRow } = useContext(RowSelector);
  let keySelected = selectedRow["Preco de Venda"] || "";

  useEffect(() => {
    if( keySelected && !inputValue || keySelected !== inputValue ) {
      setInputValue(keySelected);
    } 
    if (unitysPerVolume && valuePerVolume) {
      const price = Number(valuePerVolume)/Number(unitysPerVolume).toFixed(2);
      setInputValue(price);
    }
  },[setInputValue,keySelected,unitysPerVolume,valuePerVolume])

  return(
    <div className="form-field">
      <label htmlFor="unity-price">Preço Unitário</label>
      <input type="number" id="unity-price" name="unityPrice" value={inputValue} min={0} step={0.01} readOnly/>
    </div>
  )
}