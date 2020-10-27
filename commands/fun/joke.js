const Discord = require("discord.js");
const { Random } = require("something-random-on-discord");
const random = new Random();

module.exports = {
  name: "joke",
  category: "😄 | Fun",
  description: "Get Fresh Advice",
  run: async (bot, message, args) => {
    let data = await random.getJoke();
    message.channel.send(data);
  }
};
