import React from "react"

export default function GenerateFormField({className = "form-field",label = "",inputAttributes}) {
  return <div className={className}>
    <label htmlFor={ inputAttributes.id }>{label}</label>
    <input type="text" {...inputAttributes}/>
  </div>
}