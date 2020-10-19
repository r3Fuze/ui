import React from "react"
import ReactDOM from "react-dom"
import { StyleSheetManager } from "styled-components"
import SpriteFinder from "./components/SpriteFinder"
import "reset-css"
import "./index.scss"

if (!window.WebUI) {
  document.body.classList.add("browser")
}

// Replace px with vh
const stylisPlugin = (ctx, property) => {
  if (ctx === 2) {
    return property.replace(
      /(\d+)px/g,
      (_, group) => (parseFloat(group) / 1080) * 100 + "vh"
    )
  }
}

Object.defineProperty(stylisPlugin, "name", { value: "stylis-px-to-vh" })

ReactDOM.render(
  <React.StrictMode>
    <StyleSheetManager stylisPlugins={[stylisPlugin]}>
      <SpriteFinder />
    </StyleSheetManager>
  </React.StrictMode>,
  document.getElementById("root")
)
