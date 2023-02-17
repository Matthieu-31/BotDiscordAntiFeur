const {Client, GatewayIntentBits} = require('discord.js');
const {token} = require ('./config.json');

const client = new Client 
({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});


client.on('ready', () => {
    console.log("salute");
    client.user.setStatus("online");
    client.user.setActivity("contrer la blague du 'feur'");
});

client.on("messageCreate", message => {

    if(message.content.toUpperCase()==="FEUR"){
        message.reply("ouge");
    }

    else if (message.content.toUpperCase()==="FEUR !"){
        message.reply("ouge");
    }

    else if (message.content.toUpperCase()==="GORGE"){
        message.reply("profonde");
    }

})

client.login(token);