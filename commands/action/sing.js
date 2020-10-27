const Discord = require("discord.js")
const { singP } = require('../../assets/json/actions.json');

module.exports = {
  name: "sing",
  category: "🎭 | Actions",
  description: "Sing",
run: async (bot, message, args) => {  

   //var recipient = message.content.split(/\s+/g).slice(1).join(" ");
        const sing = singP[Math.round(Math.random() * (singP.length - 1))];
       
            const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setImage(sing);
             message.channel.send(embed)
    }
}