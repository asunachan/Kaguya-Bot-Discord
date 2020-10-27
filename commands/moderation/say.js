const Discord = require("discord.js")

module.exports = {
  name: "say",
  usage: "say <text>",
   category: "👮‍♂️ | Moderation",
  description: "Say the message",
run: async (bot, message, args) => { 
  
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.reply("Missing Permission").then(m => m.delete(5000));}
    let text = args.join(" ");
    if (!text) return message.reply("Please give me some text to say! :)");
    message.delete();
    message.channel.send(text);
  }
}