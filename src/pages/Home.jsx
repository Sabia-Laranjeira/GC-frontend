import { useState, createContext, useContext, useEffect } from "react";

import { ApiData } from "../App.jsx";
import sendPurchaseRecord from "../api/sendPurchaseRecord.js";

import PurchasesRecorder from "../components/PurchasesRecorder/PurchasesRecorder.jsx"
import PriceSetting from "../components/PriceSetting/PriceSetting.jsx"
import ReportViewer from "../components/ReportViewer/ReportViewer.jsx"
import getReportFromDate from "../api/getReportFromDate.js";
import overwritePurchaseRecord from "../api/overwritePurchaseRecord.js";

export const RowSelector = createContext();
export const FormInputs = createContext();

export default function Home() {
  const { products, setReport,report } = useContext(ApiData);
  
  const [date, setDate] = useState("");
  const [unitysPerVolume,setUnitysPerVolume] = useState(0);
  const [unityPrice,setUnityPrice] = useState(0);
  const [valuePerVolume,setValuePerVolume] = useState(0);
  const [sellingPrice,setSellingPrice] = useState(0);
  const [markup,setMarkup] = useState(0);
  
  const [selectedRow, selectRow] = useState("");
  useEffect(() => {
    if(!date) {
      setDate(new Date().toLocaleDateString("en-CA"));
    } else if (date) {
      (async () => {
        const reportList = await getReportFromDate(date)
        if(reportList) {
          setReport(await reportList["Relatorio"]);
        }
      })()
    }
  },[date,setDate,getReportFromDate,setReport])
  
  return (<>
    <RowSelector.Provider value={{selectedRow,selectRow}}>
        <FormInputs.Provider value={{
          date,
          setDate,
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
      <section>
          <form id="report-form" action={async (formData) => {
            const productCode = Array.from(products).find(p => p["Nome"] === formData.get("productName"))["Codigo"];
            formData.set("markup",markup);
            formData.set("productCode",productCode);
            
            if(selectedRow) {
              for (const key of formData.keys()) {
                console.log(key);
              }
              const { report } = await overwritePurchaseRecord(formData);
              if(report) {
                setReport(report["Relatorio"]);
              }
              
            } else {
              const {report} = (await sendPurchaseRecord(formData));
              if(report){
                setReport(report["Relatorio"]);
              }
            }

          }}>
            <PurchasesRecorder/>
            <PriceSetting/>
            <div className="form-buttons-area">
              <input className="form-button" type="submit"  value={selectedRow? "Atualizar":"Registrar"}/>
              <input type="button" className="neutral-button" value="Voltar" onClick={
                () => {
                  selectRow(false)
                }
              } />
            </div>
          </form>
      </section>
      <section>
        <ReportViewer/>
      </section>
        </FormInputs.Provider>
    </RowSelector.Provider>
  </>)
}