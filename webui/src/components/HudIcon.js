import React from "react"
import sprites from "../sprites.json"
const pixel =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="

function getIcon(icon, state) {
  for (const sprite of sprites) {
    if (sprite.name === "UIHudIcon_" + icon) {
      for (const st of sprite.states) {
        if (st.name === "UIIconState_" + state) {
          console.log("Found", sprite.name, st.name)
          return {
            width: st.width,
            height: st.height,
            x: st.x,
            y: st.y,
          }
        }
      }
    }
  }
}

export default function HudIcon({ icon, state }) {
  const i = getIcon(icon, state)
  console.log(i)
  return (
    <>
      <img
        src={pixel}
        style={{
          width: i.width,
          height: i.height,
          objectFit: "cover",
          background: "url(fb://UI/Static/Hud3dIconsWin32)",
          // backgroundPosition: "-142px -890px",
          backgroundPosition: `-${i.x}px -${i.y}px`,
        }}
      />
    </>
  )
}
