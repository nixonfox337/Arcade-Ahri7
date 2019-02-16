const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);MzkwODE5NTg4NDM2MTMxODQw.D0mgVg.KDlJLT4NVjyBC01aB-rCzA3-Pcw
