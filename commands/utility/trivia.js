const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
let questions = [
  {
    title: "Who is the character from the anime Jojo Bizzare Adventure",
    options: ["Speedwagon", "Jotaro Bejo", "Joss No Limit", "Jasuke Higashita"],
    correct: 1
  },
  {
    title: "Which of the following genres is this NTR",
    options: ["Boruto", "Domestic na kanojo", "Kimi no nawa", "Plastic memories"],
    correct: 2
  },
  {
    title: "Studio yang menggarap Anime fire force/enn enn shoubutai",
    options: ["Ufotable", "David Production", "Diomedia", "Trigger"],
    correct: 2
  },
  {
    title: "Sasageyo sasageyo shinzou wo sasageyo,merupakan opening shingeki no kyojin season",
    options: ["1", "2", "3", "4"],
    correct: 2
  },
  {
    title: "Smile, Sweet, Sister, Sadistic, Suprise, Service",
    options: ["Blend W", "Blend S", "Gochumon", "Nekopara"],
    correct: 2
  },
  {
    title: "Swicth Adalah Opening Highschool DXD season",
    options: ["1", "2", "3", "4"],
    correct: 1
  },
  {
    title: "Siapakah pengarang manga Haikyuu",
    options: ["Shueisha", "Masashi Kishimoto", "Haruichi Furudate", "Akira Tomiyama"],
    correct: 3
  },
  {
    title: "Siapakah pengarang manga black clover",
    options: ["Shueisha", "Yūki Tabata", "Eiichiro Oda", "Takeshi Obata"],
    correct: 2
  },
  {
    title: "Siapakah pengarang manga Koe no katachi (Silent voice)",
    options: ["Yoshitoki Ōima", "Takeshi Obata", "Yūki Tabata", "Eiichiro Oda"],
    correct: 1
  },
  {
    title: "Siapakah pengarang manga Karakai Jōzu no Takagi-san",
    options: ["Shogakukan", "Sōichirō Yamamoto", "Yen Press", "Eiichiro Oda"],
    correct: 2
  },
  {
    title:
      "Band apakah yang menyanyikan ending anime anohana yang berjudul secret base",
    options: ["One direction", "BTS", "JKT 48", "ZONE"],
    correct: 4
  },
  {
    title: "Siapakah Presiden pertama Indonesia",
    options: ["Abdurahman Wahid ", "Ir. Soekarno", "B.J. Habibie", "SBY"],
    correct: 2
  },
  {
    title: "Pada tanggal berapakah diperingati hari kelahiran pancasila",
    options: ["1 Juni ", "28 Juni", "1 Oktober ", "1 Juli"],
    correct: 1
  },
  {
    title: "Pada tanggal berapakah diperingati hari sumpah pemuda",
    options: ["1 Juni ", "28 Oktober", "1 Oktober ", "28 Juli"],
    correct: 2
  },
  {
    title: "Pada tanggal berapakah diperingati hari pahlawan",
    options: ["10 Oktober ", "28 November", "1 November ", "10 November"],
    correct: 4
  },
  {
    title:
      "Siapakah musisi yang berkarya dengan genre musik blues di indonesia",
    options: ["Ginda Bestari", "Fiersa Besari", "Pamungkas", "Rich Brian"],
    correct: 1
  },
  {
    title:
      "Pada tahun berapakah Soeharto mundur dari jabatan Presiden Republik Indonesia",
    options: ["1999", "1995", "1998", "1990"],
    correct: 3
  },
  {
    title: "Pada tahun ini merupakan HUT RI ke...",
    options: ["74", "75", "76", "73"],
    correct: 2
  },
  {
    title: "Kata historis berasal dari kata syajarotun, berasal dari bahasa",
    options: ["Sansakerta", "Belanda", "Kawi", "Arab"],
    correct: 4
  },
  {
    title:
      "Periode yang ditandai dengan penurunan suhu yang drastis di Bumi, sehingga permukaan es yang sangat tebal terbentuk di daerah kutub",
    options: ["Tersier", "hukum", "Cambrium", "Angka Tiga"],
    correct: 1
  },
  {
    title: "Rangka tersusun dari",
    options: [
      "Tulang dan daging", "Tulang dan otot", "Tulang dan kulit", "Rangkaian tulang"],
    correct: 4
  },
  {
    title: "Dibawah ini yang bukan merupakan negara anggota ASEAN adalah",
    options: ["Indonesia", "Vietnam", "Turki", "Laos"],
    correct: 3
  }
];
module.exports = {
  name: "trivia",
  category: "🛠 | Utility",
  description: "Send trivia games",
  run: async (bot, message, args) => {
    if (message.channel.id == "613979762527830028") {
      message.channel.send("You can't playing trivia in general chat");
      return;
    }
    
    let q = questions[Math.floor(Math.random() * questions.length)];
    let i = 0;
    const Embed = new Discord.MessageEmbed()
      .setAuthor(
        `${message.author.username}'s trivia question`,
        message.author.displayAvatarURL({ format: "png", dynamic: true })
      )
      .setTitle(q.title)
      .setDescription(
        q.options.map(opt => {
          i++;
          return `${i} - ${opt}\n`;
        })
      )
      .setColor(`RANDOM`)
      .setFooter(
        `Reply to this message with the correct question number! You have 10 seconds.`
      );
    message.channel.send(Embed);
    try {
      let msgs = await message.channel.awaitMessages(
        u2 => u2.author.id === message.author.id,
        { time: 10000, max: 1, errors: ["time"] }
      );
      if (parseInt(msgs.first().content) == q.correct) {
        return message.reply(`You got it correct!`);
      } else {
        return message.reply(`You got it incorrect.`);
      }
    } catch (e) {
      return message.reply(`You did not answer in time!`);
    }
  }
};
