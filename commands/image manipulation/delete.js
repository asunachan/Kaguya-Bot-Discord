const Discord = require("discord.js");
const canvacord = require("canvacord");

module.exports = {
  name: "delete",
  category: "🖼 | Image Manipulation",
  usage: "delete <mention user>",
  description: "Manipulation delete avatar",
  run: async (bot, message, args) => {
    let avatar = message.mentions.users.first()
      ? message.mentions.users
          .first()
          .displayAvatarURL({ size: 512, format: "png" })
      : message.author.displayAvatarURL({ size: 512, format: "png" });

    let image = await canvacord.delete(avatar);
    let attachment = new Discord.MessageAttachment(image, "delete.png");
    message.channel.send(attachment);
  }
};
