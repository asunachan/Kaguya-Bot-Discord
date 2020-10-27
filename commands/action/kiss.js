const Discord = require("discord.js");
const { kissP } = require("../../assets/json/actions.json");

module.exports = {
  name: "kiss",
  category: "🎭 | Actions",
  usage: "kiss <mention user>",
  description: "Send a picture of kissing with user",
  run: async (bot, message, args) => {
    //var recipient = message.content.split(/\s+/g).slice(1).join(" ");
    var kiss = kissP[Math.round(Math.random() * (kissP.length - 1))];

    if (!args[0]) {
      const embed = new Discord.MessageEmbed()
        .setAuthor(
          `You can't kiss yourself, but I'll kiss you, ${message.author.username}!`
        )
        .setColor("RANDOM")
        .setImage(kiss);
      return message.channel.send(embed);
    } else if (message.mentions.users.first() == message.author) {
      const embed = new Discord.MessageEmbed()
        .setAuthor(
          `You can't kiss yourself, but I'll kiss you, ${message.author.username}!`
        )
        .setColor("RANDOM")
        .setImage(kiss);
      return message.channel.send(embed);
    } else if (message.mentions.users.first() == "725432896533299200") {
      const embed = new Discord.MessageEmbed()
        .setAuthor(
          `I-It's not like I wanted you to kiss me or anything ${message.author.username}`
        )
        .setColor("RANDOM")
        .setImage(kiss);
      return message.channel.send(embed);
    } else if (message.mentions.users.first()) {
      const embed = new Discord.MessageEmbed()
        .setAuthor(
          `${message.author.username} kisses ${
            message.mentions.users.first().username
          }`
        )
        .setColor("RANDOM")
        .setImage(kiss);
      return message.channel.send(embed);
    }
  }
};
