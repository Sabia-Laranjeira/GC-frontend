import { apiURL } from "./url.js"

export default async function getReportFromDate(date) {
  const URL = `${apiURL}/get-report-from-date?date=${encodeURIComponent(date)}`;
  try {
    const response = await fetch(URL);
    const reportsFromDate = await response.json()
    return reportsFromDate;
  } catch (error) {
    console.error(error)
  }
}