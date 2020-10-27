const Discord = require("discord.js");

module.exports = {
  name: "rps",
  category: "😄 | Fun",
  usage: "rps <rock || paper || scissors>\nExample /rps rock",
  description: "Rock paper scissors battle with bot",
  run: async (bot, message, args) => {
    const acceptedReplies = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * acceptedReplies.length);
    const result = acceptedReplies[random];

    const choice = args[0];
    if (!choice)
      return message.channel.send("How to play: /rps <rock|paper|scissors>");
    if (!acceptedReplies.includes(choice))
      return message.channel.send(
        `Only these responses are accepted: \`${acceptedReplies.join(", ")}\``
      );

    console.log("Bot Result:", result);
    if (result === choice)
      return message.reply(
        `You chose **${
          args[0]
        }** and I chose **${result}** and we tied, wanna try again?`
      );

    switch (choice) {
      case "rock": {
        if (result === "paper")
          return message.reply(
            `You chose **${
              args[0]
            }** and I chose **${result}** and I won! Well played.`
          );
        else
          return message.reply(
            `You chose **${
              args[0]
            }** and I chose **${result}** and I lost! Congrats on winning!`
          );
      }
      case "paper": {
        if (result === "scissors")
          return message.reply(
            `You chose **${
              args[0]
            }** and I chose **${result}** and I won! Well played.`
          );
        else
          return message.reply(
            `You chose **${
              args[0]
            }** and I chose **${result}** and I lost! Congrats on winning!`
          );
      }
      case "scissors": {
        if (result === "rock")
          return message.reply(
            `You chose **${
              args[0]
            }** and I chose **${result}** and I won! Well played.`
          );
        else
          return message.reply(
            `You chose **${
              args[0]
            }** and I chose **${result}** and I lost! Congrats on winning!`
          );
      }
      default: {
        return message.channel.send(
          `Only these responses are accepted: \`${acceptedReplies.join(", ")}\``
        );
      }
    }
  }
};
