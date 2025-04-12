import { useContext,useState } from "react";
import GenerateFormField from "../../utils/GenerateFormFields.jsx"

import { SelectedRow } from "../../pages/Home.jsx";

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
  return(
    <div className="form-field">
      <label htmlFor="product-name">Produto</label>
      <input type="text" id="product-name" name="productName" placeholder="Melancia..." required/>
    </div>
  )
}

function VolumesField() {
  return(
    <div className="form-field">
      <label htmlFor="volumes">Volumes</label>
      <input type="number" id="volumes" name="volumes" min={0} step={0.01} required/>
    </div>
  )
}

function ValuePerVolumeField() {
  return(
    <div className="form-field">
      <label htmlFor="value-per-volume">Valor por Volume</label>
      <input type="number" id="value-per-volume" name="valuePerVolume" min={0} step={0.01} required />
    </div>
  )
}

function UnitysPerVolumeField() {
  return(
    <div className="form-field">
      <label htmlFor="unitys-per-volume">Unidades por Volume</label>
      <input type="number" id="unitys-per-volume" name="unitysPerVolume" min={0} step={0.01} required />
    </div>
  )
}