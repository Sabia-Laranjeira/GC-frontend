import { useContext } from "react";
import { SelectedRow } from "../../pages/Home.jsx";

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
  return(
    <div className="form-field">
      <label htmlFor="markup"></label>
      <input type="number" id="markup" name="markup" min={0} step={0.01}/>
    </div>
  )
}

function SellingPriceField() {
  return(
    <div className="form-field">
      <label htmlFor="selling-price">Preço Venda</label>
      <input type="number" id="selling-price" name="sellingPrice" min={0} step={0.01}/>
    </div>
  )
}

function UnityPriceField() {
  return(
    <div className="form-field">
      <label htmlFor="unity-price">Preço Unitário</label>
      <input type="number" id="unity-price" name="unityPrice" min={0} step={0.01}/>
    </div>
  )
}