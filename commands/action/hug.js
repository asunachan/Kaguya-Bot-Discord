const Discord = require("discord.js");
const { hugP } = require("../../assets/json/actions.json");

module.exports = {
  name: "hug",
  category: "🎭 | Actions",
  usage: "hug <mention user>",
  description: "Send a picture of cuddling with a user",
  run: async (bot, message, args) => {
    //var recipient = message.content.split(/\s+/g).slice(1).join(" ");
    var hug = hugP[Math.round(Math.random() * (hugP.length - 1))];

    if (!args[0]) {
      const embed = new Discord.MessageEmbed()
        .setAuthor(
          `You can't hug yourself, but I'll hug you, ${message.author.username}!`
        )
        .setColor("RANDOM")
        .setImage(hug);
      return message.channel.send(embed);
    } else if (message.mentions.users.first() == message.author) {
      const embed = new Discord.MessageEmbed()
        .setAuthor(
          `You can't hug yourself, but I'll hug you, ${message.author.username}!`
        )
        .setColor("RANDOM")
        .setImage(hug);
      return message.channel.send(embed);
    } else if (message.mentions.users.first() == "725432896533299200") {
      const embed = new Discord.MessageEmbed()
        .setAuthor(
          `Such a warm hug..thank you~~ ${message.author.username} Nyaa~~`
        )
        .setColor("RANDOM")
        .setImage(hug);
      return message.channel.send(embed);
    } else if (message.mentions.users.first()) {
      const embed = new Discord.MessageEmbed()
        .setAuthor(
          `${message.author.username} hugs ${
            message.mentions.users.first().username
          }`
        )
        .setColor("RANDOM")
        .setImage(hug);
      return message.channel.send(embed);
    }
  }
};
