const Discord = require('discord.js');
const bot = new Discord.Client();

const auth = require('./auth.json');
const token = auth.token;

bot.on('ready', () =>{
    console.log('online');
})

bot.login(token);