export default async function overwritePurchaseRecord(formData) {
  const formDataJson = JSON.stringify(Object.fromEntries(formData))

  const res = await fetch(`${import.meta.env.VITE_APIURL}/overwrite-purchase-record`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: formDataJson
  })

  return res.json();
}