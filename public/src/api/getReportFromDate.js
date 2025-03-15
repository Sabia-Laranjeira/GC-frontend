export default async function getReportFromDate(date) {
  const apiURL = `http://localhost:8000/api/get-report-from-date?date=${encodeURIComponent(date)}`;
  try {
    const response = await fetch(apiURL);
    const reportsFromDate = await response.json()
    return reportsFromDate;
  } catch (error) {
    console.error(error)
  }
}