const Discord = require("discord.js");

module.exports = {
  name: "color",
  category: "🛠 | Utility",
  usage: "color [color tag]",
  description: "Send your request color or random color",
  run: async (bot, message, args) => {
    var color = message.content
      .split(/\s+/g)
      .slice(1)
      .join(" ");

    if (!color) {
      var genColour = "#" + Math.floor(Math.random() * 16777215).toString(16);
      const embed = new Discord.MessageEmbed()
        .setAuthor(
          `${message.author.username}'s color request`,
          message.author.displayAvatarURL({ format: "png", dynamic: true })
        )
        .setColor(genColour)
        .setImage(`https://dummyimage.com/50/${genColour.slice(1)}/&text=%20`)
        .setTimestamp()
        .setTitle(genColour);
      return message.channel.send("Here's your color!", { embed: embed });
    }

    if (
      (color.indexOf("#") === 0 && color.length === 7) ||
      (!isNaN(color) && color.length <= 8 && color < 16777215)
    ) {
      const embed = await new Discord.MessageEmbed()
        .setAuthor(
          `${message.author.username}'s color request`,
          message.author.displayAvatarURL({ format: "png", dynamic: true })
        )
        .setColor(color)
        .setImage(`https://dummyimage.com/50/${color.slice(1)}/&text=%20`)
        .setTimestamp()
        .setTitle(color);
      return message.channel.send({ embed });
    } else {
      return message.channel.send("Invalid Parameters!");
    }
  }
};
