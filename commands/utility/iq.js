const Discord = require("discord.js");

module.exports = {
  name: "iq",
  category: "🛠 | Utility",
  usage: "iq <mention user>",
  description: "Get your IQ",
  run: async (bot, message, args) => {
    let brainuser = message.mentions.users.first() || message.author;

    let iq = Math.floor(Math.random() * 200) + 30;

    let brainembed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`${brainuser.username}'s IQ`)

      .setDescription(`${brainuser.username}'s iq is ${iq}`);

    message.channel.send(brainembed);
  }
};
