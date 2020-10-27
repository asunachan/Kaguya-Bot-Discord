const Discord = require("discord.js")
const usedCommand = new Set();

module.exports = {
  name: "ship",
 category: "😄 | Fun",
  usage: "ship <mention user 1> <mention user 2>",
  description: "Ship rate",
run: async (bot, message, args) => {  

  if(usedCommand.has(message.author.id)){
        message.reply('Please wait, you are in cooldown.').then(i => i.delete({timeout: 3000}));
    } else {
      
    let ship = Math.floor(Math.random() * 100) + 1;
    let robber = args[0]
    let user = args[1] || message.author
        
      if(!robber) {
        return message.channel.send("Make sure you pick a person who you want to ship!");
      }
  
    let embed = new Discord.MessageEmbed()
          .setTimestamp(Date.now())
          .setTitle(`${bot.user.username}'s ship machine'`)
          .setDescription(`**${robber}** & **${user}**, your ship rate is... ${ship}%♥`)
          .setColor(`RANDOM`)
          .setFooter(`Ship by ${message.author.username}`)
          message.channel.send(embed).then(m => {
m.react('❤')
m.react('🖤')
m.react('🤍')            
m.react('💙')})
      
      usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 10000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
    }
    
  }
}