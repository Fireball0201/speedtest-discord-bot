const Discord = require("discord.js")
const client = new Discord.Client({ restTimeOffset: 0});
const speedTest = require('speedtest-net');
const config = require("./config.json")

client.on("ready", async () => {
    console.log(" >> Speedtest Bot started as : " + client.user.tag)
});

client.on("message", async message => {
    if (message.content.startsWith("-speedtest")) {
        
        const waitingembed = new Discord.MessageEmbed()
        .setTitle("Fireball - Speedtest Bot")
        .setColor("YELLOW")
        .setDescription("The Speedtest is running, please wait a bit.")
        .setThumbnail("https://store-images.s-microsoft.com/image/apps.52586.13510798887693184.740d7baf-50aa-4e26-adec-ae739ac12068.c9ef9495-f245-4367-872b-c5cc7b48841d")
        .setImage("https://b.cdnst.net/images/share-logo.png")
        .setFooter("This takes round about 30 Seconds.")
        let msg = await message.channel.send(waitingembed)
        await speedTest().then(speed => {
            
            const finishembed = new Discord.MessageEmbed()
            .setTitle("Fireball - Speedtest Bot")
            .setColor("YELLOW")
        
            .setDescription(`The Speedtest is done, here is the result:\n\nServer: ${speed.server.name} | ${speed.server.location} | ID: ${speed.server.id}\nPacket-Loss: ${speed.packetLoss}`)
            .setFooter("The used Speedtest is speedtest.net")
            .setThumbnail("https://store-images.s-microsoft.com/image/apps.52586.13510798887693184.740d7baf-50aa-4e26-adec-ae739ac12068.c9ef9495-f245-4367-872b-c5cc7b48841d")
            .setImage(`${speed.result.url}.png`)
                
            msg.edit(finishembed)
        })
        
    
        
        
        
    } 
});
client.login(config.token)