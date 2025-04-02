import GenerateFormField from "../../utils/GenerateFormFields.jsx"
import { elementsAttributes, elementsLabels } from "./purchaseHTMLData.js";


export default function PurchasesRecorder() {
  const formFields = [];
  for(let i in elementsAttributes) {
    formFields.push(<GenerateFormField key={i} label={elementsLabels[i]} inputAttributes={elementsAttributes[i]}/>)
  }
  
  return (formFields);
}
