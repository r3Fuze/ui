local uiVisible = true

Events:Subscribe("Extension:Loaded", function()
  WebUI:Init()
  WebUI:EnableMouse()
end)

Events:Subscribe("WebUIEvent", function(data)
  print(data)
end)

Events:Subscribe("EnableMouse", function(data)
  WebUI:EnableMouse()
end)

Events:Subscribe("Client:UpdateInput", function(delta)
  if InputManager:WentKeyDown(InputDeviceKeys.IDK_F1) then
    if uiVisible then
      WebUI:Hide()
      WebUI:DisableMouse()
    else
      WebUI:Show()
      WebUI:EnableMouse()
    end
    uiVisible = not uiVisible
  end
end)
