const Discord = require("discord.js")
const usedCommand = new Set();

module.exports = {
  name: "simp",
  category: "😄 | Fun",
  usage: "simp [mention user]",
  description: "Rate simp",
run: async (bot, message, args) => {  

  if(usedCommand.has(message.author.id)){
        message.reply('Please wait, you are in cooldown.').then(i => i.delete({timeout: 3000}));
    } else {
      
   let ship = Math.floor(Math.random() * 100) + 1;
 
    let user = message.mentions.users.first() || message.author
 
      if(!user) {
        return message.channel.send("Make sure you pick a person who you want to ship!");
      }
 
    let embed = new Discord.MessageEmbed()
          .setTimestamp(Date.now())
          .setTitle(`${bot.user.username}'s simp machine`)
          .setDescription(`**${user.username}** simp rate is... ${ship}%`)
          .setColor(`RANDOM`)
          message.channel.send(embed)
 
  usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 10000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
    }
}

}