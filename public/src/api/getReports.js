export default async function getReport() {
  const apiURL = "http://localhost:8000/api/get-report";
  try {
    const response = await fetch(apiURL);
    return response.json()
  } catch (error) {
    console.error(error)
  }
}