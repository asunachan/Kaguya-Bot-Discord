const discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const os = require("os");
const { version } = require("discord.js");

module.exports = {
  name: "stats",
  description: "Show bot stats",
  category: "🌏 | General",
  run: async (bot, message, args) => {

    var uptime = moment
      .duration(bot.uptime)
      .format("d[ days], h[ hours], m[ minutes, and ]s[ seconds]");

    const server = bot.guilds.cache.size;
    const channel = bot.channels.cache.size;
    const user = bot.users.cache.size;

    //   const memory = bot.Util.bytesToSize(process.memoryUsage().heapUsed);
    //   const total = bot.Util.bytesToSize(require("os").totalmem); | 
    const ping = bot.ws.ping;

    const statsembed = new discord.MessageEmbed()
      .setAuthor(`Kaguya stats`, bot.user.displayAvatarURL())
      .addFields({
        name: `Uptime`,
        value: "```" + uptime + "```",
        inline: true
      })
      .addFields({
        name: `Client Statistics`,
        value:
          "```" +
          `Users         : ${user}
Servers       : ${server}
Channels      : ${channel}` +
          "```",
        inline: true
      })
      .addFields({
        name: `OS Host`,
        value:
          "```" +
          `Processor     : ${require("os").cpus().length}
Memory Usage  : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB 
Ping          : ${ping} ms
Node.JS       : ${process.version}
Discord.JS    : v${version}
CPU           : ${require("os").cpus()[0].model}` +
          "```",
        inline: true
      })
      .addFields({
        name: `👑Developer👑`,
        value: "```" + `Saekyo` + "```",
        inline: true
      });
    message.channel.send(statsembed);
  }
};
