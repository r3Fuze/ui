import React from "react"
import { cnb } from "cnbuilder"
import Nav from "../common/Nav"
import HudIcon from "../HudIcon"
import logClient from "../../util/log"
import "./DeployScreen.scss"

const deployPoints = [
  {
    name: "Squad 01",
    squad: true,
    icon: {
      name: "KitAssault",
      state: "Squad",
    },
  },
  {
    name: "Squad 02",
    squad: true,
    icon: {
      name: "KitRecon",
      state: "Squad",
    },
  },
  {
    name: "Squad 03",
    squad: true,
    icon: {
      name: "KitEngineer",
      state: "Squad",
    },
  },
  {
    name: "RU DEPLOYMENT",
    squad: false,
    icon: {
      name: "KitSupport",
      state: "Default",
    },
  },
  {
    name: "ALPHA",
    squad: false,
    letter: "A",
  },
  {
    name: "BRAVO",
    squad: false,
    letter: "B",
  },
  {
    name: "CHARLIE",
    squad: false,
    letter: "C",
  },
  {
    name: "DELTA",
    squad: false,
    letter: "D",
  },
  {
    name: "ECHO",
    squad: false,
    letter: "E",
  },
]

export default function DeployScreen() {
  return (
    <>
      <Nav />
      <div className="left">
        <div className="header">
          <p>Deploy Points</p>
        </div>
        <ul className="deploy-points">
          {deployPoints.map((point) => (
            <li
              key={`p-${point.name}`}
              className={cnb("deploy-point", {
                squad: point.squad,
              })}
            >
              <div className="icon">
                {point.icon && (
                  <HudIcon icon={point.icon.name} state={point.icon.state} />
                )}
                <p className="letter">{point.letter}</p>
              </div>
              <p className="name">{point.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
