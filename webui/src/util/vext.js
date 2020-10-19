export default {
  BringToFront() {
    return WebUI.Call("BringToFront")
  },
  SendToBack() {
    return WebUI.Call("SendToBack")
  },
  EnableKeyboard() {
    return WebUI.Call("EnableKeyboard")
  },
  DisableKeyboard() {
    return WebUI.Call("DisableKeyboard")
  },
  ResetKeyboard() {
    return WebUI.Call("ResetKeyboard")
  },
  EnableMouse() {
    return WebUI.Call("EnableMouse")
  },
  DisableMouse() {
    return WebUI.Call("DisableMouse")
  },
  Show() {
    return WebUI.Call("Show")
  },
  Hide() {
    return WebUI.Call("Hide")
  },
  DispatchEvent(event, data) {
    return WebUI.Call("DispatchEvent", event, data)
  },
  DispatchEventLocal(event, data) {
    return WebUI.Call("DispatchEventLocal", event, data)
  },
  Log(data) {
    console.log("WebUI.Log():", data)
    if (typeof data === "object") {
      return this.DispatchEventLocal("LogJSON", JSON.stringify(data))
    } else {
      return this.DispatchEventLocal("Log", data)
    }
  },
}
