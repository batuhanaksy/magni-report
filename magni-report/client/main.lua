RegisterNetEvent("magni-report:client:open")
AddEventHandler("magni-report:client:open", function()
    SendNUIMessage({type = "open"})
    SetNuiFocus(true, true)
end)

RegisterCommand(Config.Commandname,function()
    TriggerEvent('magni-report:client:open')
end)

RegisterNUICallback("create", function(data)
    TriggerServerEvent("magni-report:create", data)
end)

RegisterNUICallback("screenshot", function(data)
    exports['screenshot-basic']:requestScreenshotUpload(Config.Screenshot, "files[]", function(data)
        local image = json.decode(data)
        local images = image.attachments[1].proxy_url
        SendNUIMessage({
            ss = images,
            type = "showScreenshot"
        })
    end)
end)

RegisterNUICallback("close", function()
    SetNuiFocus(false, false)
end)