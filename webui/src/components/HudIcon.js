import React from "react"
import sprites from "../sprites.json"
import spriteImage from "../assets/sprites.png"

const spritePath = window.WebUI ? "fb://UI/Static/Hud3dIconsWin32" : spriteImage

const pixel =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="

const px = (value) => (value / 1080) * 100 + "vh"

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
  return (
    <>
      <img
        src={pixel}
        className="hud-icon"
        style={{
          width: px(i.width),
          height: px(i.height),
          // objectFit: "cover",
          // background: "url(fb://UI/Static/Hud3dIconsWin32)",
          // background: "url('../../assets/sprites.png')",
          background: `url("${spritePath}")`,
          // backgroundPosition: "-142px -890px",
          backgroundPosition: `-${i.x}px -${i.y}px`,
        }}
      />
    </>
  )
}
