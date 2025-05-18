import './App.css'

import Home from './pages/Home.jsx'
import getProducts from './api/getProducts.js'
import { createContext, useEffect, useState } from 'react'

export const ApiData = createContext();

function App() {
  const [products,setProducts] = useState("");
  useEffect(() => {
    (async () => {
      setProducts(await getProducts());
    })()
  },[setProducts])
  let productsNames = null;
  if(products) {
    productsNames = products.map((p) => p["Nome"]);
  }

  return (
    <>
    <ApiData.Provider value={{products,productsNames}}>
      <Home/>
    </ApiData.Provider>
    </>
  )
}

export default App
