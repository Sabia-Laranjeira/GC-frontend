export function ReportAddButton() { 
  const button = document.createElement("input");
  button.setAttribute("id","report-add-button");
  button.setAttribute("name","addReportButton");
  button.setAttribute("type","submit");
  button.setAttribute("class","report-form-button");
  button.setAttribute("value","Acrescentar");
  
  return button
  }