const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "pp",
  aliases: ["penis"],
  category: "😄 | Fun",
  usage: "/pp <user>",
  description: "Show's you how long is your pp xD",
  run: async (client, message, args) => {
    var facts = [
      "",
      "=",
      "==",
      "===",
      "====",
      "=====",
      "======",
      "=======",
      "========",
      "=========",
      "==========",
      "===========",
      "============",
      "=============",
      "==============",
      "==============="//little pyramid tho
    ];
    var fact = Math.floor(Math.random() * facts.length);
    let ppuser = message.mentions.users.first() || message.member.user;
    const embed = new MessageEmbed().setTitle("PP size generator")
      .setDescription(`${ppuser.username}' penis \n8${facts[fact]}D`);

    message.channel.send(embed);
  }
};