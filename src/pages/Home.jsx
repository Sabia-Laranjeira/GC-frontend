import PurchasesRecorder from "../components/PurchasesRecorder/PurchasesRecorder.jsx"
import PriceSetting from "../components/PriceSetting/PriceSetting.jsx"
import ReportViewer from "../components/ReportViewer/ReportViewer.jsx"
import JsonToTable from "../components/JsonToTable/JsonToTable.jsx"

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
  return <>
  <section>
    <form id="report-form">
      <PurchasesRecorder/>
      <PriceSetting/>
      <input className="form-button" type="submit" value={"Registrar"}/>
    </form>
  </section>
  <section>
    <ReportViewer/>
  </section>
  </>
}