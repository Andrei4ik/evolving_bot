const Telegraf = require('telegraf');
let token = '1086668214:AAHiw7-Xmi_7fYf9FA0RXEXW1k02_C9mDoQ';
const bot = new Telegraf(token, {polling:false});
bot.start((ctx) => ctx.reply('Iam liveeee!'));
bot.launch();