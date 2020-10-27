const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

module.exports = {
  name: "uptime",
  category: "🌏 | General",
  description: "Check bot uptime",
  run: async (bot, message, args) => {
    var uptime = moment
      .duration(bot.uptime)
      .format("d[ days], h[ hours], m[ minutes, and ]s[ seconds]");
    const uptimeEmbed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(
        `${bot.user.username}'s uptime`,
        bot.user.displayAvatarURL({ format: "png", dynamic: true })
      )
      .setThumbnail(bot.user.displayAvatarURL({ format: "png", dynamic: true }))
      .addField(
        "❯ Uptime",
        "```" + `⌛ | I've been up and running for ${uptime}!` + "```"
      )
      .setTimestamp();
    message.channel.send(uptimeEmbed);
  }
};
