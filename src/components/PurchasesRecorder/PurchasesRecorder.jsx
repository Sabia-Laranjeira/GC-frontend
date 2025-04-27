import { useContext,useEffect,useImperativeHandle,useRef,useState } from "react";
import { RowSelector,FormInputs } from "../../pages/Home.jsx";

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
  const [date,setDate] = useState(new Date().toLocaleDateString("en-CA"));
  
  function changeDate(e) {
    setDate(e.target.value)
  }
  return(
  <div className="form-field">
    <label htmlFor="report-date">Data</label>
    <input type="date" id="report-date" name="date" value={date} onChange={changeDate} required />
  </div>)
}

function ProductSearchField() {
  let [inputValue, setInputValue] = useState("");

  let { selectedRow } = useContext(RowSelector);
  let keySelected = selectedRow["Produto"] || "";
  
  if( keySelected && !inputValue || keySelected !== inputValue && selectedRow) {
    setInputValue(keySelected);
  } 
  useEffect(() => {
    if(!selectedRow) {
      setInputValue("");
    }
  },[selectedRow,setInputValue])

  return(
    <div className="form-field">
      <label htmlFor="product-name">Produto</label>
      <input type="text" id="product-name" name="productName" placeholder="Melancia..." onChange={(e) => {
        setInputValue(e.target.value);
      }} value={inputValue} required/>
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