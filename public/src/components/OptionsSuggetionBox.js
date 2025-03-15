export default class OptionsBox {
  #optionsBox = document.createElement('select');
  #rootElement = null;
  #selectedValue = null;
  #selectedIndex = null;

  get selectedValue() {
    return this.#selectedValue;
  }

  get selectedIndex() {
    return this.#selectedIndex;
  }

  load(rootElement,id,className) {
    try {
      this.#optionsBox.setAttribute("id",`${id}`);
      this.#optionsBox.setAttribute("class",`${className}`);
      this.#rootElement = rootElement;
      rootElement.appendChild(this.#optionsBox);

      this.#optionsBox.addEventListener("click", (event) => {
        this.#selectedIndex = this.#optionsBox.selectedIndex;
        this.#selectedValue = (this.#optionsBox.options[this.#optionsBox.selectedIndex]).value;
        this.hide();
      })

      this.#optionsBox.addEventListener("keyup", (event) => {
        if(event.key === "Enter") {
            this.#selectedIndex = this.#optionsBox.selectedIndex;
            this.#selectedValue = (this.#optionsBox.options[this.#optionsBox.selectedIndex]).value;
            this.hide();
          } else if(event.key === "ArrowUp") {
            this.#selectedIndex = this.#optionsBox.selectedIndex;
            this.#selectedValue = (this.#optionsBox.options[this.#optionsBox.selectedIndex]).value;
          } else if(event.key === "ArrowDown") {
            this.#selectedIndex = this.#optionsBox.selectedIndex;
            this.#selectedValue = (this.#optionsBox.options[this.#optionsBox.selectedIndex]).value;
          }
      })
      
      this.#optionsBox.addEventListener('focusout', () => {
        this.blur();
        this.hide();
      })

      this.#optionsBox.addEventListener('focus', () => {
        this.focus();
      })
    } catch (error) {
      console.error(error)
    }
  }

  show(options) {
    try {
      this.#isArray(options);
      if(this.#isEmpty(options)) {
        return
      }

      this.#optionsBox.innerHTML = "";

      options.forEach(option => {
        const optionEl = document.createElement('option');
        optionEl.setAttribute('value',`${option}`);
        optionEl.innerText = option;
        this.#optionsBox.appendChild(optionEl);
      });
      this.#optionsBox.size = this.#optionsBox.options.length;

      this.#optionsBox.style.display = "flex"
      this.#optionsBox.style.opacity = 1;
      this.#optionsBox.style.visibility = "visible";
    } catch (error) {
      console.error(error)
    }
  }

  hide() {
    this.#optionsBox.style.opacity = 0;
    this.#optionsBox.style.visibility = "hidden";
    this.#optionsBox.style.display = "none";
  }

  focus() {
    this.#optionsBox.style.border = "solid 2px rgb(102, 42, 20)";
    this.#optionsBox.focus();
  }

  blur() {
    this.#optionsBox.style.border = "solid 1px";
    this.#optionsBox.blur();
  }

  #isArray(arr) {
    if(!arr instanceof Array) {
      throw TypeError(`${arr} is not an Array`)
    }
  }

  #isEmpty(str) {
    if(!str) {
      return true;
    }
  }
}