const Discord = require("discord.js");
const { cryP } = require("../../assets/json/actions.json");

module.exports = {
  name: "cry",
  category: "🎭 | Actions",
  description: "Send random cry image",
  run: async (bot, message, args) => {
    //var recipient = message.content.split(/\s+/g).slice(1).join(" ");
    const cry = cryP[Math.round(Math.random() * (cryP.length - 1))];

    const embed = new Discord.MessageEmbed().setColor("RANDOM").setImage(cry);
    message.channel.send(embed);
  }
};
