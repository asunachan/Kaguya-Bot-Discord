const Discord = require("discord.js");
const { danceP } = require("../../assets/json/actions.json");

module.exports = {
  name: "dance",
  category: "🎭 | Actions",
  description: "Send random anime dance image",
  run: async (bot, message, args) => {
    //var recipient = message.content.split(/\s+/g).slice(1).join(" ");
    const dance = danceP[Math.round(Math.random() * (danceP.length - 1))];

    const embed = new Discord.MessageEmbed().setColor("RANDOM").setImage(dance);
    message.channel.send(embed);
  }
};
