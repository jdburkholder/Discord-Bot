const Discord = require('discord.js');
const bot = new Discord.Client();

const auth = require('./auth.json');
const token = auth.token;

const PREFIX = 'm!';

bot.on('ready', () =>{
    console.log('online');
})

bot.on('message', async message =>{

    if (message.author.bot) return;

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        default:
            message.reply("I don't understand. Try m!help.");
        break;
        case 'help':
            message.reply("Hi! I don't have any commands right now.");
        break;
        case 'status':
            message.reply("I don't know how to tell yet.");
        break;
        case 'start':
            message.reply("Starting! (not really)");
        break;
        case 'shutdown':
            message.reply("Shutting down. (not really)");
    }
})

bot.login(token);