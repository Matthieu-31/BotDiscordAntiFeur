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

const exampleEmbed = new EmbedBuilder()
.setColor(0xe510db)
.setTitle('Bot anti-blague "feur"')
.setDescription("J'ai créé ce petit bot, pour mettre fin au règne de la terreur que nous impose la blague du 'quoi ?' -Feur \n aucune commande à display, il ne sert qu'à contrer une blague trop répandue");

client.login(token);