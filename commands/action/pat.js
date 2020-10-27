const Discord = require("discord.js")
const { patP } = require('../../assets/json/actions.json');

module.exports = {
  name: "pat",
  category: "🎭 | Actions",
  usage: "pat <mention user>",
  description: "Send a picture of patting with a user",
run: async (bot, message, args) => {  

   //var recipient = message.content.split(/\s+/g).slice(1).join(" ");
        var pat = patP[Math.round(Math.random() * (patP.length - 1))]

        if (!args[0]){
            const embed = new Discord.MessageEmbed()
                .setAuthor(`You can't pat yourself, but I'll pat you!, ${message.author.username}!`)
                .setColor('RANDOM')
                .setImage(pat);
            return message.channel.send(embed);

        } else if (message.mentions.users.first() == message.author) {
            const embed = new Discord.MessageEmbed()
            .setAuthor(`You can't pat yourself, but I'll pat you!, ${message.author.username}!`)
                .setColor('RANDOM')
                .setImage(pat);
            return message.channel.send(embed);

        } else if (message.mentions.users.first() == "725432896533299200") {
            const embed = new Discord.MessageEmbed()
                .setAuthor(`Thank you~~ ${message.author.username} Nyaa~~`)
                .setColor('RANDOM')
                .setImage(pat);
            return message.channel.send(embed);

        } else if (message.mentions.users.first()){
            const embed = new Discord.MessageEmbed()
                .setAuthor(`${message.author.username} pats ${message.mentions.users.first().username}`)
                .setColor('RANDOM')
                .setImage(pat);
            return message.channel.send(embed);
        }
    }
}