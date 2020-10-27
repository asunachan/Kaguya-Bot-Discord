const Discord = require("discord.js");

module.exports = {
  name: "ping",
  category: "🌏 | General",
  description: "Check bot ping",
  run: async (bot, message, args) => {
    const m = await message.channel.send("Pinging...");
    m.edit(
      `🏓Latency is ` +
        "`" +
        `${m.createdTimestamp - message.createdTimestamp}ms` +
        "`" +
        ` | API Latency is ` +
        "`" +
        `${Math.round(bot.ws.ping)}ms` +
        "`" +
        ``
    );
  }
  // message.channel.send("🏓 Pong! `" + bot.ws.ping + "ms`");
  //message.delete({ timeout: 4000 }); //angkanya bebas
};
