const Discord = require("discord.js");
const { Random } = require("something-random-on-discord");
const random = new Random();

module.exports = {
  name: "smug",
  category: "🎭 | Actions",
  description: "Send a random smug picture",
  run: async (bot, message, args) => {
    let data = await random.getAnimeImgURL("smug");
    message.channel.send(data);
  }
};
