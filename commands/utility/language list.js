const discord = require("discord.js");
module.exports = {
  name: "language",
  category: "🛠 | Utility",
  description: "Show the language list for translate command",
  run: async (bot, message, args) => {
    
        message.channel.send({
    embed:  new discord.MessageEmbed()
      .setTitle('Language list')
      .setColor("RANDOM")
      .setDescription('Language list for translate command'),
    files: [{
      attachment: './message.txt',
      name: 'language list'
    }]
  }).then(i => i.delete({ timeout: 20000 }));
  }
};
