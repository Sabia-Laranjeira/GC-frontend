import getProductsByName from "../api/getProductsByName.js";
import getProductByCode from "../api/getProductsByCode.js";
import removeAccents from "../utils/removeAccents.js";
import isNumber from "../utils/isNumber.js";

export default async function searchProduct() {
  try {
    const searchBarProductEl = document.getElementById('search-bar-product');
    let searchBarProductValue = searchBarProductEl.value;
    
    let productsFound = null;
    let productCode = null;

    if(!searchBarProductValue.length) {
      return
    } else if(isNumber(searchBarProductValue)) {
      productCode  = Number(searchBarProductValue);
      productsFound = await getProductByCode(searchBarProductValue);
    } else {
      searchBarProductValue = 
      removeAccents(searchBarProductValue)
      .toUpperCase()
      .trim();
      productsFound = await getProductsByName(searchBarProductValue);
    }
    
    return productsFound;
  } catch (error) {
    console.error(error)
  } 
  
}