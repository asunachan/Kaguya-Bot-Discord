const discord = require("discord.js");
const imdb = require("imdb-api");

module.exports = {
  name: "imdb",
  description: "Get the information about series and movie",
  category: "🛠 | Utility",
  usage: "imdb <name>",
  run: async (bot, message, args, color) => {
    if (!args.length) {
      return message.channel.send("Please give the name of movie or series");
    }

    const imob = new imdb.Client({ apiKey: "91a3619d" }); //You need to paste you imdb api

    let movie = await imob.get({ name: args.join(" ") });

    let embed = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(movie.title)
    .setURL(movie.imdburl)
    .setDescription(movie.plot)
    .setThumbnail(movie.poster)
    .addField("❯ Rate", "```" + movie.rating + "```", true)
    .addField("❯ Time", "```" + movie.runtime + "```", true)
    .addField("❯ Awards", "```" + movie.awards + "```", true)
    .addField("❯ Languages", "```" + movie.languages + "```", true)
    .addField("❯ Genres", "```" + movie.genres + "```", true)
    .addField("❯ PG", "```" + movie.rated + "```", true)
    .addField("❯ Country", "```" + movie.country + "```", true)
    .addField("❯ Released", "```" + movie.released + "```")
    .setFooter('All information is provided by IMDB')

    message.channel.send(embed);
  }
};