import { apiURL } from "./url.js";

export default async function getProductByCode(productCode) {
  const apiUrl = `${apiURL}/get-product-by-code?code=${encodeURIComponent(productCode)}`
  try {
    const response = await fetch(apiUrl,{
      method: 'GET',
      headers: {
        'Accept': 'application/json' 
      }
    });
    const productsFound = await response.json();
    
    return productsFound;
  } catch (error) {
    console.error(error);
  }
}