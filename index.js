const puppeteer = require("puppeteer");
const { Client, IntentsBitField, Message } = require("discord.js");
require('dotenv').config();

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", (c) => {
  console.log(`${c.user.username} is online.`);
});

client.on("messageCreate", (msg) => {
  if (msg.author.bot) {
    return;
  }

  if (msg.content === "hi") {
    console.log(msg.content)
    msg.reply("Hello");
  }
});

client.login(process.env.TOKEN);

// node index.js to start bot
