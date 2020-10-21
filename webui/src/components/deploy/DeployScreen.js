import React from "react"
import { cnb } from "cnbuilder"
import Nav from "../common/Nav"
import HudIcon from "../HudIcon"
import "./DeployScreen.scss"
import recon from "../../assets/recon.svg"
import vext from "../../util/vext"
import Chat from "../common/Chat"

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
  vext.BringToFront()
  vext.Log("hi!")
  vext.Log(deployPoints)
  // vext.EnableKeyboard()

  return (
    <>
      <Nav />
      <div className="left">
        <div className="header">
          <p>Deploy Points</p>
        </div>
        <ul className="deploy-points">
          <li
            className={cnb("deploy-point", {
              squad: true,
            })}
          >
            <div className="icon">
              <img className="custom-icon" src={recon} />
              <p className="letter">""</p>
            </div>
            <p className="name">Squad 00</p>
          </li>
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
      <Chat />
    </>
  )
}
