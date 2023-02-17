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
    client.user.setStatus("dnd");
    client.user.setActivity("contrer la blague du 'feur'");
});

client.on("messageCreate", message => {
    if(message.content==="feur"){
        message.reply("ouge");
    }
})

client.login(token);