const Discord = require("discord.js");

module.exports = {
  name: "8ball",
  category: "😄 | Fun",
  usage: "8ball <your question>",
  description: "Answer the question",
  run: async (bot, message, args) => {
    let answer = [
      "Yes",
      "No",
      "I don't know",
      "Ask again later!",
      "Cyka",
      "I am not sure!",
      "Pls No",
      "You tell me",
      "Without a doubt",
      "Cannot predict now",
      "Without a doubt",
      "I hope so",
      "There is a high probability",
      "I hope not",
      "LOL, Try asking again",
      "Sorry, I'm busy",
      "Maybe yes maybe not",
      "I don't want to say",
      "Try asking people"
    ];
    const arg = args.slice(0).join(" ");
    if (!arg) {
      message.channel.send("Please ask a question.");
      return;
    }
    let ballembed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(
        `${message.author.username}'s question`,
        message.author.displayAvatarURL({ format: "png", dynamic: true })
      )
      .addField("Question", "```" + arg + "```")
      .addField(
        "Answer",
        "```" + answer[Math.floor(Math.random() * answer.length)] + "```"
      )
      .setTimestamp()
      .setFooter(`Thanks for using ${bot.user.username}`);
    message.channel.send(ballembed);
  }
};
