
export default async function getProductsRecord() {
  const apiUrl = 'http://localhost:8000/api/products'
  try {
    const response = await fetch(apiUrl);
    const productsList = await response.json();
    return productsList;
  } catch (error) {
    console.error(error);
  }
}