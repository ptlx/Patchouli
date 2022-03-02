import { CommandInteraction/*,Message*/ } from "discord.js";
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once("ready", async () => {
    const data = [{
        name: "ping",
        description: "initial command",
    }];
    await client.application.commands.set(data/*, process.env.SERVER_ID*/);
    console.log("Ready!");
});

client.on("interactionCreate", async (interaction: CommandInteraction) => {
    if (!interaction.isCommand()) return;
    // ex
    if (interaction.commandName === 'ping') {
        await interaction.reply('pong!!');
    }
});

/*
client.on('messageCreate', (message: Message) => {
    if (message.author.bot) return;
    message.channel.send("テスト");
});

*/
  
  require('dotenv').config();
  client.login(process.env.TOKEN);