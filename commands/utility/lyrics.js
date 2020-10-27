const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const Color = `RANDOM`;
const Genius = new (require("genius-lyrics")).Client(
  "" //Put yours Genius API
);

module.exports = {
  name: "lyrics",
  category: "🛠 | Utility",
  usage: "lyrics <song title and song singer>",
  aliases: ["ly", "lyric"],
  description: "Send lyrics form Genius",
  run: async (bot, message, args) => {
    if (!args[0]) return message.channel.send(`Please Give Me A Song Name!`);

    let Name = args.join(" ");

    Genius.tracks.search(Name).then(results => {
      const song = results[0];
      song
        .lyrics()
        .then(lyrics => {
          message.channel.send(
            new MessageEmbed()
              .setColor(Color)
              .setTitle(`${song.title} Lyrics`)
              .setDescription(
                lyrics.length > 1900 ? `${lyrics.substr(0, 1900)}...` : lyrics
              )
              .setFooter(`Song Creator : ${song.artist.name}`)
              .setThumbnail(song.humbnail)
              .setTimestamp()
          );
        })
        .catch(err => console.error(err));
    });
  }
};
