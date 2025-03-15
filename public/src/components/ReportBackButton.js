export function ReportBackButton() { 
  const button = document.createElement("input");
  button.setAttribute("id","report-back-button");
  button.setAttribute("type","button");
  button.setAttribute("class","report-form-button");
  button.setAttribute("value","Voltar");
  
  button.addEventListener("click", () => {
    const reportHandlerForm = document.getElementById("report-handler-form");
    const productCodeEl = document.getElementById("product-code");
    const searchBarProductEl = document.getElementById("search-bar-product");

    reportHandlerForm.querySelectorAll("input").forEach((el) => {
      if(el.type === "number" || el.type === "text") {
        el.value = "";
      }
    });

    productCodeEl.removeAttribute("readonly");
    searchBarProductEl.removeAttribute("readonly")
  })
  return button
  }