const Discord = require("discord.js")
const { wastedP } = require('../../assets/json/actions.json');

module.exports = {
  name: "kill",
  category: "🎭 | Actions",
  usage: "kill <mention user>",
  description: "Send a picture of killing a user",
  run: async (bot, message, args) => {
   //var recipient = message.content.split(/\s+/g).slice(1).join(" ");
        const wasted = wastedP[Math.round(Math.random() * (wastedP.length - 1))];
        if (!args[0]){
            const embed = new Discord.MessageEmbed()
                .setAuthor(`${message.author.username} got wasted!`)
                .setColor('RANDOM')
                .setImage(wasted);
            return message.channel.send(embed);

        } else if (message.mentions.users.first() == message.author) {
            const embed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username} got wasted!`)
                .setColor('RANDOM')
                .setImage(wasted);
            return message.channel.send(embed);

        } else if (message.mentions.users.first() == "725432896533299200") {
            const embed = new Discord.MessageEmbed()
                .setAuthor(`Please don't kill me ${message.author.username}`)
                .setColor('RANDOM')
                .setImage(wasted);
            return message.channel.send(embed);

        } else if (message.mentions.users.first()){
            const embed = new Discord.MessageEmbed()
                .setAuthor(`${message.mentions.users.first().username} just go wasted by ${message.author.username}`)
                .setColor('RANDOM')
                .setImage(wasted);
            return message.channel.send(embed);
        }
    }

}