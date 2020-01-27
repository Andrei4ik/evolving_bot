const Telegraf = require('telegraf');
const getConfig= require('/config');

const config = getConfig('conf_');
const bot = new Telegraf(config.bot_section.bot_token);
bot.start((ctx) => ctx.reply('Welcome!'));
bot.launch();