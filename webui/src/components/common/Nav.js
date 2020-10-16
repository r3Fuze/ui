import React from "react"
import "./Nav.scss"

export default function Nav() {
  function navClick(e) {
    document
      .querySelectorAll(".nav li")
      .forEach((li) => li.classList.remove("active"))
    e.target.classList.add("active")
  }

  return (
    <ul className="nav" onClick={navClick}>
      <li className="active">
        <p>Deploy</p>
      </li>
      <li>
        <p>Squad</p>
      </li>
      <li>
        <p>Customize</p>
      </li>
    </ul>
  )
}
