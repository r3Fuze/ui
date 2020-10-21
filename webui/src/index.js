import React from "react"
import ReactDOM from "react-dom"
import { StyleSheetManager } from "styled-components"
import Menu from "./components/Menu"
import "reset-css"
import "./index.scss"

if (!window.WebUI) {
  document.body.classList.add("browser")
  window.WebUI = {
    Call(event, ...data) {
      if (event.includes("DispatchEvent")) {
        console.log("WebUI.Call():", event, data)
      } else {
        console.log("WebUI.Call():", event)
      }

      return true
    },
  }
}

// Replace px with vh in styled-components
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
      <Menu />
    </StyleSheetManager>
  </React.StrictMode>,
  document.getElementById("root")
)
