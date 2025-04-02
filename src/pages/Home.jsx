import PurchasesRecorder from "../components/PurchasesRecorder/PurchasesRecorder.jsx"
import PriceSetting from "../components/PriceSetting/PriceSetting.jsx"
import ReportViewer from "../components/ReportViewer/ReportViewer.jsx"


export default function Home() {
  return <>
    <PurchasesRecorder/>
    <PriceSetting/>
    <ReportViewer/>
  </>
}