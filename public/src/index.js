import OptionsBox from "./components/OptionsSuggetionBox.js";
import MessageBox from "./components/MessageBox.js";
import renderTable from "./components/renderTable.js";

import { ReportOverwriteButton } from "./components/ReportOverwriteButton.js";
import { ReportBackButton } from "./components/ReportBackButton.js";
import { ReportRegisterButton } from "./components/ReportRegisterButton.js";

import searchProduct from "./services/searchProduct.js"; 
import getReportFromDate from "./api/getReportFromDate.js";
import getURLReportToDownload from "./api/getURLReportToDownload.js";

import { apiURL } from "./api/url.js";

const dateEl = document.getElementById("record-date");
const todaysDate = new Date().toLocaleDateString("en-CA");
dateEl.value = todaysDate;

//Reload button

const reloadFormButton = document.getElementById("reload-form-button");
reloadFormButton.addEventListener("click",async () => {
  const { response } = await getReportFromDate(dateEl.value);
  if(!response) {
    return
  }
  renderTable(reportViewEl,response["Relatorio"],"report-table");
})

//-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const reportMainButtonsEl = document.getElementById("report-main-buttons");
const reportButtonsAreaEl = document.getElementById("report-buttons-area-id");

const reportHandlerForm = document.getElementById("report-handler-form");
const reportViewEl = document.getElementById("report-viewer");
const reportSendButton = document.getElementById("report-send-button");

const productCodeEl = document.getElementById("product-code");
const volumesEl = document.getElementById("volumes");
const unitysPerVolumeEl = document.getElementById("unitys-per-volume");
const valuePerVolumeEl = document.getElementById("value-per-volume");
const unityValueEl = document.getElementById("unityValue");
const markupEl = document.getElementById("markup");
const sellingPriceEl = document.getElementById("sellingUnityPrice");
const subtotalEl = document.getElementById("subtotal");

const exportFormButton = document.getElementById("export-report-button");

let productsFound = null;
let productsNames = null;
let reportTable = null
let unitysPerVolume = null;

let reportResponse = await getReportFromDate(dateEl.value);

switch(reportResponse.status) {
  case 200:
    if(!reportResponse.response["Relatorio"].length) {
      break
    }
    renderTable(reportViewEl,reportResponse.response["Relatorio"],"report-table");
    break
  case 404:
    console.error(reportResponse.error)
    break
}

reportHandlerForm.addEventListener("click", (event) => {
  if(event.target.id === "report-back-button") {
    reportMainButtonsEl.innerHTML = "";
    reportMainButtonsEl.appendChild(ReportRegisterButton());
    elementMemory.setAttribute("class",classElMemory)
    event.target.remove();
  } 
})

reportHandlerForm.addEventListener("submit",async (event) => {
  event.preventDefault();
  const formData = new FormData(reportHandlerForm);
  const markupToFloat = Number(formData.get("markup"))/100;
  formData.set("markup",`${markupToFloat}`);

  const data = JSON.stringify(Object.fromEntries(formData));
  let report = null;

  switch(event.submitter.id) {
    case "report-send-button":
      const purchaseReportResponse = await fetch(`${apiURL}/send-purchase-report`, {
        method:"POST",
        headers: {
          "Content-Type":"application/json"
        },
        body: data
      })
      let { response } = await getReportFromDate(dateEl.value);
      report = response["Relatorio"];
      console.log(report)
      if(report) {
        renderTable(reportViewEl,report)
      }
      const {error} = await purchaseReportResponse.json()
    
      switch(error) {
        case "[ALREADY EXISTS]":
          const errorProductAlreadyExist = new MessageBox(reportViewEl,"","error-message-box message-product-already-exists");
          errorProductAlreadyExist.innerText = `Produto já registrado nesta data`;
          errorProductAlreadyExist.show();
          return
      }
      break
    case "report-overwrite-button":
      const overwriteReportResponse = await fetch(`${apiURL}overwrite-purchase-report`, {
        method: "POST",
        headers: {
          "Content-Type":"application/json",
        },
        body: data
      })

      response = await getReportFromDate(dateEl.value);
      report = response["Relatorio"];
      report = await getReportFromDate(dateEl.value);
      if(report) {
        renderTable(reportViewEl,report)
      }
      break
  }
})

