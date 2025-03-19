import { apiURL } from "./url.js";

export default async function getProductsRecord() {
  try {
    const response = await fetch(`${apiURL}/products`);
    const productsList = await response.json();
    return productsList;
  } catch (error) {
    console.error(error);
  }
}