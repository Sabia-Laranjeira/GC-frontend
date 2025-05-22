export default async function getReportFromDate(date) {
  const req = await (await fetch(`${import.meta.env.VITE_TEST_APIURL}/get-report-from-date?date=${date}`)).json();
  if(req.response === undefined) {
    return
  }
  return req.response;
}