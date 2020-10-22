export default {
  BringToFront() {
    return window.WebUI.Call("BringToFront")
  },
  SendToBack() {
    return window.WebUI.Call("SendToBack")
  },
  EnableKeyboard() {
    return window.WebUI.Call("EnableKeyboard")
  },
  DisableKeyboard() {
    return window.WebUI.Call("DisableKeyboard")
  },
  ResetKeyboard() {
    return window.WebUI.Call("ResetKeyboard")
  },
  EnableMouse() {
    return window.WebUI.Call("EnableMouse")
  },
  DisableMouse() {
    return window.WebUI.Call("DisableMouse")
  },
  Show() {
    return window.WebUI.Call("Show")
  },
  Hide() {
    return window.WebUI.Call("Hide")
  },
  DispatchEvent(event, data) {
    return window.WebUI.Call("DispatchEvent", event, data)
  },
  DispatchEventLocal(event, data) {
    return window.WebUI.Call("DispatchEventLocal", event, data)
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
