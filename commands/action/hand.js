const Discord = require("discord.js");
const { handP } = require("../../assets/json/actions.json");

module.exports = {
  name: "hand",
  category: "🎭 | Actions",
  usage: "hand <mention user>",
  description: "Send picture of holding hands with user",
  run: async (bot, message, args) => {
    //var recipient = message.content.split(/\s+/g).slice(1).join(" ");
    const hand = handP[Math.round(Math.random() * (handP.length - 1))];
    if (!args[0]) {
      const embed = new Discord.MessageEmbed()
        .setAuthor(
          `You can't hold your own hand, but I'll hold your hand, ${message.author.username}!`
        )
        .setColor("RANDOM")
        .setImage(hand);
      return message.channel.send(embed);
    } else if (message.mentions.users.first() == message.author) {
      const embed = new Discord.MessageEmbed()
        .setAuthor(
          `You can't hold your own hand, but I'll hold your hand, ${message.author.username}!`
        )
        .setColor("RANDOM")
        .setImage(hand);
      return message.channel.send(embed);
    } else if (message.mentions.users.first() == "725432896533299200") {
      const embed = new Discord.MessageEmbed()
        .setAuthor(
          `K-Kyaaa I guess I'll hold your hand, ${message.author.username} - senpai!`
        )
        .setColor("RANDOM")
        .setImage(hand);
      return message.channel.send(embed);
    } else if (message.mentions.users.first()) {
      const embed = new Discord.MessageEmbed()
        .setAuthor(
          `Kyaaaa ${message.author.username} holds hands with ${
            message.mentions.users.first().username
          }`
        )
        .setColor("RANDOM")
        .setImage(hand);
      return message.channel.send(embed);
    }
  }
};
