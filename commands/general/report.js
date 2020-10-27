const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "report",
  category: "🌏 | General",
  description: "Report a user of your choice!",
  usage: "report <User mention> <reason>",
  run: async (bot, message, args) => {
    
    let User = message.mentions.users.first() || null;

    if (User == null) {
      return message.channel.send(`You did not mention a user!`);
    } else {
      let Reason = args || null;
      if (Reason == null) {
        return message.channel.send(
          `You did not specify a reason for the report!`
        );
      }
      let Avatar = User.displayAvatarURL();
       let Channel = message.guild.channels.cache.find(
      ch =>
        ch.name === "report" ||
        ch.name === "reports"
    );
      if (!Channel)
        return message.channel.send(
          `There is no channel with name - report, server must have a channel named report`
        );
      let Embed = new MessageEmbed()
        .setTitle(`New report!`)
        .setDescription(
          `${message.author.tag} has reported the user \`${User.tag}\`! `
        )
        .setThumbnail(Avatar)
        .addFields(
          { name: "❯ Reporter ID", value: `${message.author.id}`, inline: true },
          { name: "❯ Reporter Tag", value: `${message.author.tag}`, inline: true },
          { name: "❯ Reported ID", value: `${User.id}`, inline: true },
          { name: "❯ Reported Tag", value: `${User.tag}`, inline: true },
          { name: "❯ Reason", value: `\`${Reason.slice(1).join(" ")}\``, inline: true },
          {
            name: "Date (M/D/Y)",
            value: `${new Intl.DateTimeFormat("en-US").format(Date.now())}`,
            inline: true
          }
        );
      Channel.send(Embed);
    }
  }
};
