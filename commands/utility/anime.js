const Discord = require("discord.js");
const { get } = require("request-promise-native");
const { MessageEmbed } = require("discord.js");
const usedCommand = new Set();

module.exports = {
  name: "anime",
  category: "🛠 | Utility",
  usage: "anime <anime title",
  description: "Get anime information",
  run: async (bot, message, args) => {
    if (!args.length) {
      return message.channel.send("Please Give Anime Name");
    }
    //DEFINE OPTIONS
    if (usedCommand.has(message.author.id)) {
      message
        .reply("Please wait, you are in cooldown.")
        .then(i => i.delete({ timeout: 3000 }));
    } else {
      let option = {
        url: `https://kitsu.io/api/edge/anime?filter[text]=${args.join(" ")}`,
        method: `GET`,
        headers: {
          "Content-Type": "application/vnd.api+json",
          Accept: "application/vnd.api+json"
        },
        json: true
      };

      message.channel.send("Please wait.").then(msg => {
        get(option).then(body => {
          try {
            let embed = new MessageEmbed()
              .setTitle(body.data[0].attributes.titles.en)
              .setColor("RANDOM")
              .setDescription(body.data[0].attributes.synopsis)
              .setThumbnail(body.data[0].attributes.posterImage.original)
              .addField("Ratings", body.data[0].attributes.averageRating)
              .addField("TOTAL EPISODES", body.data[0].attributes.episodeCount)
              .setImage(body.data[0].attributes.coverImage.large)
              .setTimestamp()
              .setFooter(`Thanks for using ${bot.user.username}`);
            //try it

            message.channel.send(embed).then(i => i.delete({ timeout: 15000 }));
            msg.delete();
          } catch (err) {
            msg.delete();
            return message.channel.send("Unable to find this anime");
          }
        });
      });

      usedCommand.add(message.author.id);
      setTimeout(() => {
        usedCommand.delete(message.author.id);
      }, 10000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
    }
  }
};
