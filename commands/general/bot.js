const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

module.exports = {
  name: "bot-info",
  category: "🌏 | General",
  aliases: ["bot"],
  description: "Show bot profile",
  run: async (bot, message, args) => {
    var uptime = moment
      .duration(bot.uptime)
      .format("d[ days], h[ hours], m[ minutes, and ]s[ seconds]");
    const botEmbed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(
        "Bot Information",
        bot.user.displayAvatarURL({ format: "png", dynamic: true })
      )
      .setThumbnail(bot.user.displayAvatarURL({ format: "png", dynamic: true }))
      //   .setTitle("Donate")
      //   .setURL("https://saweria.co/donate/Saekyo")
      .setTitle("Invite")
      .setURL("https://discord.com/api/oauth2/authorize?client_id=725432896533299200&permissions=8&redirect_uri=https%3A%2F%2Fkaguya-bot-web.glitch.me%2F&response_type=code&scope=guilds%20bot")
      .addField("❯ Bot Name", "```" + `${bot.user.username}` + "```")
      .addField("❯ Bot Id", "```725432896533299200```")
      .addField("❯ Created By", "```Rejs#9735```")
      .addField("❯ API Latency", "```" + `${Math.round(bot.ws.ping)}ms` + "```")
      .addField(
        "❯ Uptime",
        "```" + `⌛ | I've been up and running for ${uptime}!` + "```"
      )
      .addField("❯ Created At", "```" + bot.user.createdAt + "```")
      .addField("❯ Bot Invite", `[Click here](https://discord.com/api/oauth2/authorize?client_id=725432896533299200&permissions=8&redirect_uri=https%3A%2F%2Fkaguya-bot-web.glitch.me%2F&response_type=code&scope=guilds%20bot)`)
      .addField("❯ Bot Website", `[Click here](https://kaguya-website.glitch.me/)`)
      .setFooter("©️ 2020 Saekyo")
      .setTimestamp();
    message.channel.send(botEmbed);
    message.delete({ timeout: 4000 }); //angkanya bebas
  }
};
