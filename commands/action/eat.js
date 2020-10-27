const Discord = require("discord.js");
const { eatP } = require("../../assets/json/actions.json");

module.exports = {
  name: "eat",
  category: "🎭 | Actions",
  description: "Send random anime eat image",
  run: async (bot, message, args) => {
    //var recipient = message.content.split(/\s+/g).slice(1).join(" ");
    const eat = eatP[Math.round(Math.random() * (eatP.length - 1))];

    const embed = new Discord.MessageEmbed().setColor("RANDOM").setImage(eat);
    message.channel.send(embed);
  }
};
