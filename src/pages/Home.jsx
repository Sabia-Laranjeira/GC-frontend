import { useState, createContext, useContext } from "react";

import { ApiData } from "../App.jsx";
import PurchasesRecorder from "../components/PurchasesRecorder/PurchasesRecorder.jsx"
import PriceSetting from "../components/PriceSetting/PriceSetting.jsx"
import ReportViewer from "../components/ReportViewer/ReportViewer.jsx"

export const RowSelector = createContext();
export const FormInputs = createContext();

export default function Home() {
  const { products } = useContext(ApiData);
  let [unitysPerVolume,setUnitysPerVolume] = useState(0);
  let [unityPrice,setUnityPrice] = useState(0);
  let [valuePerVolume,setValuePerVolume] = useState(0);
  let [sellingPrice,setSellingPrice] = useState(0);
  let [markup,setMarkup] = useState(0);
  
  const [selectedRow, selectRow] = useState("");
  
  return (<>
    <RowSelector.Provider value={{selectedRow,selectRow}}>
      <section>
        <FormInputs.Provider value={{
          unitysPerVolume,
          setUnitysPerVolume,
          valuePerVolume,
          setValuePerVolume,
          sellingPrice,
          setSellingPrice,
          markup,
          setMarkup,
          unityPrice,
          setUnityPrice    
        }} >
          <form id="report-form" action={(formData) => {
            const productCode = Array.from(products).find(p => p["Nome"] === formData.get("productName"))["Codigo"];
            formData.set("productCode",productCode);
            sendPurchaseRecord(formData)
          }}>
            <PurchasesRecorder/>
            <PriceSetting/>
            <div className="form-buttons-area">
              <input className="form-button" type="submit" value={selectedRow? "Atualizar":"Registrar"}/>
              <input type="button" className="neutral-button" value="Voltar" onClick={
                () => {
                  selectRow(false)
                }
              } />
            </div>
          </form>
        </FormInputs.Provider>
      </section>
      <section>
        <ReportViewer/>
      </section>
    </RowSelector.Provider>
  </>)
}

async function sendPurchaseRecord(formData) {
  const formDataJson = JSON.stringify(Object.fromEntries(formData))
  
  const res = await fetch(`${import.meta.env.VITE_TEST_APIURL}/send-purchase-report`,{
    method: "POST",
    headers: {
      "content-type":"application/json"
    },
    body: formDataJson
  });
}