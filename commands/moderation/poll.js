const Discord = require("discord.js")

module.exports = {
  name: "poll",
  category: "👮‍♂️ | Moderation",
  usage: "poll <channel tag> <text>",
  description: "Get Fresh Advice :D",
run: async (bot, message, args) => {  

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.reply("Missing Permission").then(m => m.delete(5000));
    }
    let pollChannel = message.mentions.channels.first();
    let pollDescription = args.slice(1).join(" ");

    let embedPoll = new Discord.MessageEmbed()
      .setTitle("😲 New Poll! 😲")
      .setDescription(pollDescription)
      .setColor("RANDOM");
    let msgEmbed = await pollChannel.send(embedPoll);
    await msgEmbed.react("✅");
    await msgEmbed.react("❌");
    message.delete();
  }

}