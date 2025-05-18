export default async function getProducts() {
  const res = await (await fetch(`${import.meta.env.VITE_TEST_APIURL}/products`)).json();
  return res;
}