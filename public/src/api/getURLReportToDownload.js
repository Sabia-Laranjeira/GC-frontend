import { apiURL } from "./url.js";

export default async function getURLReportToDownload(date) {
  const downloadFileReponse = await fetch(`${apiURL}/download-report-xlsx?date=${encodeURIComponent(date)}`);
  if(!downloadFileReponse.ok) {
    return
  }
  const fileBlob = await downloadFileReponse.blob();
  const fileURL = URL.createObjectURL(fileBlob);
  return fileURL;
}