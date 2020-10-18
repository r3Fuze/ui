local uiVisible = true
local isInit = false

Events:Subscribe("Extension:Loaded", function()
  -- WebUI:Init()
  WebUI:EnableMouse()
end)

Events:Subscribe("Log", function(data)
  print(data)
end)

Events:Subscribe("LogJSON", function(data)
  print(json.decode(data))
end)

Events:Subscribe("EnableMouse", function(data)
  WebUI:EnableMouse()
end)

Events:Subscribe("Client:UpdateInput", function(delta)
  if InputManager:WentKeyDown(InputDeviceKeys.IDK_F1) then
    if not isInit then
      WebUI:Init()
    end
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

Hooks:Install("UI:PushScreen", 999, function(hook, screen, graphPriority, parentGraph)
  local screen = UIGraphAsset(screen)

  if screen.name == "UI/Flow/Screen/SpawnScreenPC" then
    if not isInit then
      WebUI:Init()
      isInit = true
    end
    return
  end
end)