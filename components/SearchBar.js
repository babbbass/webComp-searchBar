export class SearchBar extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: "open" })
  }

  connectedCallback() {
    const searchPlaceholder = this.getAttribute("data-placeholder")
    this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="./components/SearchBar.css">
    <ion-icon class="search-icon" name="search"></ion-icon>
    <input class="search-input" type="search" placeholder="${searchPlaceholder}">
    `

    const searchInput = this.shadowRoot.querySelector(".search-input")

    searchInput.addEventListener("input", (event) => {
      this.dispatchEvent(new CustomEvent("search", { detail: event }))
    })
  }
}
