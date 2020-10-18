import React from "react"
import DeployScreen from "./deploy/DeployScreen"
// import SpriteFinder from "./SpriteFinder"
import "./Menu.scss"

export default function Menu() {
  return (
    <div className="container">
      <DeployScreen />
      {/* <SpriteFinder /> */}
    </div>
  )
}
