// DASBOARD
const express = require("express");
const app = express();
const _PORT = process.env.PORT || 8080;
//

const { token, default_prefix } = require("./config.json");
const { config } = require("dotenv");
const Discord = require("discord.js"); 
const bot = new Discord.Client({
  disableEveryone: true 
});
const db = require("quick.db");
const { addexp } = require("./handlers/xp.js");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(bot);
});

bot.on("ready", () => {
  console.log("Kaguya Bot is online senpai >_<");

  //BOT STATUS
  let setatus = [
    "Saekyo",
    `${bot.guilds.cache.size} servers`,
    `${bot.channels.cache.size} channels`,
    `${bot.users.cache.size} users`, 
    `Made with 💙 by Saekyo`
  ];
  setInterval(() => {
    let index = Math.floor(Math.random() * (setatus.length - 1) + 1);

    bot.user.setActivity(`${db.get(`status`)} | ` + setatus[index], {
      type: "STREAMING",
      URL: "https://www.twitch.tv/chilledcatradio"
    });
  }, 300000);

  //NOTIF BOT RESTART
  const upchannel = bot.channels.cache.get("767545904592322572");
  const upembed = new Discord.MessageEmbed()
    .setThumbnail(bot.user.avatarURL())
    .setTitle("Bot restart Notification")
    .setDescription(
      "Maybe some glitch or my owner restarted me I am back online"
    );
  upchannel.send(upembed);
});

//BOT DASBOARD
//IS URL FUNCTION - START
// socketStats Configuration
const socketStats = require("socketstats");
const server = new socketStats(app, bot);

// open / listen port using socketStats
server.listen(_PORT, () => {
  console.log("Listening to port: " + _PORT);
});

//STOP

//==============================================================================

bot.on("message", async message => {
  // AFK COMMANDS
  if (message.author.bot) return;
  const nik = "[AFK]";
  const afterAfk = message.member.displayName.replace(nik, "");

  if (message.author.bot || message.channel.type === "dm") return;

  let afk = new db.table("AFKs"),
    authorStatus = await afk.fetch(message.author.id),
    mentioned = message.mentions.members.first();

  let memafk;
  if (message.mentions.users.first()) {
    memafk = message.mentions.users.first();
  } else {
    memafk = message.author;
  }

  if (mentioned) {
    let status = await afk.fetch(mentioned.id);

    if (status) {
      const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(`${memafk.username} is currently AFK`)
        .setThumbnail(memafk.displayAvatarURL({ format: "png", dynamic: true }))
        .addField(`Reason`, ` ${status}`)
        .setFooter("AFK since ")
        .setTimestamp();
      message.channel.send(embed).then(i => i.delete({ timeout: 5000 }));
    }
  }

  if (authorStatus) {
    message.member.setNickname(afterAfk);
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`**${message.author.tag}** is no longer AFK.`);
    message.channel.send(embed).then(i => i.delete({ timeout: 5000 }));
    afk.delete(message.author.id);
  }

  //END
  
//==============================================================================
  
  if (!message.guild) return;
  let prefix = db.get(`prefix_${message.guild.id}`);
  if (prefix === null) prefix = default_prefix;

  if (!message.content.startsWith(prefix)) return;

  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let cmdx = db.get(`cmd_${message.guild.id}`);

  if (cmdx) {
    let cmdy = cmdx.find(x => x.name === cmd);
    if (cmdy) message.channel.send(cmdy.responce);
  }

  // Get the command
  let command = bot.commands.get(cmd);
  // If none is found, try to find it by alias
  if (!command) command = bot.commands.get(bot.aliases.get(cmd));

  // If a command is finally found, run the command
  if (command) command.run(bot, message, args);

  // return addexp(message);
});

//==============================================================================

//EVENT COMMANDS

//BOT NOTIF JOIN SERVER
bot.on("guildCreate", guild => {
  const channelId = "769433563795161088";
  const channel = bot.channels.cache.get(channelId); 
  const sowner = guild.owner.user; 
  if (!channel) return; 
  const embed = new Discord.MessageEmbed()
    .setTitle("I Joined A Guild!")
    .setDescription(
      `**Guild Name:** ${guild.name} (${guild.id})\n**Members:** ${guild.memberCount}\n**Owner:** ${sowner.tag}`
    )
    .setTimestamp()
    .setColor("GREEN")
    .setFooter(`I'm In ${bot.guilds.cache.size} Guilds Now!`);
  channel.send(embed);
});

//BOT NOTIF LEFT SERVER
bot.on("guildDelete", guild => {
  const channelId = "769433563795161088";
  const channel = bot.channels.cache.get(channelId); 
  const sowner = guild.owner.user; 
  if (!channel) return; 
  const embed = new Discord.MessageEmbed()
    .setTitle("I Left A Guild!")
    .setDescription(
      `**Guild Name:** ${guild.name} (${guild.id})\n**Members:** ${guild.memberCount}\n**Owner:** ${sowner.tag}`
    )
    .setTimestamp()
    .setColor("RED")
    .setFooter(`I'm In ${bot.guilds.cache.size} Guilds Now!`);
  channel.send(embed);
});


bot.login(token);
