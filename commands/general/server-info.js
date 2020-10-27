const Discord = require("discord.js");

module.exports = {
  name: "server-info",
  category: "🌏 | General",
  aliases: ["server"],
  description: "Get server information",
  run: async (bot, message, args) => {
    const serverEmbed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(message.guild.name, message.guild.iconURL({ format: "png" }))
      .setThumbnail(message.guild.iconURL({ format: "png", dynamic: true }))
      .addField("❯ Name", "```" + message.guild.name + "```", true)
      .addField("❯ ID", "```" + message.guild.id + "```", true)
      .addField("❯ Owner", "```" + message.guild.owner.user.tag + "```", true)
      .addField(
        "❯ Region",
        "```" + message.guild.region.toUpperCase() + "```",
        true
      )
      .addField("❯ Members", "```" + message.guild.memberCount + "```", true)
      .addField("❯ Roles", "```" + message.guild.roles.cache.size + "```", true)
      .addField(
        "❯ Channels",
        "```" +
          message.guild.channels.cache.filter(
            channel => channel.type !== "category"
          ).size +
          "```",
        true
      )
      .addField("❯ Creation Date", "```" + message.guild.createdAt + "```")
      .setTimestamp();
    message.channel.send(serverEmbed);
    message.delete({ timeout: 4000 });
  }
};
