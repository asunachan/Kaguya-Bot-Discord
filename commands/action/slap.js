const Discord = require("discord.js")
const { slapP } = require('../../assets/json/actions.json');
const { selfSlapP } = require('../../assets/json/actions.json');

module.exports = {
  name: "slap",
  category: "🎭 | Actions",
  usage: "slap <mention user>",
  description: "Slap user",
run: async (bot, message, args) => {  

   //var recipient = message.content.split(/\s+/g).slice(1).join(" ");
  
        var selfSlap = selfSlapP[Math.round(Math.random() * (selfSlapP.length - 1))]
        var slap = slapP[Math.round(Math.random() * (slapP.length - 1))]

        if (!args[0]){
            const embed = new Discord.MessageEmbed()
                .setAuthor(`Don't slap your self, ${message.author.username}!!!`)
                .setColor('RANDOM')
                .setImage(selfSlap);
            return message.channel.send(embed);

        } else if (message.mentions.users.first() == message.author) {
            const embed = new Discord.MessageEmbed()
            .setAuthor(`Don't slap your self, ${message.author.username}!!!`)
                .setColor('RANDOM')
                .setImage(selfSlap);
            return message.channel.send(embed);

        } else if (message.mentions.users.first() == "725432896533299200") {
            const embed = new Discord.MessageEmbed()
                .setAuthor(`Sorry, don't slap me :'( ${message.author.username}`)
                .setColor('RANDOM');
            return message.channel.send(embed);

        } else if (message.mentions.users.first()){
            const embed = new Discord.MessageEmbed()
                .setAuthor(`${message.author.username} slaps ${message.mentions.users.first().username}`)
                .setColor('RANDOM')
                .setImage(slap);
            return message.channel.send(embed);
        }
    }

}