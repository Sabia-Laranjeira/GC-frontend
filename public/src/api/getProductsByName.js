export default async function getProductsByName(productName) {
  const apiUrl = `http://localhost:3000/api/get-products-by-name?name=${encodeURIComponent(productName)}`
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