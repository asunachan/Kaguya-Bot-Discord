const Discord = require("discord.js");
const wiki = require("wikijs").default;

module.exports = {
  name: "wikipedia",
  category: "🛠 | Utility",
  usage: "wikipedia <your question>",
  aliases: ["wiki"],
  description: "Get information from wikipedia",
  run: async (bot, message, args) => {
    const query = message.content
      .split(/\s+/g)
      .slice(1)
      .join(" ");

    if (!query) {
      return message.channel.send("You must specify something to search!");
    }

    const data = await wiki().search(query, 1);
    if (!data.results || !data.results.length) {
      return message.channel.send("No matches found!");
    }

    const page = await wiki().page(data.results[0]);
    const summary = await page.summary();
    const paragraphs = summary.split("\n");

    if (!query.options) {
      paragraphs.length = Math.min(1, paragraphs.length);
    }
    try {
      const embed = new Discord.MessageEmbed()
        .setAuthor(page.raw.title)
        .setDescription(paragraphs.join("\n\n"))
        .addField("Link", `**${page.raw.fullurl}**`)
        .setFooter(
          "Wikipedia",
          "https://media.discordapp.net/attachments/739051913651159071/739186784923025549/1200px-Wikipedia-logo-v2.svg.png?width=495&height=452"
        )
        .setColor("RANDOM");
      return message.channel.send(embed);
    } catch (err) {
      const embed = new Discord.MessageEmbed()
        .setAuthor(page.raw.title)
        .setDescription(
          "This paragraph was too long for the embed, please click the provided link."
        )
        .addField("Link", `**${page.raw.fullurl}**`)
        .setFooter(
          "Wikipedia",
          "https://media.discordapp.net/attachments/739051913651159071/739186784923025549/1200px-Wikipedia-logo-v2.svg.png?width=495&height=452"
        )
        .setColor("RANDOM");
      return message.channel.send(embed);
    }
  }
};
