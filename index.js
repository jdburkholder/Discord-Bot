const Discord = require('discord.js');
const bot = new Discord.Client();

const auth = require('./auth.json');
const token = auth.token;

bot.on('ready', () =>{
    console.log('online');
})

bot.on('message', msg =>{
    if(msg.content === "m!help"){
        msg.reply("Hi! I don't have any commands right now.");
    }
})

bot.login(token);