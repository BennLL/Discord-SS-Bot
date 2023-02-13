const puppeteer = require("puppeteer");
const { Client, IntentsBitField, Message } = require("discord.js");

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

client.login(
  "MTA3MzA3NjIyNjg5NTM4MDUwMA.G_gfeW.KrWASUjjCvlfpm3Z82Vo-AkohP-w3Eek9GgVVQ"
);

// node index.js to start bot
