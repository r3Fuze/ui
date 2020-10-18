function event(type, data) {
  if (window.WebUI) {
    WebUI.Call("DispatchEvent", type, data)
  }
}

export default function logClient(data) {
  if (typeof data === "object") {
    event("LogJSON", JSON.stringify(data))
  } else {
    event("Log", data)
  }

  console.log(data)
}
