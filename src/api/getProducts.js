export default async function getProducts() {
  const res = await (await fetch(`${import.meta.env.VITE_APIURL}/products`)).json();
  return res;
}