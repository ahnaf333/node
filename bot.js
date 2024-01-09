const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');

// Replace 'YOUR_TOKEN' with the actual token obtained from BotFather
const token = '6907569094:AAGrACscbg98fxIEr59f91kEqEYEUaamWlU';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `
  
  Hello! I\'m your bot.please select one 
  /start
  /ss
  
  `);
});

bot.on('text', (msg) => {
  const chatId = msg.chat.id;
  const userText = msg.text;
  const text_out = eval(userText)
  if (typeof text_out == 'number'){
    bot.sendMessage(chatId, `answer is :> ${text_out}`);
  }
  else{
    bot.sendMessage(chatId, `check your input:> ${text_out}`);
  }
  
  

  // Respond to the user's text
  
});







