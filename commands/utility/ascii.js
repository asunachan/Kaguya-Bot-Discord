const Discord = require("discord.js");
const figlet = require("figlet");

module.exports = {
  name: "ascii",
  category: "🛠 | Utility",
  usage: "ascii <text>",
  description: "Converts text into ascii",
  run: async (bot, message, args, msg) => {
    if (!args[0]) return message.channel.send("Please provide some text");

    msg = args.join(" ");

    figlet.text(msg, function(err, data) {
      if (err) {
        console.log("Something went wrong");
        console.dir(err);
      }
      if (data.length > 2000)
        return message.channel.send(
          "Please provide text shorter than 2000 characters"
        );

      message.channel.send("```" + data + "```");
    });
  }
};
