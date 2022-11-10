RegisterServerEvent("magni-report:create")
AddEventHandler("magni-report:create", function(data)
    Discordlog(data)
end)

function Discordlog(data)
    local ts = os.time()
    local time = os.date('%Y-%m-%d %H:%M:%S', ts)
    local connect = {
        {
            ["title"] = data.title,
            ["description"] = ""..data.description,
            ['image'] = { ['url'] = data.img2 },
            ["thumbnail"] = {["url"] = data.img1},
            ["footer"] = {
                ["text"] = ""..time,
            },
            
        }
    }
    PerformHttpRequest(Config.Webhook, function(err, text, headers) end, 'POST', json.encode({username = data.select, embeds = connect}), { ['Content-Type'] = 'application/json' })
end