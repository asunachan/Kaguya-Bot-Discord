const { MessageEmbed } = require("discord.js");
const db = require("quick.db")

module.exports = {
  name: "help",
  description:
    "Get list of all command and even get to know every command detials",
  usage: "help <cmd>",
  category: "🌏 | General",
  run: async (bot, message, args) => {
    
     let prefix = db.get(`prefix_${message.guild.id}`)
    if (args[0]) {
      const command = await bot.commands.get(args[0]);

      if (!command) {
        return message.channel.send("Unknown Command: " + args[0]);
      }

      let embed = new MessageEmbed()
        .setAuthor(`${command.name} Commands`, bot.user.displayAvatarURL())
      .setDescription("Global prefix is `/`" + `\nServer prefix is ${prefix || "None"} `)
    .addFields({name : "Support Server", value: "`Coming Soon`", inline : true})
    .addFields({name : "Help Command Usage", value: "`help [name command or module]`", inline : true})
      .addFields({name : "❯ Command's Name", value: `${command.name}`, inline: true})
      .addFields({name : "❯ Command's Description", value: `${command.description || "Not provided"}`, inline: true})
      .addFields({name : "❯ Command's Usage", value: "`" + `${command.usage || "Not provided"}` + "`", inline: true})
      .addFields({name : "❯ Command's Aliases", value: "`" + `${command.aliases ||"No provided"}` + "`", inline: true})
        .setThumbnail(message.guild.iconURL({ format: "png", dynamic: true }))
        .setColor("RANDOM")
        .setFooter(bot.user.username, bot.user.displayAvatarURL());

      return message.channel.send(embed);
    } else {
      const commands = await bot.commands;

      let emx = new MessageEmbed()
        .setAuthor(`${bot.user.username}`, `${bot.user.displayAvatarURL({ format: "png", dynamic: true })}`)
        .setDescription("Global prefix is `/`" + `\nServer prefix is ${prefix || "None"} `)
        .addFields({name : "Support Server", value: "`Coming Soon`", inline : true})
        .addFields({name : "Help Command Usage", value: "`help [name command or module]`", inline : true})
        .setColor("RANDOM")
        .setFooter(
        `Don't include <> or [], it's mean <> is required and [] is optional`,
        "https://media.discordapp.net/attachments/739051913651159071/750732937166848080/12-125584_computer-icons-information-angle-logo-brand-nfl-atlanta-removebg-preview_1.png?width=374&height=391"
      )
        .setThumbnail(message.guild.iconURL({ format: "png", dynamic: true}));

      let com = {};
      for (let comm of commands.array()) {
        let category = comm.category || "Unknown";
        let name = comm.name;

        if (!com[category]) {
          com[category] = [];
        }
        com[category].push(name);
      }

      for(const [key, value] of Object.entries(com)) {
        let category = key;

        let desc = "`" + value.join("`, `") + "`";

        emx.addField(`${category.toUpperCase()}[${value.length}]`, desc);
      }

      let database = db.get(`cmd_${message.guild.id}`)

      if(database && database.length) {
        let array =[]
        database.forEach(m => {
          array.push("`" + m.name + "`")
        })

        emx.addField("Custom Commands", array.join(", "))
      }

      return message.channel.send(emx);
    }
  }
};