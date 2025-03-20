

export default function PurchasesRecorder() {
  
  return (<section>
     <form id="report-handler-form" name="reportForm" className="report-form">
        <div>
          <h2>Entradas de Compras</h2>
          <div className="report-form-section">
            <div className="report-form-cell">
              <label htmlFor="record-date">Data</label>
              <input type="date" id="record-date" name="date" autoComplete="off" required/>
            </div>
            <div className="report-form-cell">
              <label htmlFor="unitys-per-Volume">Unidades por Volume</label>
              <input type="number" id="unitys-per-volume" name="unitysPerVolume" min="0" step="0.01" required/>
            </div>
            <div className="report-form-cell">
              <label htmlFor="product-code">Código</label>
              <input type="number" id="product-code" name="productCode" required/>
            </div>
            <div className="report-form-cell">
              <label htmlFor="search-bar-product">Produto</label>
              <div id="box-area-to-search" className="search-area-box">
                <input type="text" id="search-bar-product" name="productName" autoComplete="off" required/>
              </div>
            </div>
            <div className="report-form-cell">
              <label htmlFor="volumes">Volumes</label>
              <input type="number" id="volumes" name="volumes" min="0" step="0.01" required/>
            </div>
            <div className="report-form-cell">
              <label htmlFor="value-per-volume">Valor por Volume</label>
              <input type="number" id="value-per-volume" name="valuePerVolume" min="0" step="0.01" required/>
            </div>
            <div className="report-form-cell report-form-cell-subtotal">
              <label htmlFor="subtotal">Subtotal</label>
              <input type="number"  id="subtotal" className="subtotal-input-form" name="subtotal" min="0" step="0.01" value="" disabled/>
            </div>
          </div>
          <h2>Formação de Preço</h2>
          <div className="report-form-section">
            <div className="report-form-cell">
              <label htmlFor="markup">Markup %</label>
              <input type="number" id="markup" name="markup" min="0" step="0.01" required/>
            </div>
            <div className="report-form-cell">
              <label htmlFor="unityValue">Valor Unitário</label>
              <input type="number" id="unityValue" name="unityValue" min="0" step="0.01" required/>
            </div>
            <div className="report-form-cell">
              <label htmlFor="sellingUnityPrice">Preço de Venda</label>
              <input type="number" id="sellingUnityPrice" name="sellingUnityPrice" min="0" step="0.01" required/>
            </div>
          </div>
        </div>
        <div id="report-buttons-area-id" className="report-buttons-area">
          <div id="report-main-buttons">
            <input id="report-send-button" name="registerPurchaseButton" type="submit" className="report-form-button" value="Registrar"/>
          </div>
        </div>
    </form>
    </section>)
    
}
