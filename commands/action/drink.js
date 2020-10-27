const Discord = require("discord.js");
const { drinkP } = require("../../assets/json/actions.json");

module.exports = {
  name: "drink",
  category: "🎭 | Actions",
  usage: "drink <mention user>",
  description: "Get random anime drink image",
  run: async (bot, message, args) => {
    //var recipient = message.content.split(/\s+/g).slice(1).join(" ");
    const drink = drinkP[Math.round(Math.random() * (drinkP.length - 1))];

    const embed = new Discord.MessageEmbed().setColor("RANDOM").setImage(drink);
    message.channel.send(embed);
  }
};
