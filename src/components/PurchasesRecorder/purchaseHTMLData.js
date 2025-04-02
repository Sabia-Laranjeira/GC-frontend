export const elementsAttributes = [
  {
    type:"date",
    id:"record-date",
    name:"date",
    autoComplete:"off",
    required:true
  },
  {
    type:"text",
    id:"product-search",
    name:"productName",
    autoComplete:"off",
    required:true
  },
  {
    type:"number",
    id:"volumes",
    name:"volumes",
    min:"0",
    step:"0.01",
    required:true
  },
  {
    type:"number",
    id:"value-per-volume",
    name:"valuePerVolume",
    min:"0",
    step:"0.01",
    required:true
  },
  {
    type:"number",
    id:"unitys-per-volume",
    min:"0",
    step:"0.01",
    required:true
  }
]

export const elementsLabels = [
  "Data",
  "Produto",
  "Volumes",
  "Valor por Volume",
  "Unidades por Volume",
]