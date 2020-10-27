const discord = require("discord.js")

module.exports = {
  name: "restart",
  description: "Restart the bot",
  aliases: ["refresh"],
  category: "🤴 | Owner",
  run: async (bot, message, args) => {
    
    //OWNER ONLY COMMAND
    if(message.author.id !== "435419273590996993") {
      return message.channel.send("This command can only be used by owner")
    }
   await message.channel.send("Bot has been restarted by " + message.author.username).then(i => i.delete({ timeout: 5000 }));
    process.exit(1);
    
  }
}