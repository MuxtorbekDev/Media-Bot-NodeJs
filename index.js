const Telegraf = require("telegraf");
require("dotenv").config();

const { BOT_TOKEN } = process.env;

const bot = new Telegraf(BOT_TOKEN);

bot.command(["start", "help"], (msg) => {
  let message = `
  /rasm - buyrug'i bilan rasmni olasiz.
  /gif - buyrug'i bilan GIF olish uchun.
  /joylashuv - Joylashuv ni yuboradi.
  /shahar - shaharlarni rasmini yuboradi.
  /shaharlar - shaharlarning matn faylini olish.
  `;

  msg.reply(message);
});

bot.launch();
