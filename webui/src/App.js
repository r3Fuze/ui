import React from "react"
import "./App.scss"
import FBResource from "./components/FBResource"
import HudIcon from "./components/HudIcon"
import SpriteFinder from "./components/SpriteFinder"

function App() {
  return (
    <div className="App">
      {!window.WebUI && <SpriteFinder />}
      <HudIcon icon="Revive" state="Default" />
    </div>
  )
}

export default App
