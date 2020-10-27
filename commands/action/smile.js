const Discord = require("discord.js");
const { smileP } = require("../../assets/json/actions.json");

module.exports = {
  name: "smile",
  category: "🎭 | Actions",
  description: "Send a smile picture",
  run: async (bot, message, args) => {
    //var recipient = message.content.split(/\s+/g).slice(1).join(" ");
    const smile = smileP[Math.round(Math.random() * (smileP.length - 1))];

    const embed = new Discord.MessageEmbed().setColor("RANDOM").setImage(smile);
    message.channel.send(embed);
  }
};
