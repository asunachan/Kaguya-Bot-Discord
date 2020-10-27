const Discord = require("discord.js")

module.exports = {
  name: "clear",
  usage: "clear <number of messages>",
   category: "👮‍♂️ | Moderation",
  description: "Instant delete messages",
run: async (bot, message, args) => { 
    if (message.deletable) {
      message.delete();
    }
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.reply("Missing Permission").then(m => m.delete(5000));
    }
    if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
      return message.reply("This is not number").then(m => m.delete(5000));
    }
    let deleteAmount;
    if (parseInt(args[0]) > 100) {
      deleteAmount = 100;
    } else {
      deleteAmount = parseInt(args[0]);
    }
    message.channel
      .bulkDelete(deleteAmount, true)
      .catch(err => message.reply("something went wrong…" + err));
  }
}