import React from "react"
import ReactDOM from "react-dom"
import "reset-css"
import "./index.scss"
import App from "./App"

if (!window.WebUI) {
  document.body.classList.add("browser")
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)
