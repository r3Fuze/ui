import React from "react"

export default function FBResource({ src }) {
  return (
    <>
      <p style={{ fontSize: 15 }}>{src}</p>
      <img id="sprite" src={`fb://${src}`} />
    </>
  )
}
