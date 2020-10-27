const Discord = require("discord.js");

module.exports = {
  name: "minesweeper",
  category: "😄 | Fun",
  description: "Minesweeper mini games (not customizable)",
  aliases: ["mine"],
  run: async (bot, message, args) => {
    
    if (message.channel.id == "613979762527830028") {
      message.channel.send("You can't playing minesweeper in general chat");
      // If the channel it wasn't verification channel, ignore it.
      return;
    }
    const Minesweeper = require("discord.js-minesweeper");

    const minesweeper = new Minesweeper({
      returnType: "emoji"
    });
    var mines = minesweeper.start();
    message.channel.send(mines);
  }
};
