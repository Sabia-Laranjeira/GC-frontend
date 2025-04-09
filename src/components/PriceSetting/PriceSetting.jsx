import GenerateFormField from "../../utils/GenerateFormFields";
import { elementsAttributes, elementsLabels } from "./priceHTMLData.js";

export default function PriceSetting() {
  const formFields = [];
  for(let i in elementsAttributes) {
    formFields.push(<GenerateFormField key={i} label={elementsLabels[i]} inputAttributes={elementsAttributes[i]}/>)
  }
  return(
    <div className="form-section">
      <h2>Formação de preços</h2>
      {formFields}
    </div>
  )
} 