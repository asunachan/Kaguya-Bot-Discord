const Discord = require("discord.js");
const math = require("mathjs");

module.exports = {
  name: "math",
  category: "🛠 | Utility",
  usage: "math <Your math question>",
  description: "Calculate command",
  run: async (bot, message, args) => {
    if (!args[0]) return message.channel.send("Please provide a question");

    let resp;

    try {
      resp = math.evaluate(args.join(" "));
    } catch (e) {
      return message.channel.send("Please provide a **valid** question");
    }

    const embed = new Discord.MessageEmbed()
      .setAuthor(
        `${message.author.username}'s question`,
        message.author.displayAvatarURL({ format: "png", dynamic: true })
      )
      .setColor("RANDOM")
      .setTitle("Calculator")
      .addField("Question", `\`\`\`css\n${args.join(" ")}\`\`\``)
      .addField("Answer", `\`\`\`css\n${resp}\`\`\``)
      .setTimestamp()
      .setFooter(`Thanks for using ${bot.user.username}`);

    message.channel.send(embed);
  }
};
