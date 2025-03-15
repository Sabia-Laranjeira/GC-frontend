export function ReportRegisterButton() {
  const button = document.createElement("input");
  button.setAttribute("id","report-send-button");
  button.setAttribute("name","registerPurchaseButton");
  button.setAttribute("type","submit");
  button.setAttribute("class","report-form-button"); 
  button.setAttribute("value","Registrar");

  return button;
}