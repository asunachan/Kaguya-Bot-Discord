const Discord = require("discord.js");
const db = require("quick.db");
const { default_prefix } = require("../../config.json");
const botconfig = require("../../config.json");

module.exports = {
  name: "customprefix",
  category: "👮‍♂️ | Moderation",
  aliases: ["prefix", "setprefix"],
  description: "Creates A new prefix in the guild",

  run: async (bot, message, args) => {
    //PERMISSION
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(
        "You are not allowed or do not have permission to change prefix"
      );
    }

    if (!args[0]) {
      return message.channel.send(
        "Please give the prefix that you want to set"
      );
    }

    if (args[1]) {
      return message.channel.send("You can not set prefix a double argument");
    }

    if (args[0].length > 3) {
      return message.channel.send(
        "You can not set prefix more than 3 characters"
      );
    }

    if (args.join("") === default_prefix) {
      db.delete(`prefix_${message.guild.id}`);
      return await message.channel.send("Reseted Prefix ✅");
    }

    db.set(`prefix_${message.guild.id}`, args[0]);
    await message.channel.send(`Seted Bot Prefix to ${args[0]}`);
  }
};
