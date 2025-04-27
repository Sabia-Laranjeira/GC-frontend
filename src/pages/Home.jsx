import { useState, createContext } from "react";

import PurchasesRecorder from "../components/PurchasesRecorder/PurchasesRecorder.jsx"
import PriceSetting from "../components/PriceSetting/PriceSetting.jsx"
import ReportViewer from "../components/ReportViewer/ReportViewer.jsx"
import JsonToTable from "../components/JsonToTable/JsonToTable.jsx"

export const RowSelector = createContext();
export const FormInputs = createContext();


export default function Home() {
  const report = [{
    "Codigo": 21,
    "Produto": "LIMAO TAITI",
    "Volumes": 26,
    "Valor por Volume": 260,
    "Unidades por Volume": 54,
    "Total de Unidades": 1404,
    "Valor da Unidade": 4.81,
    "Preco de Venda": 7.61,
    "Markup": 0.58,
    "Subtotal": 6760
  },
    {"Codigo": 1,
    "Produto": "LARANJA PERA",
    "Volumes": 26,
    "Valor por Volume": 260,
    "Unidades por Volume": 54,
    "Total de Unidades": 1404,
    "Valor da Unidade": 4.81,
    "Preco de Venda": 7.61,
    "Markup": 0.58,
    "Subtotal": 6760}
    ];
  let [unitysPerVolume,setUnitysPerVolume] = useState("");
  let [valuePerVolume,setValuePerVolume] = useState("");
  const [selectedRow, selectRow] = useState("");

  return (<>
    <RowSelector.Provider value={{selectedRow,selectRow}}>
      <section>
        <FormInputs.Provider value={{unitysPerVolume,setUnitysPerVolume,valuePerVolume,setValuePerVolume}} >
          <form id="report-form">
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