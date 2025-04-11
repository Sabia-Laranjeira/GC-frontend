import { useContext } from "react";
import GenerateFormField from "../../utils/GenerateFormFields.jsx"
import { elementsAttributes, elementsLabels } from "./purchaseHTMLData.js";

import { SelectedRow } from "../../pages/Home.jsx";

export default function PurchasesRecorder() {
  const formFields = [];
  const selectedRow = useContext(SelectedRow);
  let fieldsValue = null
  if(selectedRow) {
    fieldsValue = Array(
      selectedRow["Produto"],
      selectedRow["Volumes"],
      selectedRow["Valor por Volume"],
      selectedRow["Unidades por Volume"]
    );

    elementsAttributes.slice(1).forEach((e,i) => {
      e["defaultValue"] = fieldsValue[i];
    })
  }


  for(let i in elementsAttributes) {
    formFields.push(<GenerateFormField key={i} label={elementsLabels[i]} inputAttributes={elementsAttributes[i]}/>)
  }
  
  return (
    <div className="form-section">
      <h2>Entradas de Compras</h2>
      {formFields}
    </div>
  );
}
