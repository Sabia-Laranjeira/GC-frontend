export function ReportOverwriteButton() { 
  const button = document.createElement("input");
  button.setAttribute("id","report-overwrite-button");
  button.setAttribute("name","overwriteReportButton");
  button.setAttribute("type","submit");
  button.setAttribute("class","report-form-button");
  button.setAttribute("value","Sobrescrever");

  return button
}