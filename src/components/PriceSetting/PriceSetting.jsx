import GenerateFormField from "../../utils/GenerateFormFields";
import { elementsAttributes, elementsLabels } from "./priceHTMLData.js";


export default function PriceSetting() {
  const elements = [];
  for(let i in elementsAttributes) {
    elements.push(<GenerateFormField key={i} label={elementsLabels[i]} inputAttributes={elementsAttributes[i]}/>)
  }
  return(elements)
} 