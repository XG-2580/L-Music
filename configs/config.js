module.exports = {
    token: "OTk5OTQ1NjI1NTkwMzIxMTky.Gn15aI.XbIMSvMpJ0FHylP1eoNCDM8HLTlMGs7S9gWESM",
    prefix: "!!", 
    debug: false,
    statcord_token: "statcord.com-Ha4T3t9dzN9IoqYXqiIn",
    topgg_token: "" || process.env.topgg_token,
    youtube_Cookie: "" || process.env.cookie, // needed to play age restricted songs, leave blank if you don't have it
    webhook: { // needed to log all the info you need about your bot
        id: "919114649293697065", // id of your webhook
        token: "IyfRmb89iKK-RGblijlsjzjTrEw_mA29-vhtDO2FtnByBQORZp1jMGL1HmU0ORf-TnuT", // token of your webhook
    },
    activityInterval: 35, //activity interval in seconds, time to change bot activity (recommended is 35 sec)
    autoResumeInterval: 5, // time in seconds to save songs in database in case of restarting the bot and autoreusming songs after restart
    antiCrash_Module: true, // to avoid bot restarts if something is wrong
    ownerId: ["594195050242768899"], // list of owner ids that should have access to secret stuff in the bot
    support_server: "https://discord.gg/PTGzEysqjf", // a link of your support server
    support_server_id: "861490922873028608", // id of your support server
    loadSlashsGlobal: true, // if you want to load slash commands for all guilds leave it to true
    geniusApiToken: "wnZHioOlUIYNOTeUGzeA94wuy2G0uMIn8x1FdrXs9BOQC0NJX2H50MMRjD1A0lgf" || process.env.geniusApiToken, // needed to get songs lyrics https://genius.com/api-clients/new
    embed: { // customize your embed
        color: "#00f7ff", // color of your embed
        footer_text: "L-Music", // text of your footer's embed
        footer_icon: "https://cdn.discordapp.com/avatars/999945625590321192/677c9148f96d7bb7841079045569aa32.png?size=1024", // a link to icon of your embed
    },
    spotify: { // needed to fetch songs from spotify https://developer.spotify.com/
        clientId: `aadba7a2afdf48e5b4201287dd7b70a5` || process.env.spotifyId,
        clientSecret: `b37a392a30de49a09e4e279707cce604` || process.env.spotifySecret
    },
    dashboard: {
        "enabled": true, 
        "license": "3e1bafd7-9557-4367-b497-f97a3a23e2ab",
        "port": 80, // open port for the dashboard
        "domain": "", // http://your.domain
        "redirectUri": "", // redirect uri should be http://your.domain/discord/callback
        "clientId": "999945625590321192" || process.env.clientId, // you bot client id https://discord.com/developers/applications
        "clientSecret": "uPktOEWQM-u2J1DVbV_RLR1_sQyjQY-2" || process.env.clientSecret, // https://discord.com/developers/applications
        "updateFeeds": 20, //update feeds every 20 second, the faster update intervals the more resource being used
        "events": {
            "userLoggedIn": false, // if you want to get informed about who logged into your dashboard
            "websiteView": false, // if you want to get informed about who viewed your dashboard
            "guildSettingsUpdated": false // if you want to get informed about who updated settings in your dashboard
        },
        "usersJoining": false, // if you want users who log into your dashboard join your support server leave it to true
        "imageFavicon": "https://cdn.discordapp.com/avatars/999945625590321192/677c9148f96d7bb7841079045569aa32.png?size=1024", // favicon link for dashboard
        "iconURL": "https://cdn.discordapp.com/avatars/999945625590321192/677c9148f96d7bb7841079045569aa32.png?size=1024", // icon url for dashboard
        "mainColor": "GREEN", // main color of dashboard
        "subColor": "BLACK", // sub color for dashboard
    },
}