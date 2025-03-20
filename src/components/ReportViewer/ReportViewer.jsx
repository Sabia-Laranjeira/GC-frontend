export default function ReportViewer() {
  return(
  <section className="report-viewer-section">
  <div className="reload-button-div">
    <button id="reload-form-button" className="reload-button">{'\u{1F503}'}</button>
  </div>
  <div id="report-viewer" className="window-viewer-report"></div>
  <div>
    <a id="export-report-button" >Baixar</a>
  </div>
</section>)
}