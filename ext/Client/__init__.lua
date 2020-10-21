local uiVisible = true
local isInit = false
local isKeyboardEnabled = true

Events:Subscribe("Extension:Loaded", function()
  -- WebUI:Init()
  WebUI:EnableMouse()
  Console:Register("enable", "Enable mouse/keyboard", self, function()
    WebUI:EnableMouse()
    WebUI:EnableKeyboard()
  end)
  Console:Register("disable", "Disable mouse/keyboard", self, function()
    WebUI:DisableMouse()
    WebUI:DisableKeyboard()
  end)
  Console:Register("enable_mouse", "Enable mouse", self, function()
    WebUI:EnableMouse()
  end)
  Console:Register("disable_mouse", "Disable mouse", self, function()
    WebUI:DisableMouse()
  end)
  Console:Register("enable_keyboard", "Enable keyboard", self, function()
    WebUI:EnableKeyboard()
  end)
  Console:Register("disable_keyboard", "Disable keyboard", self, function()
    WebUI:DisableKeyboard()
  end)
end)

Events:Subscribe("SendChatMessage", function(data)
  message = json.decode(data)
  print("got new message")
  print(message)

  local localPlayer = PlayerManager:GetLocalPlayer()

  if localPlayer == nil then
    return
  end

  if message.target == "all" then
    ChatManager:SendMessage(message.content)
  elseif message.target == "team" then
    ChatManager:SendMessage(message.content, localPlayer.teamId)
  elseif message.target == "squad" then
    ChatManager:SendMessage(message.content, localPlayer.teamId, localPlayer.squadId)
  end
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
      WebUI:DisableKeyboard()
    else
      WebUI:Show()
      WebUI:EnableMouse()
      WebUI:EnableKeyboard()
    end
    uiVisible = not uiVisible
  end
  if InputManager:WentKeyDown(InputDeviceKeys.IDK_F2) then
    isKeyboardEnabled = not isKeyboardEnabled
    if isKeyboardEnabled then
      WebUI:DisableKeyboard()
    else
      WebUI:EnableKeyboard()
    end
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