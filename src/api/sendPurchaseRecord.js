export default async function sendPurchaseRecord(formData) {
  const formDataJson = JSON.stringify(Object.fromEntries(formData))
  
  const res = await fetch(`${import.meta.env.VITE_TEST_APIURL}/send-purchase-record`,{
    method: "POST",
    headers: {
      "content-type":"application/json"
    },
    body: formDataJson
  });
  
  return res.json();
}