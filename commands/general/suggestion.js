const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "suggestion",
  category: "🌏 | General",
  usage: "suggestion <text>",
  description: "send suggestion embed message",
  run: async (bot, message, args) => {
    if (!args.length) {
      return message.channel.send("Please Give the Suggestion");
    }

    let channel = message.guild.channels.cache.find(
      x =>
        x.name === "suggestion" ||
        x.name === "suggestions" ||
        x.name === "💌•❥•suggestion"
    );

    if (!channel) {
      return message.channel.send(
        "There is no channel with name - suggestions, server must have a channel named suggestions"
      );
    }

    let embed = new MessageEmbed()
      .setAuthor("New Suggestions from " + message.author.username)
      .setColor("WHITE")
      .setDescription(args.join(" "))
      .setFooter('Want to make a suggestion?\nWrite in this channel!')

    channel.send(embed).then(m => {
      m.react("✅");
      m.react("❌");
    });

    message.reply("Your suggestions has been send");
  }
};
