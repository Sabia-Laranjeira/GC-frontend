import React from 'react'
import JsonToTable from '../JsonToTable/JsonToTable.jsx'

export default function ReportViewer() {
  const report = [
            {
                "Codigo": 21,
                "Produto": "LIMAO TAITI",
                "Volumes": 26,
                "Valor por Volume": 260,
                "Unidades por Volume": 54,
                "Total de Unidades": 1404,
                "Valor da Unidade": 4.81,
                "Preco de Venda": 7.61,
                "Markup": 0.58,
                "Subtotal": 6760
            },
            {
                "Codigo": 25,
                "Produto": "MANGA PALMER",
                "Volumes": 2,
                "Valor por Volume": 90,
                "Unidades por Volume": 17,
                "Total de Unidades": 34,
                "Valor da Unidade": 5.29,
                "Preco de Venda": 8.36,
                "Markup": 0.58,
                "Subtotal": 180
            },
            {
                "Codigo": 11,
                "Produto": "BANANA NANICA",
                "Volumes": 2,
                "Valor por Volume": 80,
                "Unidades por Volume": 20,
                "Total de Unidades": 40,
                "Valor da Unidade": 4,
                "Preco de Venda": 6.32,
                "Markup": 0.58,
                "Subtotal": 160
            },
            {
                "Codigo": 55,
                "Produto": "BERINJELA",
                "Volumes": 2,
                "Valor por Volume": 90,
                "Unidades por Volume": 10,
                "Total de Unidades": 20,
                "Valor da Unidade": 9,
                "Preco de Venda": 15.3,
                "Markup": 0.7,
                "Subtotal": 180
            },
            {
                "Codigo": 21,
                "Produto": "LIMAO TAITI",
                "Volumes": 2,
                "Valor por Volume": 40,
                "Unidades por Volume": 22,
                "Total de Unidades": 44,
                "Valor da Unidade": 1.82,
                "Preco de Venda": 2.87,
                "Markup": 0.58,
                "Subtotal": 80
            },
            {
                "Codigo": 41,
                "Produto": "UVA RUBI",
                "Volumes": 1,
                "Valor por Volume": 40,
                "Unidades por Volume": 10,
                "Total de Unidades": 10,
                "Valor da Unidade": 4,
                "Preco de Venda": 6,
                "Markup": 0.5,
                "Subtotal": 40
            }
        ]

  return(
  <section>
    <div className="table-wraper">
        <JsonToTable json={report}/>
    </div>
    <div className="buttons-area">
        <button>Baixar</button> 
    </div>
  </section>
)
}
