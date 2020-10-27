const Discord = require("discord.js")

module.exports = {
  name: "respect",
  category: "😄 | Fun",
  aliases : ["f"],
  description: "send respect",
run: async (bot, message, args) => {  
  
        if (!args[0]){
            const embed = new Discord.MessageEmbed()
                .setAuthor(`${message.author.username} has paid their respects.`, message.author.displayAvatarURL({ format: 'png', dynamic: true }))
                .setColor('RANDOM')
                .setFooter(`Press F to pay your respects.`);
            message.channel.send({ embed }).then(m => m.react("🇫"));

            return null;

        } else {
            const embed = new Discord.MessageEmbed()
                .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ format: 'png', dynamic : true }))
                .setColor('RANDOM')
                .setDescription(`${message.author} has paid their respects to ${args.join(" ")}`)
                .setFooter(`Press F to pay your respects.`);
            message.channel.send({ embed }).then(m => m.react("🇫"));

            return null;
        }
    }
}