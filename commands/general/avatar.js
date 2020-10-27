const Discord = require("discord.js");

module.exports = {
  name: "avatar",
  category: "🌏 | General",
  usage: "avatar <mention user>",
  aliases: ["av"],
  description: "Show user avatar",
  run: async (bot, message, args) => {
    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    let member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(userArgs[0]) ||
      message.guild.members.cache.find(
        x =>
          x.user.username.toLowerCase() === userArgs.slice(0).join(" ") ||
          x.user.username === userArgs[0]
      ) ||
      message.member;

    const avatarEmbed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Avatar")
      .setFooter(`Thanks for using ${bot.user.username}`)
      .setAuthor(
        member.user.tag,
        member.user.displayAvatarURL({ format: "png", dynamic: true })
      )
      .setImage(member.user.displayAvatarURL({ format: "png", dynamic: true, size: 256 }));
    message.channel.send(avatarEmbed);
    message.delete({ timeout: 4000 }); //angkanya bebas
  }
};
