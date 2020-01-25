var TelegramBot = require('node-telegram-bot-api');
var token = '1086668214:AAHiw7-Xmi_7fYf9FA0RXEXW1k02_C9mDoQ';
var bot = new TelegramBot(token,{polling:true});

bot.onText(/\/exho (.+)/,function(msg, match) {
    var fromId = msg.from.id;
    var resp = match[1];
    bot.sendMessage(fromId, resp);
});

bot.on('message', function (msg) {
    var chatId = msg.chat.id;
    var photo = 'a.jpg';
    bot.sendPhoto(chatId, photo, { caption: 'cutegerl' });
});