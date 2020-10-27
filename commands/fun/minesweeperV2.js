const Discord = require("discord.js")
const Minesweeper = require ("discord.js-minesweeper");

module.exports = {
  name: "minesweeperv2",
  category: "😄 | Fun",
  usage: "/minesweeperv2 <number of rows, number of collumns, number of bombs>",
  aliases : ["minev2"],
  description: "Mine sweeper version 2 (customizable)",
run: async (bot, message, args) => {  

  
    const rows = parseInt(args[0]);
    const columns = parseInt(args[1]);
    const mines = parseInt(args[2]);
 
    if (!rows) {
      return message.reply('Please enter rows **use numbers**');
    }
 
    if (!columns) {
      return message.reply('Please enter the number of coulumns **use numbers**');
    }
 
    if (!mines) {
      return message.reply('Please enter the numbers of bombs **use number*');
    }
 
    const minesweeper = new Minesweeper({ rows, columns, mines });
    const matrix = minesweeper.start();
 
    return matrix
      ? message.channel.send(matrix)
      : message.channel.reply('You entered the wrong data');
  }
}