reportHandlerForm.addEventListener("keyup", (event) => {
  const volumes = Number(volumesEl.value);
  const valuePerVolume = Number(valuePerVolumeEl.value);
  const unitysPerVolume = Number(unitysPerVolumeEl.value);
  const unityValue = Number(unityValueEl.value);
  let markup = Number(markupEl.value/100);

  if(unitysPerVolume > 0) {
    unitysPerVolumeEl.style.borderColor = "black";
    //const product = productsFound.filter(p => p["Nome"] === suggestionBox.selectedValue);
  } else {
    unitysPerVolumeEl.style.borderColor = "red";
  }

  if(unitysPerVolume > 0 && event.target === unitysPerVolumeEl && productsFound.length === 1) {
    productsFound[0]["UnidadesPorVolume"] = unitysPerVolume;
  }

  if(volumes && valuePerVolume) {
    subtotalEl.value = volumes * valuePerVolume;
  }
  if(valuePerVolume && unitysPerVolume) {
    unityValueEl.value = (valuePerVolume/unitysPerVolume).toFixed(2);
  }
  if(markup && event.target !== sellingPriceEl || event.target === markupEl && unityValue) {
    sellingPriceEl.value = (unityValue * markup + unityValue).toFixed(2);
  } else if(event.target === sellingPriceEl ) {
    markup = ((Number(sellingPriceEl.value)/unityValue - 1) * 100).toFixed(2);
    if(markup < 0) {
      markupEl.value = "";
      return
    }
    markupEl.value = markup;
  } else if(!markup) {
    sellingPriceEl.value = unityValue
  }
})

reportHandlerForm.addEventListener("keydown",(event) => {

  if(event.key === "Enter") {
    event.preventDefault();

    const formInputs =  
    Array.from(reportHandlerForm.elements)
      .filter(e => e.tagName === "INPUT");
    ;
    const inputIndex = formInputs.indexOf(event.target);
    
    if(event.target.id === "search-bar-product") {
      searchBarProductEl.value = productsFound[0]["Nome"];
      productCodeEl.value = productsFound[0]["Codigo"];
      markupEl.value = Number(productsFound[0]["Markup"]) * 100
      unitysPerVolumeEl.value = productsFound[0]["UnidadesPorVolume"];
    }
  
    if(inputIndex !== -1 && inputIndex < formInputs.length - 1) {
      formInputs[inputIndex + 1].focus();
    }
  }

})

reportHandlerForm.addEventListener("change",async (event) => {
  if(event.target === dateEl) {
    reportViewEl.innerHTML = "";
    
    const { status,response } = await getReportFromDate(dateEl.value);
    const errorReportNotFound = new MessageBox(reportViewEl,"","error-message-box");
    if(status === 404) {
      errorReportNotFound.innerText = "Não foi encontrado nenhum relatório nesta data."
      errorReportNotFound.show()
      return
    }
    errorReportNotFound.hide();
    reportTable = response["Relatorio"]
    renderTable(reportViewEl, reportTable, "report-table");
  }
})

exportFormButton.href = await getURLReportToDownload(dateEl.value);
exportFormButton.download = `relatorio_${dateEl.value}.xlsx`;

dateEl.addEventListener("change", async () => {
  exportFormButton.download = `relatorio_${dateEl.value}.xlsx`
  exportFormButton.href = await getURLReportToDownload(dateEl.value);
})

// Esse bloco lida com as funcionalidades da barra de pesquisa. --

const searchAreaBoxEl = document.getElementById("box-area-to-search");
const searchBarProductEl = document.getElementById("search-bar-product");

const errorProductNotFound = new MessageBox(searchAreaBoxEl,"", "error-message-box message-product-not-found")

const suggestionBox = new OptionsBox();
suggestionBox.load(searchAreaBoxEl,"products-options-suggestion","options-suggestion-box");

