const Discord = require("discord.js");
const { disgustP } = require("../../assets/json/actions.json");
const { Lick } = require("../../assets/json/actions.json");

module.exports = {
  name: "lick",
  category: "🎭 | Actions",
  aliases: "lick <mention user>",
  description: "Send a picture of liccking a user",
  run: async (bot, message, args) => {
    //var recipient = message.content.split(/\s+/g).slice(1).join(" ");
    var disgust = disgustP[Math.round(Math.random() * (disgustP.length - 1))];
    var lick = Lick[Math.round(Math.random() * (Lick.length - 1))];

    if (!args[0]) {
      const embed = new Discord.MessageEmbed()
        .setAuthor(`Licks themselves?, ${message.author.username}!`)
        .setColor("RANDOM")
        .setImage(disgust);
      return message.channel.send(embed);
    } else if (message.mentions.users.first() == message.author) {
      const embed = new Discord.MessageEmbed()
        .setAuthor(`Licks themselves?,!, ${message.author.username}!`)
        .setColor("RANDOM")
        .setImage(disgust);
      return message.channel.send(embed);
    } else if (message.mentions.users.first() == "725432896533299200") {
      const embed = new Discord.MessageEmbed()
        .setAuthor(
          `where are you..licking me.. ${message.author.username} Nyaa~~`
        )
        .setColor("RANDOM")
        .setImage(lick);
      return message.channel.send(embed);
    } else if (message.mentions.users.first()) {
      const embed = new Discord.MessageEmbed()
        .setAuthor(
          `${message.author.username} licks ${
            message.mentions.users.first().username
          }`
        )
        .setColor("RANDOM")
        .setImage(lick);
      return message.channel.send({ embed: embed });
    }
  }
};
