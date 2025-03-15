export default class MessageBox {
  constructor(rootElement,id = "",className = "") {
    this.#rootElement = rootElement;
    
    this.#element = document.createElement("div");
    this.#element.setAttribute("id",id);
    this.#element.setAttribute("class",className); 

    this.#rootElement.appendChild(this.#element); 
  }
  #rootElement = null;
  #element = null;
  #isOpen = null;

 
  set innerText(text) {
    this.#element.innerText = text;
  }

  get isOpen() {
    return this.#isOpen;
  }

  show() {
    this.#element.style.visibility = "visible";
    this.#element.style.opacity = "1";
    this.#isOpen = true;
  }

  hide() {
    this.#element.style.visibility = "hidden";
    this.#element.style.opacity = "0";
    this.#isOpen = false;
  }
}