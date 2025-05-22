import { saveAs } from "file-saver";

export default async function downloadReportXLSX(date) {
  const res = await fetch(`${import.meta.env.VITE_TEST_APIURL}/download-report-xlsx?date=${date}`);
  if(!res.ok) {

  }
  const blob = await res.blob();
  saveAs(blob,`relatorio-${date}.xlsx`)
}