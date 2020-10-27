const Discord = require("discord.js");

module.exports = {
  name: "coinflip",
  category: "🛠 | Utility",
  aliases: ["coin"],
  description: "Flip the coin",
  run: async (bot, message, args) => {
    var choices = ["heads", "tails"];

    var output = choices[Math.floor(Math.random() * choices.length)];

    message.reply(`You got **${output}!**`);
  }
};
