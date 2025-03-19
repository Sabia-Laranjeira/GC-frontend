import { apiURL } from "./url.js";

export default async function getReport() {
  try {
    const response = await fetch(`${apiURL}/get-report`);
    return response.json()
  } catch (error) {
    console.error(error)
  }
}