const suggestionBoxEl = document.getElementById("products-options-suggestion");

searchBarProductEl.addEventListener("keyup",async (event) => {
  if(!searchBarProductEl.value.trim()) {
    suggestionBox.hide();
    return
  }
  productsFound = await searchProduct();
  if(productsFound.error) {
    suggestionBox.hide();
    errorProductNotFound.innerText = "Produto não encontrado."
    errorProductNotFound.show();
    return
  }
  
  productsNames =  productsFound.map((p) => p["Nome"]);
  errorProductNotFound.hide();
  
  if((searchBarProductEl.value).length > 0 && productsFound) {
    suggestionBox.show(productsNames);
  } else {
    suggestionBox.hide();
  }
  
  if(event.key === "ArrowDown") {
    suggestionBox.focus();
  }
});

searchBarProductEl.addEventListener("focus",() => {
  if(errorProductNotFound.isOpen) {
    return;
  }
  suggestionBox.show(productsNames);
})

searchBarProductEl.addEventListener("focusout",() => {
  if(productsFound.length === 1) {
    suggestionBox.hide()
  }
})

suggestionBoxEl.addEventListener("keydown", (event) => {
  if(event.key === "Enter") {
    searchBarProductEl.value = suggestionBox.selectedValue;
    const product = productsFound.filter(p => p["Nome"] === suggestionBox.selectedValue);
    unitysPerVolumeEl.value = product[0]["UnidadesPorVolume"];
    searchBarProductEl.focus()
  } else if(event.key === "ArrowUp" && suggestionBox.selectedIndex === 0) {
    searchBarProductEl.focus()
    suggestionBox.hide();
  }
})

suggestionBoxEl.addEventListener("click",() => {
  searchBarProductEl.value = suggestionBox.selectedValue;
  const product = productsFound.filter(p => p["Nome"] === suggestionBox.selectedValue);
  unitysPerVolumeEl.value = product[0]["UnidadesPorVolume"];
  productCodeEl.value = productsFound[0]["Codigo"];
})  
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=

//Report Viewer features
let elementMemory = null;
let classElMemory = null
let copySendButtonEl = null;

reportViewEl.addEventListener("click", (event) => {
  copySendButtonEl = reportSendButton;
  reportSendButton.remove()
  const element = event.target.parentElement;
  
  if(elementMemory) {
    elementMemory.className = classElMemory;     
  }  
  elementMemory = element;
  classElMemory = elementMemory.className;
  event.target.parentElement.setAttribute("class","selected-row");
  
  const ReportAddButtonExists = Boolean(document.getElementById("report-update-button"));
  const overwriteButtonExists = Boolean(document.getElementById("report-overwrite-button"));
  const reportBackButton = Boolean(document.getElementById("report-back-button"));

  if(!ReportAddButtonExists && !overwriteButtonExists && !reportBackButton){
    reportMainButtonsEl.innerHTML = "";
    reportMainButtonsEl.appendChild(ReportOverwriteButton());
    reportButtonsAreaEl.appendChild(ReportBackButton());
  }

  const selectedTableEl = document.querySelectorAll(".selected-row")[0];

  unitysPerVolumeEl.value = selectedTableEl.children["Unidades por Volume"].innerText; 
  productCodeEl.value = selectedTableEl.children["Codigo"].innerText;
  productCodeEl.setAttribute("readonly","readonly")
  searchBarProductEl.value = selectedTableEl.children["Produto"].innerText;
  searchBarProductEl.setAttribute("readonly","readonly");
  volumesEl.value = selectedTableEl.children["Volumes"].innerText;
  valuePerVolumeEl.value = selectedTableEl.children["Valor por Volume"].innerText;
  markupEl.value = Number(selectedTableEl.children["Markup"].innerText)? Number(selectedTableEl.children["Markup"].innerText) * 100 : 0;
  unityValueEl.value = selectedTableEl.children["Valor da Unidade"].innerText;
  sellingPriceEl.value = selectedTableEl.children["Preco de Venda"].innerText;
})