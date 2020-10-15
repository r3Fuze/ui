import React from "react"
import "./App.scss"
import FBResource from "./components/FBResource"
import HudIcon from "./components/HudIcon"
import SpriteFinder from "./components/SpriteFinder"
import Test from "./components/Test"

// eslint-disable-next-line no-undef
// WebUI.Call("DispatchEventLocal", "EnableMouse")

const pixel =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="

const weapons = [
  "A91",
  "AEK97",
  "AK74M",
  "AN94",
  "ASVal",
  "CombatKnife",
  "DAO12",
]

const maps = [
  "XP4_Earthquake_Detail_DistanceField",
  "XP4_Earthquake_Detail_DistanceField_Win32_sdf",
  "XP4_Earthquake_Satellite",
  "XP4_Earthquake_Vegetation_DistanceField",
  "XP4_Earthquake_Vegetation_DistanceField_Win32_sdf",
  "CombatAreas/caCL1",
  "CombatAreas/caCL2",
  "CombatAreas/caCS1",
  "CombatAreas/caCS2",
  "CombatAreas/caRA1",
  "CombatAreas/caRA2",
  "CombatAreas/caRA3",
  "CombatAreas/caRD1",
  "CombatAreas/caRD2",
  "CombatAreas/caRD3",
  "CombatAreas/caSDM",
  "CombatAreas/caSRA1",
  "CombatAreas/caSRA2",
  "CombatAreas/caSRD1",
  "CombatAreas/caSRD2",
  "CombatAreas/caTDM",
  "CombatAreas/dfCL1",
  "CombatAreas/dfCL1_Win32_sdf",
  "CombatAreas/dfCL2",
  "CombatAreas/dfCL2_Win32_sdf",
  "CombatAreas/dfCS1",
  "CombatAreas/dfCS1_Win32_sdf",
  "CombatAreas/dfCS2",
  "CombatAreas/dfCS2_Win32_sdf",
  "CombatAreas/dfRA1",
  "CombatAreas/dfRA1_Win32_sdf",
  "CombatAreas/dfRA2",
  "CombatAreas/dfRA2_Win32_sdf",
  "CombatAreas/dfRA3",
  "CombatAreas/dfRA3_Win32_sdf",
  "CombatAreas/dfRD1",
  "CombatAreas/dfRD1_Win32_sdf",
  "CombatAreas/dfRD2",
  "CombatAreas/dfRD2_Win32_sdf",
  "CombatAreas/dfRD3",
  "CombatAreas/dfRD3_Win32_sdf",
  "CombatAreas/dfSDM",
  "CombatAreas/dfSDM_Win32_sdf",
  "CombatAreas/dfSRA1",
  "CombatAreas/dfSRA1_Win32_sdf",
  "CombatAreas/dfSRA2",
  "CombatAreas/dfSRA2_Win32_sdf",
  "CombatAreas/dfSRD1",
  "CombatAreas/dfSRD1_Win32_sdf",
  "CombatAreas/dfSRD2",
  "CombatAreas/dfSRD2_Win32_sdf",
  "CombatAreas/dfSURR",
  "CombatAreas/dfSURR_Win32_sdf",
  "CombatAreas/dfTDM",
  "CombatAreas/dfTDM_Win32_sdf",
]

// eslint-disable-next-line no-undef
const log = (m) => WebUI.Call("DispatchEventLocal", "WebUIEvent", m)

function handleClick() {
  const img = document.getElementById("sprite")
  log(img.naturalWidth)
  log(img.naturalHeight)
}

const coords = {
  recon: {
    width: 20,
    height: 20,
    x: 142,
    y: 890,
  },
}

function App() {
  return (
    <div className="App">
      {/* <canvas id="c"></canvas> */}
      {/* {weapons.map((weapon) => (
          <div key={weapon}>
            <p>{weapon}</p>
            <img src={`fb://UI/Art/Persistence/Weapons/${weapon}`} />
          </div>
        ))} */}

      {/* {maps.map((map) => (
          <div>
            <p>{map}</p>
            <img
              key={map}
              src={`fb://Levels/XP4_Quake/Ui/Minimap/${map}`}
              style={{
                width: 1000,
                height: 1000,
              }}
            />
          </div>
        ))} */}
      {/* <FBResource src={"UI/Art/Persistence/Weapons/AK74M"} />
        <FBResource src={"UI/Art/Persistence/Weapons/Grenade"} />
        <FBResource src={"UI/Art/Persistence/Weapons/M1911"} />
        <FBResource src={"UI/Art/Persistence/Weapons/CombatKnife"} />
        <FBResource src={"UI/Art/Persistence/KitItem/medkit"} />
        <FBResource src={"UI/Art/Persistence/KitItem/defib"} />
        <FBResource
          src={"UI/Art/Persistence/Specializations/ExplosiveResist2"}
        /> */}
      {/* <FBResource src={"UI/Static/Hud3dIconsWin32"} /> */}

      {/* <div
          style={{
            border: "1px solid red",
            display: "inline-block",
            width: coords.recon.width,
            height: coords.recon.height,
            background: "url(fb://UI/Static/Hud3dIconsWin32)",
          }}
        ></div> */}

      {/* <img
        src={pixel}
        style={{
          width: 20,
          height: 20,
          objectFit: "cover",
          background: "url(fb://UI/Static/Hud3dIconsWin32)",
          backgroundPosition: "-142px -890px",
          // transform: "scale(1.25)",
        }}
      /> */}

      {/* <button type="button" onClick={handleClick}>
        Send
      </button> */}

      <HudIcon icon="Revive" state="Default" />

      {/* <Test /> */}

      <SpriteFinder />
    </div>
  )
}

export default App
