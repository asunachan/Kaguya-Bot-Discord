const Discord = require("discord.js");
const canvacord = require("canvacord");

module.exports = {
  name: "facepalm",
  category: "🖼 | Image Manipulation",
  description: "Get facepalm image manipulation",
  run: async (bot, message, args) => {
    let avatar = message.mentions.users.first()
      ? message.mentions.users
          .first()
          .displayAvatarURL({ size: 512, format: "png" })
      : message.author.displayAvatarURL({ size: 512, format: "png" });

    let image = await canvacord.facepalm(avatar);
    let attachment = new Discord.MessageAttachment(image, "facepalm.png");
    message.channel.send(attachment);
  }
};
