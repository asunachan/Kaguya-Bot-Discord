const Discord = require("discord.js");

module.exports = {
  name: "announcement",
  category: "👮‍♂️ | Moderation",
  usage: "announcement <channel, Announcement message>",
  aliases: ["announce"],
  description: "Send announcement embed message",
  run: async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.reply("Missing Permission").then(m => m.delete(5000));
    }
    let announceChannel = message.mentions.channels.first();
    let announceDescription = args.slice(1).join(" ");

    let embedAnnouncement = new Discord.MessageEmbed()
      .setTitle("📢 Announcement! 📢")
      .setDescription(announceDescription)
      .setColor("RANDOM");
    let msgEmbed = await announceChannel.send(embedAnnouncement);
    message.delete();
  }
};
