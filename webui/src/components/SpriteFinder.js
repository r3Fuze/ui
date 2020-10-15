import React, { useState } from "react"
import spriteImage from "../assets/sprites.png"
import sprites from "../sprites.json"

const spritePath = window.WebUI ? "fb://UI/Static/Hud3dIconsWin32" : spriteImage

function getIconAtPosition(x, y) {
  for (const sprite of sprites) {
    for (const state of sprite.states) {
      if (
        x > state.minUv.x &&
        x < state.maxUv.x &&
        y > state.minUv.y &&
        y < state.maxUv.y
      ) {
        return {
          sprite: sprite,
          state: state,
        }
      }
    }
  }
}

export default function SpriteFinder() {
  const [name, setName] = useState("...")
  const [borderStyle, setBorderStyle] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  })

  function handleClick(e) {
    e.preventDefault()
    const rect = e.target.getBoundingClientRect()
    const x = Math.round(e.clientX - rect.left)
    const y = Math.round(e.clientY - rect.top)
    const icon = getIconAtPosition(x, y)

    if (icon === undefined) {
      setName("???")
      return
    }

    setBorderStyle({
      left: icon.state.x + rect.left,
      top: icon.state.y + rect.top,
      width: icon.state.width,
      height: icon.state.height,
    })

    setName(
      `${icon.sprite.name.replace("UIHudIcon_", "")}, ${icon.state.name.replace(
        "UIIconState_",
        ""
      )}`
    )
  }

  return (
    <>
      <p>{name}</p>
      <div
        id="border"
        style={{
          position: "absolute",
          border: "1px solid red",
          ...borderStyle,
        }}
      ></div>
      <img
        src={spritePath}
        onClick={handleClick}
        style={{
          border: "none",
        }}
      />
    </>
  )
}
