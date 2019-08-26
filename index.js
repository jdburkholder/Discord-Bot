const Discord = require('discord.js');
const bot = new Discord.Client();

const auth = require('./auth.json');
const token = auth.token;

const PREFIX = 'm!';

bot.on('ready', () =>{
    console.log('online');
})

bot.on('message', message =>{
    
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'help':
            message.reply("Hi! I don't have any commands right now.");
        break;
    }
})

bot.login(token);