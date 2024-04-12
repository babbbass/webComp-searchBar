import { SearchBar } from "./components/SearchBar.js"

customElements.define("search-bar", SearchBar)

let clientSearch = ""
document
  .querySelector("search-bar")
  .addEventListener("search", ({ detail }) => {
    switch (detail.data) {
      case null:
        clientSearch = clientSearch.slice(0, -1)
        break
      // CROSS
      case undefined:
        clientSearch = ""
        break
      default:
        clientSearch += detail.data
    }
  })
